"use client"

import { motion } from "framer-motion"
import { FaGraduationCap, FaBook, FaAward, FaChalkboardTeacher, FaGlobe, FaUniversity } from "react-icons/fa"
import { FiArrowRight, FiMail, FiDownload } from "react-icons/fi"
import { downloadCvAsPdf } from "../../lib/downloadCv"
import Link from "next/link"
import { TilfBorder, TilfOverlay, TilfDivider } from "../../components/TilfPattern"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7 },
  }),
}

const education = [
  {
    degree: "Doctor of Philosophy (PhD)",
    field: "Teaching Amharic (TeAm)",
    institution: "Bahir Dar University",
    year: "2023",
    icon: <FaGraduationCap />,
  },
  {
    degree: "Master of Arts (MA)",
    field: "Teaching Amharic",
    institution: "Addis Ababa University",
    year: "2010",
    icon: <FaUniversity />,
  },
  {
    degree: "Bachelor of Arts (BA)",
    field: "Ethiopian Language & Literature (Amharic)",
    institution: "Addis Ababa University",
    year: "2004",
    icon: <FaBook />,
  },
]

const awards = [
  { title: "Best PhD Dissertation Award", org: "Bahir Dar University", year: "2023" },
  { title: "Research Award", org: "Amhara Education Bureau", year: "2013" },
  { title: "Certified Professional Language Teacher", org: "International Certification", year: "2025" },
  { title: "Higher Diploma License", org: "Bahir Dar University", year: "2006" },
]

const roles = [
  {
    title: "Lecturer, Researcher & Student Advisor",
    org: "Bahir Dar University, Department of Amharic Language",
    period: "June 2025 – Present",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "1-on-1 Amharic Language Tutor",
    org: "Preply — International Online Platform",
    period: "January 2025 – Present",
    icon: <FaGlobe />,
  },
  {
    title: "Lecturer & Assistant Professor",
    org: "University of Gondar",
    period: "2018 – May 2025",
    icon: <FaUniversity />,
  },
  {
    title: "Lecturer, Researcher & Gender Coordinator",
    org: "Debre Markos Teachers College",
    period: "2005 – 2016",
    icon: <FaChalkboardTeacher />,
  },
]

const skills = [
  { label: "Amharic Language Instruction", pct: 98 },
  { label: "Curriculum & Textbook Development", pct: 95 },
  { label: "Academic Research & Writing", pct: 93 },
  { label: "Gender & Education Coordination", pct: 90 },
  { label: "Data Analysis (SPSS, AMOS)", pct: 85 },
]

export default function About() {
  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* ── Hero Banner ── */}
      <div
        className="relative pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 px-5 sm:px-6 overflow-hidden"
        style={{ backgroundColor: '#14261E' }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #B08D3A, transparent)' }} />
        </div>
        <TilfOverlay color="#B08D3A" opacity={0.03} />
        <div className="relative max-w-7xl mx-auto">
          <motion.p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: '#B08D3A' }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ✙ About
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            About Dr. Atsede
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A distinguished scholar, educator, and advocate for the Amharic language — from Ethiopian classrooms to international online platforms.
          </motion.p>
        </div>
      </div>

      {/* ── Bio Section ── */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
              <img
                src="/Atsede Propic.jpeg"
                alt="Dr. Atsede Maru Dessie"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(25%) contrast(1.05)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div
              className="absolute -bottom-6 left-6 right-6 p-5 rounded-2xl shadow-xl"
              style={{ backgroundColor: '#14261E' }}
            >
              <p className="text-xs tracking-widest uppercase font-medium mb-1" style={{ color: '#B08D3A' }}>Current Position</p>
              <p className="text-white font-semibold">Lecturer & Researcher</p>
              <p className="text-white/55 text-sm">Department of Amharic Language, Bahir Dar University</p>
            </div>
          </motion.div>

          {/* Text */}
          <div className="md:pt-4">
            <motion.p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
              style={{ color: '#B08D3A' }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
              Biography
            </motion.p>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            >
              Scholar. Educator. Language Ambassador.
            </motion.h2>
            {[
              "Dr. Atsede Maru Dessie is one of Ethiopia's dedicated authorities on Amharic language education. Born in 1976, she discovered her passion for language and teaching early — a passion that would lead her through a distinguished career spanning more than 25 years across multiple institutions.",
              "She began her teaching career in 1998 at a junior school in North Gondar, later joining Debre Markos Teachers College where she spent 11 years as lecturer, researcher, and Gender Unit Coordinator. In 2018, she moved to the University of Gondar as Lecturer and Assistant Professor, teaching undergraduate and graduate students while advising Master's theses.",
              "Her PhD dissertation, completed in 2023 at Bahir Dar University, examined concept-oriented reading instruction in Amharic — a landmark work that received the Best Dissertation award. She also co-authored and edited Grade 3, 4, and 11 Amharic textbooks and teacher guides used across Ethiopia.",
              "Now based at Bahir Dar University as Lecturer and Researcher, she also tutors international students on the Preply platform. She believes that language is not merely a communication tool, but the heartbeat of culture — a philosophy that infuses her teaching, research, and every interaction with students.",
            ].map((para, i) => (
              <motion.p
                key={i}
                className="text-base leading-relaxed mb-4"
                style={{ color: '#5a5a4a' }}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 2} variants={fadeUp}
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              className="flex gap-3 mt-8"
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={6} variants={fadeUp}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: '#14261E' }}
              >
                <FiMail size={14} /> Contact Dr. Atsede
              </Link>
              <button
                onClick={downloadCvAsPdf}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5 cursor-pointer"
                style={{ color: '#14261E', border: '1.5px solid rgba(20,38,30,0.3)' }}
              >
                <FiDownload size={14} /> Download CV
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <TilfBorder className="tilf-shimmer" />

      {/* ── Education ── */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6" style={{ backgroundColor: '#EDECE6' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <motion.p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#B08D3A' }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              Academic Background
            </motion.p>
            <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
              Education
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, i) => (
              <motion.div key={i}
                className="tilf-card p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-2xl"
                  style={{ backgroundColor: 'rgba(20,38,30,0.08)', color: '#14261E' }}>
                  {edu.icon}
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#B08D3A' }}>{edu.year}</p>
                <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}>{edu.degree}</h3>
                <p className="text-sm font-medium mb-2" style={{ color: '#3a5e40' }}>{edu.field}</p>
                <p className="text-sm" style={{ color: '#9a9a88' }}>{edu.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TilfDivider />

      {/* ── Experience ── */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6" style={{ backgroundColor: '#F8F7F4' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <motion.p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#B08D3A' }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              Professional Experience
            </motion.p>
            <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
              Roles & Positions
            </motion.h2>
          </div>
          <div className="flex flex-col gap-6">
            {roles.map((role, i) => (
              <motion.div key={i}
                className="tilf-card flex items-start gap-6 p-7 rounded-2xl bg-white shadow-md"
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                  style={{ backgroundColor: '#14261E', color: '#B08D3A' }}>
                  {role.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}>{role.title}</h3>
                  <p className="text-sm mt-0.5 mb-1" style={{ color: '#5a5a4a' }}>{role.org}</p>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(176,141,58,0.12)', color: '#B08D3A' }}>{role.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TilfBorder className="tilf-shimmer" />

      {/* ── Skills ── */}
      <section className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-6" style={{ backgroundColor: '#14261E' }}>
        <TilfOverlay color="#B08D3A" opacity={0.025} />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <motion.p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#B08D3A' }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              Core Competencies
            </motion.p>
            <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
              Areas of Proficiency
            </motion.h2>
          </div>
          <div className="flex flex-col gap-6">
            {skills.map((skill, i) => (
              <motion.div key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-white/80">{skill.label}</span>
                  <span className="text-sm font-semibold" style={{ color: '#B08D3A' }}>{skill.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: '#B08D3A' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6" style={{ backgroundColor: '#EDECE6' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <motion.p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#B08D3A' }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              Recognition
            </motion.p>
            <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
              Awards & Honours
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, i) => (
              <motion.div key={i}
                className="tilf-card bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              >
                <FaAward size={32} className="mx-auto mb-4" style={{ color: '#B08D3A' }} />
                <h3 className="font-bold text-sm leading-snug mb-2" style={{ color: '#14261E' }}>{award.title}</h3>
                <p className="text-xs mb-2" style={{ color: '#9a9a88' }}>{award.org}</p>
                <span className="text-xs font-semibold" style={{ color: '#B08D3A' }}>{award.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6 text-center" style={{ backgroundColor: '#F8F7F4' }}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          Interested in Tutoring or Research Collaboration?
        </motion.h2>
        <motion.p className="text-base mb-8" style={{ color: '#6b6b58' }}
          initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
          Reach out to discuss 1-on-1 Amharic tutoring, research partnerships, or academic collaboration.
        </motion.p>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
            style={{ backgroundColor: '#14261E' }}
          >
            <FiMail size={16} /> Get in Touch <FiArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
