"use client"

import { motion } from "framer-motion"
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi"
import { FaChalkboardTeacher } from "react-icons/fa"
import { TilfOverlay } from "../../components/TilfPattern"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7 },
  }),
}

export default function Contact() {
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
            Get in Touch
          </motion.p>
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
            Contact
          </motion.h1>
          <motion.p className="text-white/60 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            Reach out for Amharic tutoring, research collaboration, or academic inquiries.
          </motion.p>
        </div>
      </div>

      {/* Contact Info */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Left: Info */}
            <div>
              <motion.p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#B08D3A' }}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                Contact Information
              </motion.p>
              <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
                Let&apos;s Connect
              </motion.h2>

              <div className="flex flex-col gap-6">
                <motion.a href="mailto:dmatsede@gmail.com"
                  className="tilf-card flex items-start gap-4 p-5 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(20,38,30,0.08)', color: '#14261E' }}>
                    <FiMail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#14261E' }}>Email</p>
                    <p className="text-sm mt-0.5" style={{ color: '#6b6b58' }}>dmatsede@gmail.com</p>
                  </div>
                </motion.a>

                <motion.div
                  className="tilf-card flex items-start gap-4 p-5 rounded-2xl bg-white shadow-md"
                  initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(20,38,30,0.08)', color: '#14261E' }}>
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#14261E' }}>Phone</p>
                    <p className="text-sm mt-0.5" style={{ color: '#6b6b58' }}>+251 912 035 217</p>
                    <p className="text-sm" style={{ color: '#6b6b58' }}>+251 935 482 210</p>
                  </div>
                </motion.div>

                <motion.div
                  className="tilf-card flex items-start gap-4 p-5 rounded-2xl bg-white shadow-md"
                  initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4} variants={fadeUp}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(20,38,30,0.08)', color: '#14261E' }}>
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#14261E' }}>Location</p>
                    <p className="text-sm mt-0.5" style={{ color: '#6b6b58' }}>Bahir Dar University</p>
                    <p className="text-sm" style={{ color: '#6b6b58' }}>Bahir Dar, Ethiopia</p>
                  </div>
                </motion.div>

                <motion.div
                  className="tilf-card flex items-start gap-4 p-5 rounded-2xl bg-white shadow-md"
                  initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5} variants={fadeUp}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(20,38,30,0.08)', color: '#14261E' }}>
                    <FaChalkboardTeacher size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#14261E' }}>Online Tutoring</p>
                    <p className="text-sm mt-0.5" style={{ color: '#6b6b58' }}>Available on Preply for 1-on-1 Amharic lessons</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Message Card */}
            <motion.div
              className="tilf-card bg-white p-8 rounded-2xl shadow-xl"
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#14261E' }}>
                Send a Message
              </h3>
              <p className="text-sm mb-6" style={{ color: '#6b6b58' }}>
                Fill out the form below and Dr. Atsede will get back to you as soon as possible.
              </p>
              <form className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: '#14261E' }}>Full Name</label>
                  <input type="text" placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
                    style={{ backgroundColor: '#F8F7F4', border: '1px solid rgba(20,38,30,0.1)', color: '#14261E' }} />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: '#14261E' }}>Email</label>
                  <input type="email" placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
                    style={{ backgroundColor: '#F8F7F4', border: '1px solid rgba(20,38,30,0.1)', color: '#14261E' }} />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: '#14261E' }}>Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
                    style={{ backgroundColor: '#F8F7F4', border: '1px solid rgba(20,38,30,0.1)', color: '#14261E' }}>
                    <option>1-on-1 Amharic Tutoring</option>
                    <option>Research Collaboration</option>
                    <option>Academic Inquiry</option>
                    <option>Curriculum Consultation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider mb-1.5 block" style={{ color: '#14261E' }}>Message</label>
                  <textarea rows={5} placeholder="Your message..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 resize-none"
                    style={{ backgroundColor: '#F8F7F4', border: '1px solid rgba(20,38,30,0.1)', color: '#14261E' }} />
                </div>
                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white transition-all hover:-translate-y-0.5 hover:shadow-lg mt-2"
                  style={{ backgroundColor: '#14261E' }}>
                  Send Message <FiArrowRight size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
