// pages/index.tsx
import { FaChalkboardTeacher, FaBook, FaGlobe, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  { year: '2000', event: 'Started teaching at XYZ School', icon: <FaChalkboardTeacher /> },
  { year: '2010', event: 'Completed Masters in Education', icon: <FaGraduationCap /> },
  { year: '2015', event: 'International Tutoring Experience', icon: <FaGlobe /> },
  { year: '2023', event: 'PhD in Amharic Literature', icon: <FaBook /> },
];

export default function Home() {
  return (
    <div className="bg-[#F1F2E1] font-sans">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-[#384127] to-[#6B8F71] text-white py-4 px-6 md:px-20 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <h1 className="text-2xl font-bold">Dr. Atsede Maru</h1>
        <div className="space-x-6">
          <a href="#expertise" className="hover:underline">Expertise</a>
          <a href="#timeline" className="hover:underline">Journey</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[#F1F2E1] text-[#384127] py-20 px-6 md:px-20 flex flex-col md:flex-row items-center overflow-hidden">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Dr. Yenealem Tadesse
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-[#4E5340]">
            PhD in Amharic Literature | Assistant Professor | International Tutor | 20+ Years Teaching Experience
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#6B8F71] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#384127] transition"
          >
            Contact Me
          </a>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="/profile-photo.jpg"
            alt="Dr. Yenealem Tadesse"
            className="rounded-xl shadow-2xl w-80 h-80 object-cover border-4 border-[#6B8F71]"
          />
        </div>
      </section>

      {/* Curved SVG transition to Expertise */}
      <div className="relative -mt-1">
        <svg
          className="w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0 C300,80 900,0 1200,60 L1200,120 L0,120 Z"
            fill="url(#grad)"
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#384127" />
              <stop offset="100%" stopColor="#6B8F71" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Highlights / Expertise Section */}
      <section id="expertise" className="bg-gradient-to-r from-[#384127] to-[#6B8F71] text-white py-20 px-6 md:px-20 text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Expertise & Highlights</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center bg-[#4E5340] p-8 rounded-xl shadow-lg hover:scale-105 transform transition">
            <FaChalkboardTeacher className="text-6xl mb-4 text-[#D4DE95]" />
            <h3 className="text-2xl font-semibold mb-2">Teaching</h3>
            <p>20+ years experience in classroom and online teaching.</p>
          </div>
          <div className="flex flex-col items-center bg-[#4E5340] p-8 rounded-xl shadow-lg hover:scale-105 transform transition">
            <FaBook className="text-6xl mb-4 text-[#D4DE95]" />
            <h3 className="text-2xl font-semibold mb-2">Research</h3>
            <p>Published multiple articles in Amharic literature and linguistics.</p>
          </div>
          <div className="flex flex-col items-center bg-[#4E5340] p-8 rounded-xl shadow-lg hover:scale-105 transform transition">
            <FaGlobe className="text-6xl mb-4 text-[#D4DE95]" />
            <h3 className="text-2xl font-semibold mb-2">International Tutoring</h3>
            <p>Worked with students across the globe to improve Amharic and language skills.</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="bg-[#F1F2E1] py-20 px-6 md:px-20 relative">
        <h2 className="text-4xl font-bold mb-16 text-center text-[#384127]">
          Academic Journey
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#384127] to-[#6B8F71]"></div>

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`mb-20 flex items-center w-full ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon with pulse effect */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#6B8F71] text-white text-2xl relative z-10 shadow-lg animate-pulse">
                {exp.icon}
              </div>

              {/* Connector curve */}
              <div
                className={`hidden md:block w-10 h-1 ${
                  idx % 2 === 0 ? "bg-gradient-to-r from-[#6B8F71] to-transparent" : "bg-gradient-to-l from-[#6B8F71] to-transparent"
                }`}
              ></div>

              {/* Timeline Card */}
              <div className="bg-white shadow-xl p-6 rounded-xl md:w-1/2 transform hover:scale-105 transition duration-300">
                <h3 className="text-2xl font-semibold text-[#384127] mb-2">
                  {exp.year}
                </h3>
                <p className="text-[#4E5340]">{exp.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="bg-white py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#384127]">Get in Touch</h2>
        <p className="mb-8 text-[#4E5340]">Interested in tutoring, research collaboration, or speaking engagements?</p>
        <a
          href="mailto:example@email.com"
          className="inline-block bg-[#6B8F71] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#384127] transition"
        >
          Email Me
        </a>
      </section>
    </div>
  );
}
