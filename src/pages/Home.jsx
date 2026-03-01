import { Link } from "react-router-dom";

const features = [
  {
    name: "Islamic Q&A",
    description: "Ask questions in English or Urdu, get Quran and Hadith references.",
    link: "/chat",
    icon: "💬",
  },
  {
    name: "Quran Reader",
    description: "Read Quran in multiple line formats.",
    link: "/quran",
    icon: "📖",
  },
  {
    name: "Prayer Times",
    description: "Check daily prayer times.",
    link: "/prayer",
    icon: "🕋",
  },
  {
    name: "Zakat Calculator",
    description: "Calculate your Zakat easily.",
    link: "/zakat",
    icon: "💰",
  },
  {
    name: "Ramadan Tracker",
    description: "Track Ramadan days and fasting status.",
    link: "/ramadan",
    icon: "🌙",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16">
        <div className="mb-4">
          <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 font-semibold shadow">Discover Islamic Knowledge</span>
        </div>
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-4">Learn Quran,</h1>
        <p className="text-lg text-center text-gray-600 max-w-xl mb-6">
          Your comprehensive platform for Islamic education, prayer tracking, and Quranic knowledge with modern tools and authentic references.
        </p>
        <div className="flex gap-4 justify-center mb-8">
          <Link to="/" className="px-6 py-2 rounded-full bg-white border border-gray-200 text-gray-700 font-semibold shadow hover:bg-gray-50">Learn More</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto w-full px-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <li key={feature.name} className="bg-white rounded-2xl border border-gray-200 shadow p-8 flex flex-col items-center justify-center hover:shadow-lg transition">
              <span className="text-5xl mb-4">{feature.icon}</span>
              <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">{feature.name}</h2>
              <p className="text-gray-600 text-center mb-4">{feature.description}</p>
              <Link to={feature.link} className="font-semibold text-blue-700 hover:underline">Explore &rarr;</Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-900 py-12 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Islamic Journey Today</h2>
          <p className="text-lg text-gray-200 mb-6">Join thousands of users discovering deeper connections with Islamic knowledge and practices.</p>
          <Link to="/" className="px-6 py-3 rounded-full bg-white text-gray-900 font-bold shadow hover:bg-gray-100">Begin Now</Link>
        </div>
      </section>
    </div>
  );
}
