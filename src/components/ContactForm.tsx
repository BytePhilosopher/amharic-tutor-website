"use client"
import { useState } from "react"
import emailjs from "emailjs-com"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [success, setSuccess] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    emailjs.send(
      "YOUR_SERVICE_ID",   // replace with EmailJS service ID
      "YOUR_TEMPLATE_ID",  // replace with EmailJS template ID
      formData,
      "YOUR_PUBLIC_KEY"    // replace with EmailJS public key
    ).then(() => {
      setSuccess("✅ Message sent successfully!")
      setFormData({ name: "", email: "", message: "" })
    }).catch(() => setSuccess("❌ Failed to send message. Try again."))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-3 border rounded h-32"
        required
      />
      <button
        type="submit"
        className="bg-red-700 text-white px-6 py-3 rounded-lg"
      >
        Send
      </button>
      {success && <p className="mt-2">{success}</p>}
    </form>
  )
}
