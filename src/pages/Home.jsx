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
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Quralis Ilm</h1>
          <nav className="hidden md:flex gap-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium">Learn</Link>
            <Link to="/quran" className="text-gray-600 hover:text-gray-900 font-medium">Quran</Link>
            <Link to="/prayer" className="text-gray-600 hover:text-gray-900 font-medium">Prayer</Link>
            <Link to="/chat" className="text-gray-600 hover:text-gray-900 font-medium">Q&A</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <div className="text-center max-w-2xl">
          <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-4">Discover Islamic Knowledge</p>
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">Learn Quran,</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Your comprehensive platform for Islamic education, prayer tracking, and Quranic knowledge with modern tools and authentic references.
          </p>
          <Link 
            to="/quran" 
            className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto w-full px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.name} 
              className="bg-white rounded-xl border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-md transition"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.name}</h3>
              <p className="text-gray-600 text-sm mb-6">{feature.description}</p>
              <Link 
                to={feature.link} 
                className="font-semibold text-gray-900 hover:text-gray-700 flex items-center gap-2"
              >
                Explore <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-900 py-16 w-full mt-8">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Start Your Islamic Journey Today</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of users discovering deeper connections with Islamic knowledge and practices.
          </p>
          <Link 
            to="/chat" 
            className="inline-block px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition"
          >
            Begin Now
          </Link>
        </div>
      </section>
    </div>
  );
}
