"use client"

import { motion } from "framer-motion"
import { FaQuoteLeft, FaStar } from "react-icons/fa"
import { FiArrowRight } from "react-icons/fi"
import Link from "next/link"
import { TilfBorder, TilfOverlay } from "../../components/TilfPattern"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.7 },
  }),
}

const testimonials = [
  {
    name: "Sarah Gebremichael",
    role: "Heritage Learner",
    location: "London, UK",
    text: "Dr. Atsede's patience and passion are unlike anything I've encountered in a language teacher. She helped me reconnect with my heritage in a way I never thought possible. My Amharic went from broken and hesitant to confident and flowing. I cannot recommend her enough.",
    initials: "SG",
    category: "Tutoring",
    stars: 5,
  },
  {
    name: "Prof. James Okafor",
    role: "Professor of Linguistics",
    location: "University of Lagos, Nigeria",
    text: "A formidable scholar whose contributions to Ethiopian linguistics are genuinely significant. Her paper on Amharic morpho-syntax is now part of our postgraduate reading list. Dr. Atsede is one of the most intellectually rigorous researchers I have had the pleasure of working with.",
    initials: "JO",
    category: "Academic",
    stars: 5,
  },
  {
    name: "Bethlehem Tadesse",
    role: "PhD Candidate",
    location: "Addis Ababa University",
    text: "Dr. Atsede supervised my MA thesis and her mentorship was transformative. She challenged my thinking, expanded my research horizons, and was always available when I needed guidance. I owe a great deal of my academic development to her.",
    initials: "BT",
    category: "Mentorship",
    stars: 5,
  },
  {
    name: "Michael Hailu",
    role: "Parent",
    location: "Toronto, Canada",
    text: "We enrolled our daughter in Dr. Atsede's heritage language programme and the results have been remarkable. Within six months she was reading Amharic children's books and speaking confidently with her grandparents back home. The cultural component of the lessons has been invaluable.",
    initials: "MH",
    category: "Heritage Programme",
    stars: 5,
  },
  {
    name: "Dr. Liya Worku",
    role: "Curriculum Specialist",
    location: "Ministry of Education, Ethiopia",
    text: "We engaged Dr. Atsede for a curriculum consultation project and her expertise exceeded every expectation. Her ability to translate academic theory into practical, implementable curriculum design is extraordinary. The materials she developed are now in use across 12 schools.",
    initials: "LW",
    category: "Consultation",
    stars: 5,
  },
  {
    name: "Dawit Alemayehu",
    role: "Postgraduate Student",
    location: "Oxford University, UK",
    text: "Dr. Atsede's online tutoring prepared me for reading classical Amharic texts for my doctoral research. Her command of both modern and classical forms of the language is extraordinary, and she has a rare gift for breaking down complex linguistic structures.",
    initials: "DA",
    category: "Academic Amharic",
    stars: 5,
  },
  {
    name: "Almaz Bekele",
    role: "Language Teacher",
    location: "Washington D.C., USA",
    text: "I attended one of Dr. Atsede's workshops on Amharic pedagogy and it completely refreshed my approach to teaching. Her insights on heritage learner motivation and engagement were immediately applicable in my classroom. A truly gifted educator.",
    initials: "AB",
    category: "Workshop",
    stars: 5,
  },
  {
    name: "Tekeste Haile",
    role: "Diaspora Community Leader",
    location: "Melbourne, Australia",
    text: "Dr. Atsede ran a group Amharic class for our community association and the experience was wonderful. She brought so much energy, warmth, and expertise. Families who had been disconnected from the language for years left each session with renewed confidence and joy.",
    initials: "TH",
    category: "Group Classes",
    stars: 5,
  },
  {
    name: "Hiwot Mesfin",
    role: "Cultural Organisation Director",
    location: "Stockholm, Sweden",
    text: "We invited Dr. Atsede to deliver a keynote at our Ethiopian Cultural Heritage Summit and she captivated the entire audience. Her command of the subject, her eloquence, and her ability to inspire are truly exceptional. We have already invited her back for next year.",
    initials: "HM",
    category: "Speaking",
    stars: 5,
  },
]

const categories = ["All", "Tutoring", "Heritage Programme", "Academic", "Mentorship", "Consultation", "Workshop", "Group Classes", "Speaking"]

export default function Testimonials() {
  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Hero */}
      <div className="relative pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 px-5 sm:px-6 overflow-hidden" style={{ backgroundColor: '#14261E' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #B08D3A, transparent)' }} />
        </div>
        <TilfOverlay color="#B08D3A" opacity={0.03} />
        <div className="relative max-w-7xl mx-auto">
          <motion.p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#B08D3A' }}
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Kind Words
          </motion.p>
          <motion.h1 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
            Testimonials
          </motion.h1>
          <motion.p className="text-white/60 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            Reflections from students, colleagues, and partners whose lives have been touched by Dr. Atsede's teaching and scholarship.
          </motion.p>
        </div>
      </div>

      {/* Stats */}
      <section style={{ backgroundColor: '#B08D3A' }}>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              ["1000+", "Students Taught"],
              ["3", "Universities Served"],
              ["98%", "Satisfaction Rate"],
              ["25+", "Years Teaching"],
            ].map(([val, label], i) => (
              <motion.div key={i} className="text-center text-white"
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <p className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{val}</p>
                <p className="text-sm text-white/70 mt-1">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Category tags */}
          <motion.div className="flex flex-wrap gap-2 mb-12"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {categories.map(cat => (
              <span key={cat}
                className="text-xs font-medium px-3 py-1.5 rounded-full cursor-pointer transition-all"
                style={{ backgroundColor: cat === "All" ? '#14261E' : 'rgba(20,38,30,0.07)', color: cat === "All" ? '#fff' : '#14261E' }}>
                {cat}
              </span>
            ))}
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <motion.div key={i}
                className="break-inside-avoid tilf-card bg-white p-7 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all inline-block w-full"
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i % 4} variants={fadeUp}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <FaStar key={j} size={13} style={{ color: '#B08D3A' }} />
                  ))}
                </div>
                {/* Category */}
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full mb-4 inline-block"
                  style={{ backgroundColor: 'rgba(20,38,30,0.07)', color: '#14261E' }}>
                  {t.category}
                </span>
                {/* Quote */}
                <FaQuoteLeft size={22} className="mb-3 opacity-15" style={{ color: '#14261E' }} />
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#5a5a4a' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: '#14261E' }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#14261E' }}>{t.name}</p>
                    <p className="text-xs" style={{ color: '#9a9a88' }}>{t.role} · {t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-6 text-center" style={{ backgroundColor: '#14261E' }}>
        <TilfOverlay color="#B08D3A" opacity={0.03} />
        <div className="max-w-3xl mx-auto">
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Ready to Write Your Own Story?
          </motion.h2>
          <motion.p className="text-white/60 mb-10 text-base"
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
            Join hundreds of students who have transformed their connection to the Amharic language and Ethiopian heritage.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: '#B08D3A' }}>
              Begin Your Journey <FiArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
