import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const beliefs = [
  {
    title: 'The Bible',
    text: 'We believe the Bible is the inspired, infallible Word of God and the ultimate authority for faith and living.',
  },
  {
    title: 'God',
    text: 'We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.',
  },
  {
    title: 'Salvation',
    text: 'We believe that salvation is a gift of God received through faith in Jesus Christ, who died for our sins and rose again.',
  },
  {
    title: 'The Church',
    text: 'We believe the Church is the body of Christ, called to worship, fellowship, discipleship, and evangelism.',
  },
  {
    title: 'The Great Commission',
    text: 'We believe every Christian is called to share the Gospel and make disciples of all nations.',
  },
  {
    title: 'Prayer',
    text: 'We believe in the power of prayer as our means of communicating with God and seeking His guidance.',
  },
]

const values = [
  { title: 'Faith', description: 'Trusting God in all things and walking by faith, not by sight.' },
  { title: 'Love', description: 'Loving God wholeheartedly and loving our neighbors as ourselves.' },
  { title: 'Service', description: 'Serving others with humility and the heart of a servant leader.' },
  { title: 'Community', description: 'Building authentic relationships through fellowship and mutual support.' },
]

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Page Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-accent-400 font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            Get to Know Us
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            About Talanta Ministries
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A community of believers committed to faith, fellowship, and fulfilling
            the Great Commission.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <p className="text-primary-700 font-medium tracking-wider uppercase text-sm mb-3">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Rooted in Faith, Growing in Purpose
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Talanta Ministries International was born out of a deep desire to see
                lives transformed by the Gospel of Jesus Christ. What began as a small
                group of dedicated believers has grown into a thriving community that
                spans across borders and cultures.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                The name "Talanta" reflects our belief that every person has been given
                unique gifts and talents by God, and it is our calling to develop and
                use these gifts for His glory and the advancement of His Kingdom.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our motto, "Go Ye," is drawn directly from the Great Commission in
                Mark 16:15 and serves as the heartbeat of everything we do. From local
                outreach to global missions, we are committed to sharing the love of
                Christ with the world.
              </p>
            </motion.div>

            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-10 lg:p-14">
                  <img
                    src="/logo.jpg"
                    alt="Talanta Ministries Logo"
                    className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg mb-8"
                  />
                  <p className="text-center text-2xl font-bold text-gray-900 mb-2">
                    Talanta Ministries
                  </p>
                  <p className="text-center text-accent-600 font-serif italic text-lg">
                    "Go Ye Into All The World"
                  </p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-700 rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-400 rounded-xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100"
            >
              <div className="w-12 h-1 bg-primary-700 rounded-full mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-5">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To preach the Gospel to every creature, make disciples of all nations,
                and nurture believers into spiritual maturity through the Word of God,
                prayer, fellowship, and service. We are committed to equipping every
                member to discover and use their God-given talents for the growth of
                the Kingdom.
              </p>
            </motion.div>

            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100"
            >
              <div className="w-12 h-1 bg-accent-500 rounded-full mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-5">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a global ministry that raises a generation of Spirit-filled
                believers who live out their faith, impact their communities, and
                carry the Gospel to the ends of the earth. We envision a church
                without walls, where every believer is a minister and every talent is
                used for God's glory.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section id="beliefs" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary-700 font-medium tracking-wider uppercase text-sm mb-3">
              Our Foundation
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Believe
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {beliefs.map((belief, i) => (
              <motion.div
                key={belief.title}
                variants={fadeUp}
                custom={i}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-primary-200 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{belief.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{belief.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-accent-400 font-medium tracking-wider uppercase text-sm mb-3">
              What Guides Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                custom={i}
                className="text-center p-8"
              >
                <div className="w-16 h-16 bg-primary-700 rounded-2xl mx-auto mb-5 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {value.title[0]}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Come As You Are
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              We would love to welcome you to our next service. No matter where you are
              in your faith journey, there is a place for you here.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Plan Your Visit
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
