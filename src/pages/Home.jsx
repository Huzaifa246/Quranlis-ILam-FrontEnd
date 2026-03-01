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
      <header className="w-full px-4 py-6 sm:px-8">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Quralis Ilm</h1>
      </header>

      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide mb-6 sm:mb-8">
              Discover Islamic Knowledge
            </p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 sm:mb-10 leading-tight">
              Learn Quran,
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
              Your comprehensive platform for Islamic education, prayer tracking, and Quranic knowledge with modern tools and authentic references.
            </p>
          </div>
          <div className="flex justify-end">
            <Link 
              to="/quran" 
              className="text-sm sm:text-base font-semibold text-gray-900 hover:text-gray-700 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {features.map((feature) => (
              <div 
                key={feature.name}
                className="border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-10 flex flex-col items-center text-center bg-white hover:shadow-md transition"
              >
                <div className="text-5xl sm:text-6xl mb-6 sm:mb-8">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {feature.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 flex-grow leading-relaxed">
                  {feature.description}
                </p>
                <Link 
                  to={feature.link}
                  className="text-sm font-semibold text-gray-900 hover:text-gray-700 transition"
                >
                  Explore &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-slate-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            Start Your Islamic Journey Today
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-10 sm:mb-12 leading-relaxed">
            Join thousands of users discovering deeper connections with Islamic knowledge and practices.
          </p>
          <Link 
            to="/chat"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-slate-900 font-semibold text-base sm:text-lg rounded-full hover:bg-gray-100 transition"
          >
            Begin Now
          </Link>
        </div>
      </section>
    </div>
  );
}
