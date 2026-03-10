import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' },
  }),
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
}

const ministries = [
  {
    id: 'childrens',
    name: "Children's Ministry",
    description:
      'Nurturing the faith of our youngest members through age-appropriate Bible lessons, creative activities, and a loving environment where children can grow in their knowledge of God.',
  },
  {
    id: 'couples',
    name: "Couple's Ministry",
    description:
      'Strengthening marriages and relationships through biblical teaching, fellowship, and support. We equip couples to build God-centered homes.',
  },
  {
    id: 'womens',
    name: "Women's Ministry",
    description:
      'A community of women growing together in faith through Bible study, mentorship, prayer, and fellowship. Building strong women of God.',
  },
  {
    id: 'mens',
    name: "Men's Ministry",
    description:
      'Equipping men to be godly leaders in their homes, workplaces, and communities through discipleship, accountability, and brotherhood.',
  },
  {
    id: 'youth',
    name: 'Youth Ministry',
    description:
      'Empowering young adults to discover their identity in Christ and develop a faith that stands firm in every season of life.',
  },
  {
    id: 'teens',
    name: 'Teens Ministry',
    description:
      'A dynamic space for teenagers to explore their faith, build lasting friendships, and develop leadership skills in a Christ-centered environment.',
  },
  {
    id: 'young-professionals',
    name: 'Young Professionals',
    description:
      'Connecting young working professionals in faith and fellowship. Navigating career and purpose with a biblical worldview.',
  },
  {
    id: 'missions',
    name: 'Missions Ministry',
    description:
      'Carrying the Gospel beyond our walls to communities locally and around the world. Fulfilling the Great Commission through outreach and mission trips.',
  },
  {
    id: 'ushering',
    name: 'Ushering & Hospitality',
    description:
      'Creating a warm and welcoming atmosphere for every person who walks through our doors. The first impression of God\'s love in action.',
  },
  {
    id: 'intercessory',
    name: 'Intercessory Ministry',
    description:
      'A dedicated team of prayer warriors standing in the gap for the church, the community, and the nations through fervent, faith-filled prayer.',
  },
  {
    id: 'worship',
    name: 'Worship Ministry',
    description:
      'Leading the congregation into the presence of God through anointed worship and praise. Music, song, and heartfelt adoration.',
  },
  {
    id: 'outreach',
    name: 'Outreach & Evangelism',
    description:
      'Sharing the love of Christ with those who have not yet heard the Gospel through street evangelism, community outreach, and compassionate service.',
  },
  {
    id: 'visitation',
    name: 'Visitation Ministry',
    description:
      'Extending the care of the church beyond Sunday services by visiting the sick, the elderly, newcomers, and those in need of encouragement.',
  },
  {
    id: 'discipleship',
    name: 'Discipleship Ministry',
    description:
      'Walking alongside new and growing believers through structured discipleship programs, Bible studies, and mentoring relationships.',
  },
]

export default function Ministries() {
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent-400 font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            Serving Together
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Our Ministries
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Every member has a place to serve. Discover how you can use your God-given
            talents to make a difference in the Kingdom.
          </motion.p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ministries.map((ministry, i) => (
              <motion.div
                key={ministry.id}
                id={ministry.id}
                variants={fadeUp}
                custom={i}
                className="group bg-white rounded-xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-700 transition-colors duration-300">
                  <span className="text-primary-700 font-bold text-lg group-hover:text-white transition-colors duration-300">
                    {ministry.name[0]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{ministry.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{ministry.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Serve?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
              There is a ministry for everyone at Talanta. We would love to help you
              find where your gifts and passions can be used for God's Kingdom. Reach
              out to us to learn more about getting involved.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary-700 text-white rounded-lg font-semibold text-lg hover:bg-primary-800 transition-all duration-300"
            >
              Contact Us to Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
