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
      <section className="w-full px-4 sm:px-8 py-12 sm:py-20 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl text-center">
          <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide mb-4 sm:mb-6">
            Discover Islamic Knowledge
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Learn Quran,
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 leading-relaxed">
            Your comprehensive platform for Islamic education, prayer tracking, and Quranic knowledge with modern tools and authentic references.
          </p>
          <Link 
            to="/quran" 
            className="inline-block text-sm sm:text-base font-semibold text-gray-900 hover:text-gray-700 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Spacing */}
      <div className="h-8 sm:h-16"></div>

      {/* Features Section */}
      <section className="w-full px-4 sm:px-8 py-8 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature) => (
              <div 
                key={feature.name}
                className="border border-gray-200 rounded-lg sm:rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-sm transition"
              >
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {feature.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8 flex-grow">
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

      {/* Spacing */}
      <div className="h-8 sm:h-16"></div>

      {/* Call to Action Section */}
      <section className="w-full bg-gradient-to-b from-gray-900 to-gray-950 py-12 sm:py-20 px-4 sm:px-8 mt-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Start Your Islamic Journey Today
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mb-8 sm:mb-10 leading-relaxed">
            Join thousands of users discovering deeper connections with Islamic knowledge and practices.
          </p>
          <Link 
            to="/chat"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-gray-900 font-semibold text-sm sm:text-base rounded-full hover:bg-gray-100 transition"
          >
            Begin Now
          </Link>
        </div>
      </section>
    </div>
  );
}
