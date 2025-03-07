"use client"
import HeroSection from "./components/hero-section"
import FeaturesSection from "./components/features-section"
import TimelineSection from "./components/timeline-section"
import ContactSection from "./components/contact-section"
import Navbar from "./components/navbar"

export default function Home({ isDarkMode, toggleTheme }) {
  return (
    <main>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <HeroSection />
      <FeaturesSection />
      <TimelineSection />
      <ContactSection />
    </main>
  )
}