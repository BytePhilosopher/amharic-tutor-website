import Hero from "../components/Hero"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Hero />

      {/* About Preview */}
      <section className="p-10 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-red-700">Welcome to Amharic Learning</h2>
        <p className="mt-4 text-gray-700 text-lg">
          Learn Amharic with personalized lessons and cultural insights.
          Whether you’re a beginner or looking to advance your fluency,
          we provide engaging sessions tailored just for you.
        </p>
      </section>

      {/* Services Preview */}
      <section className="p-10 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-6">Our Lessons</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-red-700">Beginner</h3>
            <p className="mt-2 text-gray-600">Learn Amharic alphabets, greetings, and basic conversations.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-red-700">Intermediate</h3>
            <p className="mt-2 text-gray-600">Enhance vocabulary, grammar, and cultural understanding.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-red-700">Advanced</h3>
            <p className="mt-2 text-gray-600">Master fluency, idioms, and advanced expressions.</p>
          </div>
        </div>
        <Link href="/services">
          <button className="mt-6 px-6 py-3 bg-red-700 text-white rounded-lg shadow hover:bg-red-800">
            View All Services
          </button>
        </Link>
      </section>

      {/* Testimonials Preview */}
      <section className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-6">What Students Say</h2>
        <p className="italic text-gray-600 max-w-2xl mx-auto">
          "Learning Amharic has never been this easy and fun! The lessons are practical and engaging."
        </p>
        <Link href="/testimonials">
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-lg shadow hover:bg-yellow-600">
            Read More
          </button>
        </Link>
      </section>
    </div>
  )
}
