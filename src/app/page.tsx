"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaChalkboardTeacher, FaBook, FaGlobe, FaGraduationCap,
  FaQuoteLeft, FaAward, FaUsers, FaFlask,
} from "react-icons/fa"
import { FiArrowRight, FiMail, FiDownload } from "react-icons/fi"
import Link from "next/link"
import { downloadCvAsPdf } from "../lib/downloadCv"
import { TilfBorder, TilfOverlay, TilfDivider } from "../components/TilfPattern"

// ─── Data ───────────────────────────────────────────────────────────────────

const stats = [
  { value: "25+", label: "Years Teaching", amharic: "ዓመታት", icon: <FaChalkboardTeacher /> },
  { value: "1000+", label: "Students Taught", amharic: "ተማሪዎች", icon: <FaUsers /> },
  { value: "5+", label: "Publications", amharic: "ጽሑፎች", icon: <FaFlask /> },
  { value: "3", label: "Universities Served", amharic: "ዩኒቨርሲቲዎች", icon: <FaGlobe /> },
]

const expertise = [
  {
    icon: <FaChalkboardTeacher size={36} />,
    title: "Teaching Excellence",
    desc: "Over 25 years of classroom instruction at teachers colleges, universities, and online platforms. Specializing in Amharic language education from beginner to advanced levels.",
    tag: "25+ Years",
  },
  {
    icon: <FaBook size={36} />,
    title: "Academic Research",
    desc: "Published researcher in Amharic language education, literacy instruction, and gender in education. PhD dissertation on concept-oriented reading instruction awarded Best Dissertation.",
    tag: "PhD Research",
  },
  {
    icon: <FaGlobe size={36} />,
    title: "International Tutoring",
    desc: "One-on-one Amharic tutoring for international students on the Preply platform, helping heritage learners and language enthusiasts worldwide master Amharic.",
    tag: "Preply Tutor",
  },
]

const timeline = [
  {
    year: "1998",
    title: "Teaching Career Begins",
    desc: "Began teaching Amharic at a junior school in North Gondar Zone, starting a lifelong dedication to language education.",
    icon: <FaChalkboardTeacher />,
    side: "right",
  },
  {
    year: "2004",
    title: "Bachelor's Degree",
    desc: "Earned BA in Ethiopian Language & Literature (Amharic) from Addis Ababa University.",
    icon: <FaGraduationCap />,
    side: "left",
  },
  {
    year: "2005",
    title: "Debre Markos Teachers College",
    desc: "Joined as Lecturer, Researcher, and Gender Unit Coordinator. Taught courses in literature, linguistics, methodology, and handwriting for 11 years.",
    icon: <FaAward />,
    side: "right",
  },
  {
    year: "2010",
    title: "Master's Degree",
    desc: "Completed MA in Teaching Amharic from Addis Ababa University with distinction (GPA: 3.81).",
    icon: <FaGraduationCap />,
    side: "left",
  },
  {
    year: "2018",
    title: "Gondar University",
    desc: "Appointed Lecturer and Assistant Professor. Taught undergraduate and graduate students, advised Master's theses, and reviewed journal articles.",
    icon: <FaAward />,
    side: "right",
  },
  {
    year: "2023",
    title: "PhD Conferred",
    desc: "Awarded PhD in Teaching Amharic from Bahir Dar University (CGPA: 3.90). Dissertation on concept-oriented reading instruction received Best Dissertation award.",
    icon: <FaGraduationCap />,
    side: "left",
  },
  {
    year: "2025",
    title: "Bahir Dar University & Preply",
    desc: "Joined Bahir Dar University as Lecturer, Researcher, and Student Advisor. Also began international Amharic tutoring on the Preply platform.",
    icon: <FaGlobe />,
    side: "right",
  },
]

const publications = [
  {
    title: "Concept-Oriented Reading Instruction in Amharic Language Education",
    journal: "PhD Dissertation, Bahir Dar University",
    year: "2023",
    type: "PhD Dissertation",
  },
  {
    title: "Factors Affecting Amharic Language Writing Skills in Grade 4 Students",
    journal: "Published Research Article",
    year: "2013",
    type: "Research Article",
  },
  {
    title: "Early Grade Teachers' Practices in Formulating Instructional Objectives",
    journal: "Published Research Article",
    year: "2013",
    type: "Research Article",
  },
]

const testimonials = [
  {
    name: "Sarah Gebremichael",
    role: "Heritage Language Student, UK",
    text: "Dr. Atsede's patience and passion transformed my broken Amharic into fluent, confident speech. Her teaching goes beyond language — she connects you to culture and identity.",
    initials: "SG",
  },
  {
    name: "Prof. James Okafor",
    role: "Colleague, University of Lagos",
    text: "A formidable scholar whose research on Ethiopian linguistics has advanced the field significantly. Working with her is both intellectually stimulating and deeply rewarding.",
    initials: "JO",
  },
  {
    name: "Bethlehem Tadesse",
    role: "Graduate Student, Addis Ababa University",
    text: "Dr. Atsede was my thesis supervisor and she exemplifies what great mentorship looks like — insightful, encouraging, and incredibly knowledgeable.",
    initials: "BT",
  },
]

// ─── Animation helpers ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7 },
  }),
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div>
      {/* ── Preloader ── */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
            style={{ backgroundColor: '#14261E' }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
          >
            {/* Amharic script decoration */}
            <motion.p
              className="text-sm tracking-[0.4em] mb-3 font-medium"
              style={{ color: '#B08D3A' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              ዶ/ር አፀዴ ማሩ
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Dr. Atsede Maru Dessie
            </motion.h1>
            {/* Progress bar */}
            <motion.div
              className="h-0.5 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', width: '160px' }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: '#B08D3A' }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─────────────────────────────────────────────────────────────────────
          HERO — Clean White Theme
      ───────────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Subtle geometric grid pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #14261E 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        {/* Decorative accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-60 -right-60 w-[800px] h-[800px] rounded-full opacity-[0.035]"
            style={{ background: 'radial-gradient(circle, #B08D3A, transparent)' }} />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.02]"
            style={{ background: 'radial-gradient(circle, #14261E, transparent)' }} />
        </div>

        {/* Bottom fade to cream */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #F8F7F4)' }} />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-24 lg:py-0 w-full">

          {/* ── Mobile & Tablet: Stacked centered layout ── */}
          <div className="flex flex-col items-center text-center lg:hidden">

            {/* Photo */}
            <motion.div
              className="relative mb-10 sm:mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.9 }}
            >
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64">
                {/* Animated rotating ring */}
                <motion.div
                  className="absolute -inset-4 sm:-inset-5 rounded-full"
                  style={{ border: '1.5px dashed rgba(176,141,58,0.2)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                {/* Static ring */}
                <div className="absolute -inset-2 sm:-inset-3 rounded-full"
                  style={{ border: '1.5px solid rgba(176,141,58,0.15)' }} />
                <img
                  src="/profilepic.jpg"
                  alt="Dr. Atsede Maru Dessie"
                  className="relative w-full h-full object-cover rounded-full shadow-xl"
                  style={{ border: '3px solid rgba(176,141,58,0.25)' }}
                />
                {/* Credential badge */}
                <motion.div
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full shadow-lg whitespace-nowrap"
                  style={{ backgroundColor: '#14261E' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.6, duration: 0.5 }}
                >
                  <p className="text-white font-semibold text-[11px] sm:text-xs tracking-wide">PhD · 25+ Years</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.p
              className="text-xs sm:text-sm font-medium tracking-[0.3em] mb-3 sm:mb-4"
              style={{ color: '#B08D3A' }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.6 }}
            >
              ዶ/ር አፀዴ ማሩ
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.8 }}
            >
              Dr. Atsede
              <span className="block italic" style={{ color: '#B08D3A' }}>Maru Dessie</span>
            </motion.h1>

            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3, duration: 0.6 }}
            >
              <div className="w-8 h-[1.5px] rounded-full" style={{ backgroundColor: '#B08D3A' }} />
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold" style={{ color: '#B08D3A' }}>Scholar &amp; Educator</span>
              <div className="w-8 h-[1.5px] rounded-full" style={{ backgroundColor: '#B08D3A' }} />
            </motion.div>

            <motion.p
              className="text-base sm:text-lg mb-1.5 leading-relaxed max-w-md"
              style={{ color: '#3d3d3d' }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.6 }}
            >
              Bringing 25+ years of expertise in Amharic language education, research, and cultural preservation.
            </motion.p>
            <motion.p
              className="text-xs sm:text-sm mb-8 tracking-wide"
              style={{ color: '#8a8a78' }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              Bahir Dar University · Preply Amharic Tutor
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.6 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-semibold text-sm transition-all hover:shadow-xl hover:-translate-y-0.5"
                style={{ backgroundColor: '#14261E', color: '#fff' }}
              >
                Get in Touch <FiArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
                style={{ color: '#14261E', border: '1.5px solid rgba(20,38,30,0.2)' }}
              >
                View Profile
              </Link>
            </motion.div>
          </div>

          {/* ── Desktop: Two-column layout ── */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 items-center min-h-screen">

            {/* Left: Text — 7 columns */}
            <div className="lg:col-span-7 xl:col-span-6">
              <motion.p
                className="text-sm font-medium tracking-[0.3em] mb-5"
                style={{ color: '#B08D3A' }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                ዶ/ር አፀዴ ማሩ
              </motion.p>

              <motion.h1
                className="text-5xl xl:text-7xl font-bold leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9, duration: 0.8 }}
              >
                Dr. Atsede
                <span className="block italic" style={{ color: '#B08D3A' }}>Maru Dessie</span>
              </motion.h1>

              <motion.div
                className="flex items-center gap-3 mb-7"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.6 }}
              >
                <div className="w-10 h-[1.5px] rounded-full" style={{ backgroundColor: '#B08D3A' }} />
                <span className="text-[11px] tracking-[0.2em] uppercase font-semibold" style={{ color: '#B08D3A' }}>Scholar &amp; Educator</span>
                <div className="w-10 h-[1.5px] rounded-full" style={{ backgroundColor: '#B08D3A' }} />
              </motion.div>

              <motion.p
                className="text-lg xl:text-xl mb-2 leading-relaxed max-w-lg"
                style={{ color: '#3d3d3d' }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.3, duration: 0.6 }}
              >
                Bringing 25+ years of expertise in Amharic language education, research, and cultural preservation.
              </motion.p>
              <motion.p
                className="text-sm mb-10 tracking-wide"
                style={{ color: '#8a8a78' }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.5 }}
              >
                Bahir Dar University · Preply Amharic Tutor
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.6 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:shadow-xl hover:-translate-y-0.5"
                  style={{ backgroundColor: '#14261E', color: '#fff' }}
                >
                  Get in Touch <FiArrowRight size={16} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
                  style={{ color: '#14261E', border: '1.5px solid rgba(20,38,30,0.2)' }}
                >
                  View Profile
                </Link>
              </motion.div>
            </div>

            {/* Right: Photo — 5 columns */}
            <motion.div
              className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.9 }}
            >
              <div className="relative w-80 h-80 xl:w-[400px] xl:h-[400px]">
                {/* Animated rotating ring */}
                <motion.div
                  className="absolute -inset-6 rounded-full"
                  style={{ border: '1.5px dashed rgba(176,141,58,0.15)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                {/* Static ring */}
                <div className="absolute -inset-3 rounded-full"
                  style={{ border: '1.5px solid rgba(176,141,58,0.12)' }} />
                {/* Soft warm glow */}
                <div className="absolute inset-0 rounded-full blur-3xl opacity-[0.08]"
                  style={{ background: 'radial-gradient(circle, #B08D3A, transparent)' }} />
                <img
                  src="/profilepic.jpg"
                  alt="Dr. Atsede Maru Dessie"
                  className="relative w-full h-full object-cover rounded-full shadow-2xl"
                  style={{ border: '3px solid rgba(176,141,58,0.25)' }}
                />
                {/* Credential badge */}
                <motion.div
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full shadow-lg whitespace-nowrap"
                  style={{ backgroundColor: '#14261E' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.6, duration: 0.5 }}
                >
                  <p className="text-white font-semibold text-xs tracking-wide">PhD · 25+ Years</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.6 }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: 'rgba(20,38,30,0.3)' }}>Scroll</span>
          <motion.div
            className="w-px h-6 origin-top"
            style={{ backgroundColor: 'rgba(176,141,58,0.4)' }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          STATS BAR
      ───────────────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#14261E' }}>
        <TilfBorder className="tilf-shimmer" opacity={0.5} height={32} />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 sm:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <span className="text-2xl mb-2" style={{ color: '#B08D3A' }}>{s.icon}</span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{s.value}</span>
                <span className="text-sm text-white/70 mt-2 tracking-wide">{s.label}</span>
                <span className="text-xs mt-0.5" style={{ color: '#B08D3A', opacity: 0.6 }}>{s.amharic}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <TilfBorder className="tilf-shimmer" opacity={0.5} height={32} />
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          CULTURAL PROVERB BANNER
      ───────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-16 px-6 text-center overflow-hidden" style={{ backgroundColor: '#F8F7F4' }}>
        <div className="max-w-2xl mx-auto">
          <TilfDivider />
          <div className="py-6">
            <motion.p
              className="text-xs font-semibold tracking-[0.35em] uppercase mb-5"
              style={{ color: '#B08D3A' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              ምሳሌ · Ethiopian Proverb
            </motion.p>
            <motion.p
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              ቋንቋ የባህል መሰረት ነው
            </motion.p>
            <motion.p
              className="text-base sm:text-lg italic"
              style={{ color: '#8a8a78' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
            >
              &ldquo;Language is the foundation of culture&rdquo;
            </motion.p>
          </div>
          <TilfDivider />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          ABOUT PREVIEW
      ───────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-6" style={{ backgroundColor: '#F8F7F4' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image collage */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {/* Decorative background element */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
                style={{ backgroundColor: 'rgba(176,141,58,0.08)', border: '1px solid rgba(176,141,58,0.1)' }} />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="/Atsede Propic.jpeg"
                  alt="Dr. Atsede Maru Dessie"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(15%) contrast(1.05)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-1">Bahir Dar University</p>
                  <p className="text-white font-semibold text-lg" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Lecturer &amp; Researcher</p>
                </div>
              </div>
              {/* Floating credential card */}
              <div
                className="absolute -right-2 sm:-right-6 top-8 sm:top-12 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl max-w-[160px] sm:max-w-[180px]"
                style={{ backgroundColor: '#14261E', border: '1px solid rgba(176,141,58,0.2)' }}
              >
                <p className="text-xs font-medium mb-2" style={{ color: '#B08D3A' }}>Best Dissertation</p>
                <p className="text-white text-sm font-semibold leading-snug">PhD Award</p>
                <p className="text-white/50 text-xs mt-1">Bahir Dar University, 2023</p>
              </div>
            </motion.div>

            {/* Right: Text */}
            <div>
              <motion.p
                className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
                style={{ color: '#B08D3A' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                About Dr. Atsede
              </motion.p>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={fadeUp}
              >
                A Life Dedicated to Language &amp; Learning
              </motion.h2>
              <motion.p
                className="text-base leading-relaxed mb-4"
                style={{ color: '#5a5a4a' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                variants={fadeUp}
              >
                Dr. Atsede Maru Dessie is a distinguished academic whose passion for the Amharic language has shaped her career spanning over 25 years. As a Lecturer and Researcher at Bahir Dar University, she combines rigorous scholarship with an infectious love for teaching.
              </motion.p>
              <motion.p
                className="text-base leading-relaxed mb-8"
                style={{ color: '#5a5a4a' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                variants={fadeUp}
              >
                Her work spans university instruction, international tutoring on Preply, curriculum development, and published research on Amharic language education — all united by a belief that language is the living soul of a people.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-3 mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
                variants={fadeUp}
              >
                {["Amharic Language Education", "Heritage Language Education", "Textbook Development", "Curriculum Design"].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ backgroundColor: 'rgba(20,38,30,0.08)', color: '#14261E', border: '1px solid rgba(20,38,30,0.12)' }}>
                    {tag}
                  </span>
                ))}
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={5}
                variants={fadeUp}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-all hover:gap-3"
                  style={{ color: '#B08D3A' }}
                >
                  Full Academic Profile <FiArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          EXPERTISE
      ───────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-6 relative" style={{ backgroundColor: '#ffffff' }}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #14261E 1px, transparent 0)', backgroundSize: '48px 48px' }} />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: '#B08D3A' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Core Strengths
            </motion.p>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              Areas of Expertise
            </motion.h2>
            <motion.p
              className="text-base max-w-xl mx-auto"
              style={{ color: '#8a8a78' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
            >
              A unique blend of academic rigor and practical teaching experience spanning three decades.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                className="tilf-card group p-8 sm:p-10 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer relative overflow-hidden"
                style={{ backgroundColor: '#F8F7F4', border: '1px solid rgba(20,38,30,0.06)' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                {/* Decorative number */}
                <span className="absolute top-4 right-6 text-7xl font-bold pointer-events-none select-none"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'rgba(176,141,58,0.06)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 group-hover:rounded-2xl"
                  style={{ backgroundColor: '#14261E', color: '#B08D3A' }}
                >
                  {item.icon}
                </div>
                <span
                  className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5 inline-block"
                  style={{ backgroundColor: 'rgba(176,141,58,0.1)', color: '#B08D3A' }}
                >
                  {item.tag}
                </span>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b6b58' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          TIMELINE
      ───────────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6 overflow-hidden" style={{ backgroundColor: '#F8F7F4' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
              style={{ color: '#B08D3A' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Career Milestones
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              Academic Journey
            </motion.h2>
          </div>

          <div className="relative">
            {/* Center line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{ backgroundColor: 'rgba(20,38,30,0.15)', transform: 'translateX(-50%)' }}
            />

            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    item.side === "left" ? "md:flex-row-reverse" : ""
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  custom={i * 0.5}
                  variants={fadeUp}
                >
                  {/* Card */}
                  <div className={`md:w-[calc(50%-48px)] ${item.side === "left" ? "md:text-right" : ""}`}>
                    <div
                      className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
                      style={{ backgroundColor: '#fff', border: '1px solid rgba(20,38,30,0.06)' }}
                    >
                      <span
                        className="text-xs font-semibold tracking-widest uppercase"
                        style={{ color: '#B08D3A' }}
                      >
                        {item.year}
                      </span>
                      <h3
                        className="text-lg font-bold mt-1 mb-2"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#7a7a6a' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div
                    className="hidden md:flex w-12 h-12 rounded-full items-center justify-center shadow-lg flex-shrink-0 z-10 text-white"
                    style={{ backgroundColor: '#14261E', border: '3px solid #F8F7F4' }}
                  >
                    <span className="text-base" style={{ color: '#B08D3A' }}>{item.icon}</span>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-48px)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          PUBLICATIONS
      ───────────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6 relative" style={{ backgroundColor: '#14261E' }}>
        <TilfOverlay color="#B08D3A" opacity={0.025} />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <motion.p
                className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
                style={{ color: '#B08D3A' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                Scholarly Work
              </motion.p>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={fadeUp}
              >
                Selected Publications
              </motion.h2>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                style={{ color: '#B08D3A' }}
              >
                View All Research <FiArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                className="p-7 rounded-2xl group hover:-translate-y-1 transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(176,141,58,0.15)'
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <span
                  className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full mb-5 inline-block"
                  style={{ backgroundColor: 'rgba(176,141,58,0.15)', color: '#B08D3A' }}
                >
                  {pub.type}
                </span>
                <h3
                  className="text-lg font-semibold text-white leading-snug mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {pub.title}
                </h3>
                <div className="mt-auto">
                  <p className="text-sm text-white/50 italic">{pub.journal}</p>
                  <p className="text-sm font-semibold mt-1" style={{ color: '#B08D3A' }}>{pub.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          TESTIMONIALS
      ───────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-6" style={{ backgroundColor: '#F8F7F4' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: '#B08D3A' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Kind Words
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              What People Say
            </motion.h2>
            <motion.p
              className="text-base max-w-lg mx-auto"
              style={{ color: '#8a8a78' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
            >
              Hear from students, colleagues, and collaborators about their experience working with Dr. Atsede.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="tilf-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative"
                style={{ border: '1px solid rgba(20,38,30,0.06)' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                {/* Large decorative quote */}
                <div className="absolute top-6 right-6">
                  <FaQuoteLeft size={40} style={{ color: 'rgba(176,141,58,0.08)' }} />
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: '#14261E' }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#14261E' }}>{t.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#B08D3A' }}>{t.role}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#5a5a4a' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          CTA
      ───────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-6 text-center relative overflow-hidden" style={{ backgroundColor: '#14261E' }}>
        {/* Layered decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.08]"
            style={{ background: 'radial-gradient(ellipse, #B08D3A, transparent)' }} />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
            style={{ background: 'radial-gradient(circle, #B08D3A, transparent)' }} />
        </div>
        <TilfOverlay color="#B08D3A" opacity={0.02} />
        <div className="relative max-w-3xl mx-auto">
          {/* Decorative Amharic script */}
          <motion.p
            className="text-2xl sm:text-3xl mb-6 font-medium"
            style={{ color: 'rgba(176,141,58,0.15)', fontFamily: "'Playfair Display', Georgia, serif" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            ቋንቋ ነፍስ ነው
          </motion.p>
          <motion.p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-5"
            style={{ color: '#B08D3A' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            Let&apos;s Connect
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
          >
            Ready to Begin Your
            <span className="italic" style={{ color: '#B08D3A' }}> Amharic </span>
            Journey?
          </motion.h2>
          <motion.p
            className="text-white/55 text-base sm:text-lg mb-12 leading-relaxed max-w-xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUp}
          >
            Whether you&apos;re a heritage learner, a student, or seeking expert collaboration — Dr. Atsede is here to guide you.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeUp}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl hover:-translate-y-0.5 transform text-sm sm:text-base"
              style={{ backgroundColor: '#B08D3A', color: '#fff' }}
            >
              <FiMail size={16} /> Get in Touch
            </Link>
            <button
              onClick={downloadCvAsPdf}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:-translate-y-0.5 transform text-white cursor-pointer text-sm sm:text-base"
              style={{ border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}
            >
              <FiDownload size={16} /> Download CV
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
