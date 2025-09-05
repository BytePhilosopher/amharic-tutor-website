import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="p-10 text-center">
        <h2 className="text-2xl font-bold">Welcome to Amharic Learning</h2>
        <p className="mt-4 text-gray-700">
          Learn Amharic with personalized lessons and cultural insights.
        </p>
      </section>
    </div>
  )
}
