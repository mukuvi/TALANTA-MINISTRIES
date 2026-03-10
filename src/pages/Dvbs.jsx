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

const schedule = [
  {
    day: 'Monday',
    title: 'Foundation Day',
    description: 'Introduction to the week\'s theme, opening worship, and foundational Bible lessons that set the stage for deeper learning.',
  },
  {
    day: 'Tuesday',
    title: 'Discovery Day',
    description: 'Interactive Bible study sessions where children explore Scripture through stories, discussions, and hands-on activities.',
  },
  {
    day: 'Wednesday',
    title: 'Adventure Day',
    description: 'Creative activities including crafts, drama, and group projects that bring Bible stories to life in memorable ways.',
  },
  {
    day: 'Thursday',
    title: 'Celebration Day',
    description: 'A joyful conclusion with worship, presentations, awards, and a celebration of everything learned during the week.',
  },
]

const activities = [
  {
    title: 'Bible Lessons',
    description: 'Age-appropriate Scripture teaching that makes God\'s Word accessible and relevant to young minds.',
  },
  {
    title: 'Worship & Songs',
    description: 'Uplifting worship sessions where children learn to praise God through music and song.',
  },
  {
    title: 'Creative Activities',
    description: 'Arts, crafts, and hands-on projects that reinforce the biblical themes of each day.',
  },
  {
    title: 'Group Fellowship',
    description: 'Team-building activities and games that foster friendship and a sense of community.',
  },
  {
    title: 'Memory Verses',
    description: 'Helping children memorize and understand key Scripture passages they can carry for a lifetime.',
  },
  {
    title: 'Prayer Time',
    description: 'Teaching children the importance and practice of prayer in their daily lives.',
  },
]

export default function Dvbs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Page Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent-800 via-accent-700 to-accent-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent-200 font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            Programs
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Daily Vacation Bible Study
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-accent-100 text-lg max-w-2xl mx-auto"
          >
            An enriching program where children explore God's Word through interactive
            lessons, worship, and creative activities.
          </motion.p>
        </div>
      </section>

      {/* About DVBS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <p className="text-accent-600 font-medium tracking-wider uppercase text-sm mb-3">
                What is DVBS?
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Building Faith From a Young Age
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Daily Vacation Bible Study (DVBS) is a dedicated program designed
                to introduce children to the Word of God in an engaging, fun, and
                age-appropriate way. Through carefully planned sessions, children
                discover the richness of Scripture and build a foundation of faith that
                will last a lifetime.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                DVBS runs from Monday through Thursday, with each day building on the
                previous one. Children participate in Bible lessons, worship, creative
                activities, and fellowship, all centered around a central biblical theme.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our trained and caring team of volunteers ensures that every child feels
                welcome, safe, and loved as they learn about God's character and His
                plan for their lives.
              </p>
            </motion.div>

            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-10 lg:p-14 relative">
                <div className="text-center mb-8">
                  <p className="text-accent-700 font-bold text-7xl lg:text-8xl leading-none">DVBS</p>
                  <p className="text-gray-400 text-sm uppercase tracking-[0.2em] mt-3">
                    Daily Vacation Bible Study
                  </p>
                </div>
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-accent-300 to-transparent mb-8" />
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-primary-700 font-bold text-2xl">4</p>
                    <p className="text-gray-500 text-sm">Days</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-primary-700 font-bold text-2xl">Mon-Thu</p>
                    <p className="text-gray-500 text-sm">Schedule</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-accent-600 font-medium tracking-wider uppercase text-sm mb-3">
              The Week
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Weekly Schedule
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Each day of DVBS is carefully planned to build upon the last, taking
              children on a journey of faith and discovery.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {schedule.map((item, i) => (
              <motion.div
                key={item.day}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-accent-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm text-accent-600 font-medium">{item.day}</p>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-14">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-accent-600 font-medium tracking-wider uppercase text-sm mb-3">
              What Children Experience
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              DVBS Activities
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activities.map((activity, i) => (
              <motion.div
                key={activity.title}
                variants={fadeUp}
                custom={i}
                className="bg-gray-50 rounded-xl p-8 hover:bg-accent-50 transition-colors duration-300"
              >
                <div className="w-10 h-1 bg-accent-500 rounded-full mb-5" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{activity.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="py-20 bg-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Register Your Child for DVBS
            </h2>
            <p className="text-accent-100 text-lg mb-8 max-w-2xl mx-auto">
              Give your child an unforgettable experience of learning God's Word in a
              fun and engaging environment. Contact us to register for the next DVBS
              session.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-accent-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Contact Us to Register
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
