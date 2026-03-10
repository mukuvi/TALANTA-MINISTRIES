import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    dropdown: [
      { label: 'Our Story', path: '/about', hash: '#our-story' },
      { label: 'Mission & Vision', path: '/about', hash: '#mission' },
      { label: 'What We Believe', path: '/about', hash: '#beliefs' },
    ],
  },
  {
    label: 'Ministries',
    path: '/ministries',
    dropdown: [
      { label: "Children's Ministry", path: '/ministries', hash: '#childrens' },
      { label: 'Youth Ministry', path: '/ministries', hash: '#youth' },
      { label: 'Worship Ministry', path: '/ministries', hash: '#worship' },
      { label: 'Missions Ministry', path: '/ministries', hash: '#missions' },
      { label: 'View All Ministries', path: '/ministries' },
    ],
  },
  { label: 'DVBS', path: '/dvbs' },
  { label: 'FAQs', path: '/faqs' },
  {
    label: 'Connect',
    path: '/contact',
    dropdown: [
      { label: 'Contact Us', path: '/contact' },
      { label: 'Watch Live', path: '/contact', hash: '#watch-live' },
      { label: 'Need Prayer', path: '/contact', hash: '#prayer' },
      { label: 'Bible Reading', path: '/contact', hash: '#bible-reading' },
    ],
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileDropdown, setMobileDropdown] = useState(null)
  const location = useLocation()
  const navRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
    setMobileDropdown(null)
  }, [location])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(index)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const isHome = location.pathname === '/'
  const navBg = scrolled || !isHome
    ? 'bg-white shadow-md'
    : 'bg-transparent'
  const textColor = scrolled || !isHome
    ? 'text-gray-800'
    : 'text-white'
  const logoFilter = scrolled || !isHome
    ? ''
    : 'brightness-110'

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.jpg"
              alt="Talanta Ministries"
              className={`w-14 h-14 rounded-full object-cover transition-all duration-300 ${logoFilter}`}
            />
            <span className={`hidden sm:block font-bold text-lg tracking-wide transition-colors duration-300 ${textColor}`}>
              TALANTA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary-700 hover:text-white ${
                    location.pathname === item.path
                      ? 'bg-primary-700 text-white'
                      : textColor
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <span className="ml-1 text-xs inline-block transition-transform duration-200" style={{
                      transform: activeDropdown === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>
                      &#9662;
                    </span>
                  )}
                </Link>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="py-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.path + (sub.hash || '')}
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${textColor} hover:bg-gray-100 hover:text-gray-800`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  mobileOpen
                    ? 'rotate-45 translate-y-2 bg-gray-800'
                    : scrolled || !isHome ? 'bg-gray-800' : 'bg-white'
                }`}
              />
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  mobileOpen
                    ? 'opacity-0'
                    : scrolled || !isHome ? 'bg-gray-800' : 'bg-white'
                }`}
              />
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  mobileOpen
                    ? '-rotate-45 -translate-y-2 bg-gray-800'
                    : scrolled || !isHome ? 'bg-gray-800' : 'bg-white'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 lg:hidden"
              style={{ top: '80px' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.35 }}
              className="fixed top-20 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="py-4">
                {navItems.map((item, index) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileDropdown(mobileDropdown === index ? null : index)
                          }
                          className={`w-full flex items-center justify-between px-6 py-4 text-base font-medium transition-colors duration-200 ${
                            location.pathname === item.path
                              ? 'text-primary-700 bg-primary-50'
                              : 'text-gray-800 hover:bg-gray-50'
                          }`}
                        >
                          {item.label}
                          <span
                            className="text-xs transition-transform duration-200"
                            style={{
                              transform: mobileDropdown === index ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                          >
                            &#9662;
                          </span>
                        </button>
                        <AnimatePresence>
                          {mobileDropdown === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden bg-gray-50"
                            >
                              {item.dropdown.map((sub) => (
                                <Link
                                  key={sub.label}
                                  to={sub.path + (sub.hash || '')}
                                  className="block px-10 py-3 text-sm text-gray-600 hover:text-primary-700 hover:bg-primary-50 transition-colors duration-200"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-6 py-4 text-base font-medium transition-colors duration-200 ${
                          location.pathname === item.path
                            ? 'text-primary-700 bg-primary-50'
                            : 'text-gray-800 hover:bg-gray-50'
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="mt-6 px-6">
                  <Link
                    to="/contact"
                    className="block w-full text-center py-3 bg-primary-700 text-white rounded-lg font-medium hover:bg-primary-800 transition-colors duration-300"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
