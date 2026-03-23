"use client"

import { motion } from "framer-motion"
import { FaBook, FaExternalLinkAlt } from "react-icons/fa"
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

const publications = [
  {
    type: "PhD Dissertation",
    title: "ጽንሰሐሳብተኮር (Concept-Oriented) Reading Instruction in Amharic Language Education",
    journal: "Bahir Dar University",
    volume: "PhD Dissertation",
    year: "2023",
    abstract: "This dissertation investigates concept-oriented reading instruction strategies for Amharic language learners, developing and testing an innovative pedagogical framework. Awarded Best Dissertation by Bahir Dar University.",
    doi: "#",
  },
  {
    type: "Research Article",
    title: "Factors Affecting Amharic Language Writing Skills in Grade 4 Students",
    journal: "Published Research Article",
    volume: "Research Project",
    year: "2013",
    abstract: "An empirical study examining the key factors that influence writing skill development in Amharic among Grade 4 primary school students, with recommendations for early literacy interventions.",
    doi: "#",
  },
  {
    type: "Research Article",
    title: "Early Grade Teachers' Practices in Formulating Instructional Objectives",
    journal: "Published Research Article",
    volume: "Research Project",
    year: "2013",
    abstract: "This study analyses how early grade teachers formulate instructional objectives in Amharic language education, identifying gaps and proposing improvements for teacher training programmes.",
    doi: "#",
  },
  {
    type: "Research Article",
    title: "Factors Influencing Female Students' Academic Achievement",
    journal: "Awarded by Amhara Education Bureau",
    volume: "Research Project",
    year: "2013",
    abstract: "An investigation into the socio-cultural and institutional factors affecting female students' academic performance, with a gender-sensitive analytical framework. Received an award from the Amhara Regional Education Bureau.",
    doi: "#",
  },
  {
    type: "Ongoing Research",
    title: "Primary School Teachers Teaching Reading and Writing (Literacy) Cognition and Challenges",
    journal: "University of Gondar — Mega Research",
    volume: "In Progress",
    year: "2025",
    abstract: "A comprehensive mega research project examining primary school teachers' cognition, practices, and challenges in teaching reading and writing literacy skills in Amharic.",
    doi: "#",
  },
  {
    type: "Textbook",
    title: "Grade 3, 4, and 11 Amharic Textbooks and Teacher Guides",
    journal: "Ethiopian National Curriculum",
    volume: "Co-authored & Edited",
    year: "2023",
    abstract: "Co-authored and edited Amharic textbooks and accompanying teacher guides for Grade 3, 4, and 11 as part of the Ethiopian national curriculum development initiative.",
    doi: "#",
  },
]

const conferences = [
  { title: "9th ACLCC Conference", role: "Paper Presenter", location: "Ethiopia", year: "2023" },
  { title: "Journal Article Reviewer", role: "Peer Reviewer", location: "Bahir Dar University", year: "2024" },
  { title: "Journal Article Reviewer", role: "Peer Reviewer", location: "University of Gondar", year: "2018–2025" },
]

const typeColors: Record<string, { bg: string; text: string }> = {
  "Research Article": { bg: 'rgba(20,38,30,0.08)', text: '#14261E' },
  "Book Chapter": { bg: 'rgba(176,141,58,0.12)', text: '#8F7028' },
  "Peer-Reviewed Article": { bg: 'rgba(107,143,110,0.12)', text: '#3d6640' },
  "Conference Paper": { bg: 'rgba(150,100,60,0.1)', text: '#7a5030' },
  "PhD Dissertation": { bg: 'rgba(176,141,58,0.12)', text: '#8F7028' },
  "Ongoing Research": { bg: 'rgba(93,126,96,0.12)', text: '#3d6640' },
  "Textbook": { bg: 'rgba(150,100,60,0.1)', text: '#7a5030' },
}

export default function Blog() {
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
            Scholarly Work
          </motion.p>
          <motion.h1 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
            Research &amp; Publications
          </motion.h1>
          <motion.p className="text-white/60 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            Published research, dissertations, textbooks, and ongoing projects advancing Amharic language education and literacy.
          </motion.p>

          {/* Quick stats */}
          <motion.div className="flex flex-wrap gap-8 mt-10"
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
            {[["5+", "Publications"], ["3+", "Conferences"], ["3", "Textbooks"], ["1", "Best Dissertation"]].map(([val, label]) => (
              <div key={label}>
                <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{val}</p>
                <p className="text-white/50 text-sm">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Publications list */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 className="text-3xl font-bold mb-12"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Selected Publications
          </motion.h2>

          <div className="flex flex-col gap-8">
            {publications.map((pub, i) => {
              const colors = typeColors[pub.type] || { bg: 'rgba(20,38,30,0.08)', text: '#14261E' }
              return (
                <motion.article key={i}
                  className="tilf-card bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: colors.bg, color: colors.text }}>
                      {pub.type}
                    </span>
                    <span className="text-sm font-semibold" style={{ color: '#B08D3A' }}>{pub.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 leading-snug"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}>
                    {pub.title}
                  </h3>
                  <p className="text-sm mb-1" style={{ color: '#9a9a88' }}>
                    <em>{pub.journal}</em> · {pub.volume}
                  </p>
                  <p className="text-sm leading-relaxed mt-4" style={{ color: '#6b6b58' }}>
                    {pub.abstract}
                  </p>
                  <div className="mt-5 flex gap-4">
                    <a href={pub.doi}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all hover:gap-2"
                      style={{ color: '#14261E' }}>
                      <FaExternalLinkAlt size={10} /> Read Paper
                    </a>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <TilfBorder className="tilf-shimmer" />

      {/* Conferences */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6" style={{ backgroundColor: '#EDECE6' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <motion.p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#B08D3A' }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              Academic Service
            </motion.p>
            <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
              Conferences &amp; Reviews
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {conferences.map((conf, i) => (
              <motion.div key={i}
                className="tilf-card bg-white p-6 rounded-2xl shadow-md flex items-start gap-5"
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                  style={{ backgroundColor: 'rgba(20,38,30,0.08)', color: '#14261E' }}>
                  <FaBook />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-snug mb-1" style={{ color: '#14261E' }}>{conf.title}</h3>
                  <p className="text-xs mb-2" style={{ color: '#9a9a88' }}>{conf.location}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ backgroundColor: 'rgba(176,141,58,0.12)', color: '#B08D3A' }}>
                      {conf.role}
                    </span>
                    <span className="text-xs font-semibold" style={{ color: '#B08D3A' }}>{conf.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6 text-center" style={{ backgroundColor: '#F8F7F4' }}>
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Interested in Research Collaboration?
        </motion.h2>
        <motion.p className="text-base mb-8" style={{ color: '#6b6b58' }}
          initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
          Dr. Atsede welcomes proposals for joint research, peer review, and academic partnerships.
        </motion.p>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
            style={{ backgroundColor: '#14261E' }}>
            Propose Collaboration <FiArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
