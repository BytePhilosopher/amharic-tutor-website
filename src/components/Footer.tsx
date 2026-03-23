"use client"
import Link from "next/link"
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi"
import { FaLinkedin, FaTwitter, FaUniversity } from "react-icons/fa"
import { TilfBorder } from "./TilfPattern"

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Research" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#14261E', color: '#fff' }}>
      {/* ጥልፍ border */}
      <TilfBorder height={40} className="tilf-shimmer" />
      {/* Wave divider */}
      <div className="w-full overflow-hidden" style={{ marginBottom: '-2px' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-10 block" style={{ fill: '#F8F7F4' }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-5">
            <p className="text-[10px] sm:text-xs tracking-[0.25em] font-medium mb-1" style={{ color: '#B08D3A' }}>
              ✙ ዶ/ር አፀዴ ማሩ
            </p>
            <h3
              className="text-xl sm:text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Dr. Atsede Maru Dessie
            </h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-5">
              PhD in Teaching Amharic. Lecturer, researcher, and Amharic language educator at Bahir Dar University.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaLinkedin size={14} />, href: "#" },
                { icon: <FaTwitter size={14} />, href: "#" },
                { icon: <FaUniversity size={14} />, href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#B08D3A' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#B08D3A', e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)', e.currentTarget.style.color = '#B08D3A')}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-5" style={{ color: '#B08D3A' }}>
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2.5 sm:space-y-3 sm:gap-0">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-5" style={{ color: '#B08D3A' }}>
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-center gap-3">
                <FiMail size={13} style={{ color: '#B08D3A' }} className="flex-shrink-0" />
                <a href="mailto:dmatsede@gmail.com" className="text-sm text-white/45 hover:text-white transition-colors">
                  dmatsede@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone size={13} style={{ color: '#B08D3A' }} className="flex-shrink-0" />
                <a href="tel:+251912035217" className="text-sm text-white/45 hover:text-white transition-colors">
                  +251 912 035 217
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin size={13} style={{ color: '#B08D3A' }} className="flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/45">
                  Bahir Dar University<br />Bahir Dar, Ethiopia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Cultural proverb */}
        <div className="text-center py-8 sm:py-10 mt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-1.5 tracking-wide" style={{ color: 'rgba(176,141,58,0.7)', fontFamily: "'Playfair Display', Georgia, serif" }}>
            ቋንቋ የባህል መስተዋት ነው
          </p>
          <p className="text-[10px] sm:text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Language is the mirror of culture &nbsp;·&nbsp; Ethiopian Proverb
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-5 flex flex-col sm:flex-row justify-between items-center gap-2" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-white/30 text-[10px] sm:text-xs">
            &copy; {new Date().getFullYear()} Dr. Atsede Maru Dessie. All rights reserved.
          </p>
          <p className="text-white/25 text-[10px] sm:text-xs">
            PhD in Teaching Amharic &middot; Bahir Dar University
          </p>
        </div>
      </div>
    </footer>
  )
}
