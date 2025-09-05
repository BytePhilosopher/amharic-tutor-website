"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-yellow-100 text-center py-20 relative overflow-hidden">
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl font-extrabold text-gray-900"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Learn Amharic with a Personal Tutor
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-gray-700 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Master the Amharic language with personalized lessons, guidance,
        and real cultural insights.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link href="/contact">
          <button className="mt-6 px-8 py-3 bg-red-700 text-white rounded-lg shadow hover:bg-red-800 transition">
            Book a Lesson
          </button>
        </Link>
      </motion.div>
    </section>
  )
}
