import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import chatbotImage from '../images/AI-mental-health-chatbot.png';


function AnimatedSection({ section }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 snap-center space-y-6 md:space-y-0 md:space-x-10"
    >
      <img
        src={section.image}
        alt={section.title}
        className="w-full md:w-[400px] h-auto rounded-2xl shadow-xl"
      />
      <div className="text-center md:text-left max-w-md space-y-4">
        <h2 className="text-3xl font-bold text-yellow-400">{section.title}</h2>
        <p className="text-gray-300">{section.description}</p>
        <a
          href={section.route}
          className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Explore
        </a>
      </div>
    </motion.div>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    {
      title: "🧠 Mental Health Chatbot",
      description:
        "A friendly chatbot to talk about stress, focus, and wellness. Multilingual, voice-enabled support.",
      image:
        chatbotImage,
      route: "/mental-health",
    },
    {
      title: "🤖 AI Doctor Assistant",
      description:
        "Ask medical questions and get AI-powered answers, based on real-time health data and symptoms.",
      image:
        "https://img.freepik.com/free-vector/medical-diagnosis-concept-illustration_114360-8699.jpg",
      route: "/ai-assistant",
    },
    {
      title: "📅 Book Appointments(Under-development)",
      description:
        "Browse and book appointments with certified doctors easily with availability and filters.",
      image:
        "https://img.freepik.com/free-vector/online-doctor-concept-illustration_114360-2536.jpg",
      route: "/appointments",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 bg-black z-50 px-6 py-4 border-b border-gray-700 flex justify-between items-center">
        <h1 className="text-yellow-400 text-xl font-bold">Smart Health</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-yellow-300">Home</a>
          <a href="/mental-health" className="text-white hover:text-yellow-300">Chatbot</a>
          <a href="/ai-assistant" className="text-white hover:text-yellow-300">AI Doctor</a>
          <a href="/appointments" className="text-white hover:text-yellow-300">Book</a>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 md:hidden">
            <a href="/" className="text-white hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/mental-health" className="text-white hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Chatbot</a>
            <a href="/ai-assistant" className="text-white hover:text-yellow-300" onClick={() => setMenuOpen(false)}>AI Doctor</a>
            <a href="/appointments" className="text-white hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Book</a>
          </div>
        )}
      </div>

      {/* Scroll Sections */}
      <div className="pt-24">
        {sections.map((section, i) => (
          <AnimatedSection key={i} section={section} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
