import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

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

const faqs = [
  {
    question: 'When was Talanta Ministries founded?',
    answer:
      'Talanta Ministries International was founded by a group of dedicated believers who felt called to spread the Gospel and raise a community that uses their God-given talents for the advancement of His Kingdom. The church has since grown into a vibrant community serving locally and globally.',
  },
  {
    question: 'What are the service times?',
    answer:
      'Our main Sunday service runs from 9:00 AM to 12:00 PM. We also have a midweek service on Wednesday from 6:00 PM to 8:00 PM and a prayer night on Friday from 6:00 PM to 8:00 PM. All are welcome to attend any of our services.',
  },
  {
    question: 'How can I join a ministry?',
    answer:
      'We have 14 ministries covering a wide range of service areas. To join a ministry, simply reach out to us through our contact page or speak with any of our ministry leaders after a service. We will help you find the ministry that best matches your gifts and interests.',
  },
  {
    question: 'What is DVBS?',
    answer:
      'DVBS stands for Daily Vacation Bible Study. It is a program designed for children where they learn about God\'s Word through interactive Bible lessons, worship, creative activities, and fellowship. The program runs from Monday to Thursday, with each day featuring a different theme and set of activities.',
  },
  {
    question: 'Do you have programs for children and youth?',
    answer:
      'Yes, we have dedicated ministries for children, teens, and youth. Our Children\'s Ministry provides age-appropriate Bible education, our Teens Ministry creates a dynamic space for teenagers, and our Youth Ministry empowers young adults. We also run our DVBS program for children.',
  },
  {
    question: 'How can I give or tithe?',
    answer:
      'We believe in the biblical principle of tithing and giving. You can give during our services or contact us for information about other giving options. All contributions go towards supporting our ministries, outreach programs, and the operational needs of the church.',
  },
  {
    question: 'How can I request prayer?',
    answer:
      'You can submit a prayer request through our contact page, speak with our Intercessory Ministry team after any service, or reach out to us via WhatsApp or email. Our prayer team is committed to standing with you in prayer for whatever you are going through.',
  },
  {
    question: 'Is there a way to watch services online?',
    answer:
      'Yes, we stream our services live. You can watch us through our YouTube channel and stay connected with us through our social media platforms. Visit our Connect page for all the links to watch live and stay updated.',
  },
  {
    question: 'What does "Talanta" mean?',
    answer:
      'The name "Talanta" comes from the concept of talents as described in the Bible. It reflects our belief that God has given every person unique gifts and abilities, and our calling is to develop and use these talents for His glory and the growth of His Kingdom.',
  },
  {
    question: 'What does "Go Ye" mean?',
    answer:
      '"Go Ye" is our motto, drawn from Mark 16:15 where Jesus commands His disciples: "Go ye into all the world, and preach the gospel to every creature." This verse is the heartbeat of our ministry and drives our commitment to evangelism and missions.',
  },
]

function FaqItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="border border-gray-100 rounded-xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-6 text-left transition-colors duration-300 ${
          isOpen ? 'bg-primary-50' : 'bg-white hover:bg-gray-50'
        }`}
      >
        <span
          className={`text-base font-semibold pr-4 transition-colors duration-300 ${
            isOpen ? 'text-primary-700' : 'text-gray-900'
          }`}
        >
          {faq.question}
        </span>
        <span
          className={`text-lg shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-45 text-primary-700' : 'text-gray-400'
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 bg-white">
              <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            Questions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Find answers to the most commonly asked questions about Talanta
            Ministries International.
          </motion.p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggleFaq(i)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
              We would love to hear from you. Reach out to us and we will be happy to
              help with any questions you may have.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-primary-700 text-white rounded-lg font-semibold text-lg hover:bg-primary-800 transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
