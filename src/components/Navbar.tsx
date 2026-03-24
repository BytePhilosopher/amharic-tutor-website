"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu, FiX, FiDownload } from "react-icons/fi"
import { usePathname } from "next/navigation"
import { downloadCvAsPdf } from "../lib/downloadCv"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Research" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  // Close menu on route change
  useEffect(() => { setIsOpen(false) }, [pathname])

  const isTransparent = isHome && !scrolled && !isOpen

  // On homepage with white hero: use dark text when transparent
  const useDarkText = isTransparent && isHome

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent ? "bg-transparent py-4 sm:py-5 lg:py-6" : "py-2.5 sm:py-3"
        }`}
        style={!isTransparent ? {
          backgroundColor: 'rgba(20,38,30,0.97)',
          borderBottom: '1px solid rgba(176,141,58,0.15)',
          backdropFilter: 'blur(12px)',
        } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group relative z-50">
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] sm:text-xs tracking-[0.2em] font-medium" style={{ color: '#B08D3A' }}>
                ዶ/ር አፀዴ ማሩ
              </span>
              <span
                className="font-bold text-[15px] sm:text-lg leading-tight transition-colors duration-500"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: useDarkText ? '#14261E' : '#ffffff' }}
              >
                Dr. Atsede Maru
              </span>
            </div>
          </Link>

          {/* Desktop Menu — visible from lg (1024px) */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium tracking-wide uppercase transition-all duration-500 relative group"
                  style={{
                    color: active
                      ? (useDarkText ? '#14261E' : '#ffffff')
                      : (useDarkText ? 'rgba(20,38,30,0.5)' : 'rgba(255,255,255,0.55)')
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = useDarkText ? '#14261E' : '#ffffff'}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = useDarkText ? 'rgba(20,38,30,0.5)' : 'rgba(255,255,255,0.55)'
                  }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    style={{ backgroundColor: '#B08D3A' }}
                  />
                </Link>
              )
            })}
            <button
              onClick={downloadCvAsPdf}
              className="flex items-center gap-2 text-[13px] font-semibold px-4 py-2 rounded-full transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer ml-1"
              style={useDarkText
                ? { backgroundColor: '#14261E', color: '#ffffff' }
                : { backgroundColor: '#fff', color: '#B08D3A' }
              }
            >
              <FiDownload size={13} />
              CV
            </button>
          </div>

          {/* Mobile / Tablet Toggle */}
          <button
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full transition-colors"
            style={{ backgroundColor: isOpen ? 'rgba(176,141,58,0.15)' : 'transparent' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <FiX size={20} className="text-white" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <FiMenu size={20} style={{ color: useDarkText ? '#14261E' : '#ffffff' }} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Full-screen mobile/tablet menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden flex flex-col items-center justify-center"
            style={{ backgroundColor: '#14261E' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Decorative background glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/4 -right-20 w-[300px] h-[300px] rounded-full opacity-[0.06]"
                style={{ background: 'radial-gradient(circle, #B08D3A, transparent)' }} />
            </div>

            <nav className="relative flex flex-col items-center gap-1">
              {navLinks.map((link, i) => {
                const active = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      className={`block text-center text-2xl sm:text-3xl font-medium tracking-wide py-2.5 sm:py-3 transition-colors ${
                        active ? "text-white" : "text-white/40 hover:text-white"
                      }`}
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                      {active && (
                        <span className="block w-8 h-0.5 mx-auto mt-1" style={{ backgroundColor: '#B08D3A' }} />
                      )}
                    </Link>
                  </motion.div>
                )
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.25 }}
                className="mt-6"
              >
                <button
                  className="flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold cursor-pointer transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: '#B08D3A', color: '#fff' }}
                  onClick={() => { downloadCvAsPdf(); setIsOpen(false) }}
                >
                  <FiDownload size={15} />
                  Download CV
                </button>
              </motion.div>

              <motion.p
                className="mt-8 text-[10px] tracking-[0.3em]"
                style={{ color: 'rgba(176,141,58,0.35)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                ✙ ዶ/ር አፀዴ ማሩ ✙
              </motion.p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
