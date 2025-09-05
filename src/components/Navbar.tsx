"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-red-700 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Amharic Tutor</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-red-700 flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}
