import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const footerLinks = {
  'Quick Links': [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Ministries', path: '/ministries' },
    { label: 'DVBS', path: '/dvbs' },
  ],
  'Get Involved': [
    { label: 'FAQs', path: '/faqs' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Need Prayer', path: '/contact#prayer' },
    { label: 'Know Jesus', path: '/about#beliefs' },
  ],
  'Connect With Us': [
    { label: 'Instagram', url: 'https://www.instagram.com/' },
    { label: 'Facebook', url: 'https://www.facebook.com/' },
    { label: 'YouTube', url: 'https://www.youtube.com/' },
    { label: 'WhatsApp', url: 'https://web.whatsapp.com/' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.jpg"
                alt="Talanta Ministries"
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-white font-bold text-lg tracking-wide">
                TALANTA
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              Talanta Ministries International - a community of believers committed
              to the Great Commission. Go Ye Into All The World.
            </p>
            <p className="text-sm text-gray-500">
              talantaministriesinte@gmail.com
            </p>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links], colIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (colIndex + 1) * 0.1 }}
            >
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.url ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            Talanta Ministries International. All rights reserved.
          </p>
          <p className="text-accent-500 font-serif italic text-lg">
            "Go Ye"
          </p>
        </div>
      </div>
    </footer>
  )
}
