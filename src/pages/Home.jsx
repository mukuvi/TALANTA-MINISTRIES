import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
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
  visible: { transition: { staggerChildren: 0.12 } },
}

const ministriesPreview = [
  {
    name: "Children's Ministry",
    description: 'Nurturing the faith of our youngest members through engaging lessons, activities, and love.',
  },
  {
    name: 'Youth Ministry',
    description: 'Empowering teenagers and young adults to grow in their walk with Christ.',
  },
  {
    name: 'Worship Ministry',
    description: 'Leading the congregation in heartfelt worship and praise to God.',
  },
  {
    name: 'Missions Ministry',
    description: 'Reaching communities locally and globally with the message of the Gospel.',
  },
  {
    name: "Women's Ministry",
    description: 'Building a supportive community of women rooted in faith, prayer, and fellowship.',
  },
  {
    name: 'Outreach & Evangelism',
    description: 'Sharing the love of Christ through community service and the Gospel message.',
  },
]

const serviceTimes = [
  { day: 'Sunday', time: '9:00 AM - 12:00 PM', label: 'Main Service' },
  { day: 'Wednesday', time: '6:00 PM - 8:00 PM', label: 'Midweek Service' },
  { day: 'Friday', time: '6:00 PM - 8:00 PM', label: 'Prayer Night' },
]

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images8.alphacoders.com/529/529702.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-accent-400 font-medium tracking-[0.3em] uppercase text-sm mb-6"
          >
            Welcome to
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Talanta Ministries
            <span className="block text-accent-400 mt-2">International</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg sm:text-xl text-gray-300 font-serif italic mb-10 max-w-2xl mx-auto"
          >
            "Go ye into all the world, and preach the gospel to every creature."
            <span className="block text-sm mt-2 text-gray-400 not-italic">— Mark 16:15</span>
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/about"
              className="px-8 py-4 bg-primary-700 text-white rounded-lg font-semibold text-lg hover:bg-primary-800 transition-all duration-300 hover:shadow-lg hover:shadow-primary-700/30"
            >
              Join Us This Sunday
            </Link>
            <Link
              to="/ministries"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Our Ministries
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <p className="text-primary-700 font-medium tracking-wider uppercase text-sm mb-3">
                About Our Church
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                A Place of Faith, Fellowship & Purpose
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Talanta Ministries International is a vibrant community of believers
                dedicated to spreading the Gospel and nurturing spiritual growth. Founded
                on the principles of love, service, and the Great Commission, we welcome
                everyone to experience the transforming power of God's word.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you are seeking a church home, looking to deepen your faith, or
                simply curious about what we do, you will find a warm and welcoming
                community here. Our doors are open to all.
              </p>
              <Link
                to="/about"
                className="inline-block px-6 py-3 border-2 border-primary-700 text-primary-700 rounded-lg font-semibold hover:bg-primary-700 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </motion.div>

            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-10"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Service Times</h3>
              <div className="space-y-6">
                {serviceTimes.map((service, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 pb-6 border-b border-gray-200 last:border-0 last:pb-0"
                  >
                    <div className="w-14 h-14 bg-primary-700 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-xs text-center leading-tight">
                        {service.day.slice(0, 3).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{service.label}</p>
                      <p className="text-gray-500 text-sm">{service.day}</p>
                      <p className="text-primary-700 font-medium text-sm mt-1">{service.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-14"
          >
            <p className="text-primary-700 font-medium tracking-wider uppercase text-sm mb-3">
              Serving Together
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Ministries
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From children to adults, worship to outreach, our ministries serve every
              member of the community and beyond.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ministriesPreview.map((ministry, i) => (
              <motion.div
                key={ministry.name}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-12 h-1 bg-primary-700 rounded-full mb-5 group-hover:w-20 transition-all duration-300" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {ministry.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {ministry.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/ministries"
              className="inline-block px-8 py-4 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-all duration-300 hover:shadow-lg"
            >
              View All Ministries
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-20 lg:py-28 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-16 h-0.5 bg-accent-500 mx-auto mb-8" />
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-white leading-relaxed mb-8">
              "For God so loved the world, that he gave his only begotten Son, that
              whosoever believeth in him should not perish, but have everlasting life."
            </blockquote>
            <p className="text-accent-400 font-medium tracking-wider uppercase text-sm">
              John 3:16
            </p>
            <div className="w-16 h-0.5 bg-accent-500 mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* DVBS Preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-10 lg:p-14">
                <p className="text-accent-700 font-bold text-6xl lg:text-7xl mb-2">DVBS</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">
                  Daily Vacation Bible Study
                </p>
                <div className="space-y-4">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday'].map((day, i) => (
                    <div
                      key={day}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="w-8 h-8 bg-primary-700 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="font-medium">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="order-1 lg:order-2"
            >
              <p className="text-primary-700 font-medium tracking-wider uppercase text-sm mb-3">
                Programs
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Daily Vacation Bible Study
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our DVBS program provides children with an enriching experience of
                learning the Word of God through interactive lessons, bible stories,
                creative activities, and fellowship with other young believers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Running Monday through Thursday, each session is designed to make
                scripture come alive for young hearts and minds.
              </p>
              <Link
                to="/dvbs"
                className="inline-block px-6 py-3 bg-accent-600 text-white rounded-lg font-semibold hover:bg-accent-700 transition-all duration-300"
              >
                Learn More About DVBS
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              You Are Welcome Here
            </h2>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-10">
              Whether you have been walking with Christ for years or are just beginning
              to explore faith, there is a place for you at Talanta Ministries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Get In Touch
              </Link>
              <Link
                to="/faqs"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Common Questions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
