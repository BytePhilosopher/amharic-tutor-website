import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-red-700 text-white p-4 flex justify-between">
      <h1 className="font-bold">Amharic Tutor</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
