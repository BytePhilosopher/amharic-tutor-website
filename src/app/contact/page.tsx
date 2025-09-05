import ContactForm from "../../components/ContactForm"

export default function Contact() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Contact & Booking</h1>
      
      {/* Contact Form */}
      <ContactForm />

      {/* Calendly Embed */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Book a Lesson</h2>
        <iframe
          src="https://calendly.com/YOUR_CALENDLY_USERNAME/lesson"
          width="100%"
          height="600"
          frameBorder="0"
          className="rounded-lg shadow"
        ></iframe>
      </div>
    </div>
  )
}
