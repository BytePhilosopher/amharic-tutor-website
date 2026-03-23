"use client"

import { motion } from "framer-motion"
import { FaChalkboardTeacher, FaGlobe, FaBook, FaUsers, FaCheck, FaUniversity } from "react-icons/fa"
import { FiArrowRight, FiMail } from "react-icons/fi"
import Link from "next/link"
import { TilfBorder, TilfOverlay, TilfDivider } from "../../components/TilfPattern"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7 },
  }),
}

const services = [
  {
    icon: <FaChalkboardTeacher size={32} />,
    title: "1-on-1 Amharic Tutoring",
    desc: "Personalised online sessions via the Preply platform, tailored to your level — from absolute beginner to advanced. Master speaking, reading, writing, and listening with structured lesson plans.",
    features: ["Beginner to advanced levels", "Custom lesson plans", "Flexible scheduling", "Ge'ez script instruction", "Via Preply platform"],
    badge: "Most Popular",
  },
  {
    icon: <FaUsers size={32} />,
    title: "Group Language Classes",
    desc: "Small-group sessions (2–6 students) offering structured instruction in a collaborative setting. Ideal for families, church groups, and diaspora communities.",
    features: ["Up to 6 students", "Community learning", "Cultural context included", "Weekly group sessions", "Learning materials provided"],
    badge: null,
  },
  {
    icon: <FaGlobe size={32} />,
    title: "Heritage Language Programme",
    desc: "Designed specifically for diaspora children and adults who have Amharic roots but limited fluency. Reconnect with your mother tongue and cultural identity.",
    features: ["Identity-centred approach", "Family engagement activities", "Ethiopian cultural immersion", "Online & in-person", "Progress tracking"],
    badge: "Heritage Learners",
  },
  {
    icon: <FaBook size={32} />,
    title: "Academic Amharic",
    desc: "Advanced instruction for researchers, linguists, and postgraduate students working with Amharic texts. Includes reading classical Amharic literature and academic writing.",
    features: ["Classical Amharic texts", "Linguistic analysis", "Academic writing support", "Research methodology", "Thesis consultation"],
    badge: null,
  },
  {
    icon: <FaUniversity size={32} />,
    title: "Curriculum Consultation",
    desc: "Expert guidance for schools, universities, and colleges seeking to develop or improve Amharic language curricula. Experienced in co-authoring national textbooks for Grade 3, 4, and 11.",
    features: ["Curriculum design", "Assessment frameworks", "Teacher training", "Textbook co-authoring", "Policy recommendations"],
    badge: "Institutional",
  },
  {
    icon: <FaChalkboardTeacher size={32} />,
    title: "Speaking Engagements",
    desc: "Keynote lectures, academic seminars, and workshops on Amharic language, Ethiopian literature, and heritage education for institutions and conferences.",
    features: ["Keynote lectures", "Academic workshops", "Cultural seminars", "Conference talks", "Online & in-person"],
    badge: null,
  },
]

const process = [
  { step: "01", title: "Initial Consultation", desc: "A free 30-minute session to understand your goals, current level, and preferred learning style." },
  { step: "02", title: "Personalised Plan", desc: "Dr. Atsede designs a custom learning roadmap tailored specifically to your objectives and schedule." },
  { step: "03", title: "Structured Sessions", desc: "Regular sessions with engaging materials, clear milestones, and built-in cultural context." },
  { step: "04", title: "Progress & Feedback", desc: "Ongoing assessments, regular feedback, and adaptive pacing to ensure continuous improvement." },
]

export default function Services() {
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
            What I Offer
          </motion.p>
          <motion.h1 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
            Services
          </motion.h1>
          <motion.p className="text-white/60 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            From personal tutoring to institutional curriculum design — expert Amharic language services for every need.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div key={i}
                className="relative tilf-card bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              >
                {service.badge && (
                  <span className="absolute top-6 right-6 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(176,141,58,0.15)', color: '#B08D3A' }}>
                    {service.badge}
                  </span>
                )}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all group-hover:scale-110"
                  style={{ backgroundColor: 'rgba(20,38,30,0.07)', color: '#14261E' }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#6b6b58' }}>
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm" style={{ color: '#5a5a4a' }}>
                      <FaCheck size={10} style={{ color: '#B08D3A', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TilfBorder className="tilf-shimmer" />

      {/* Process */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6" style={{ backgroundColor: '#EDECE6' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#B08D3A' }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              How It Works
            </motion.p>
            <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
              The Learning Journey
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <motion.div key={i} className="text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 font-bold text-xl"
                  style={{ backgroundColor: '#14261E', color: '#B08D3A', fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {step.step}
                </div>
                <h3 className="text-lg font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b6b58' }}>{step.desc}</p>
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
            Ready to Start Learning?
          </motion.h2>
          <motion.p className="text-white/60 mb-10 text-base"
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
            Book a free consultation and take the first step toward Amharic fluency.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: '#B08D3A' }}>
              <FiMail size={16} /> Book Free Consultation <FiArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
