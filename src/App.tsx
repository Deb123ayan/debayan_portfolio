import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BentoProjects } from './components/BentoProjects';
import { Experience } from './components/Experience';
import { ServicesAccordion } from './components/ServicesAccordion';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/SectionDivider';
import './App.css';

import { ReactLenis } from 'lenis/react';

// Palette alternates: cream → amber → cream → yellow → orange → amber → cream → yellow → orange
const App: React.FC = () => {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <div className="portfolio-app">
        <Navbar />
        <Hero />
        <SectionDivider from="#FF6B00" to="#F5A800" />
        <AboutSection />
        <SectionDivider from="#F5A800" to="#FFF7E6" />
        <BentoProjects />
        <SectionDivider from="#FFF7E6" to="#FF6B00" />
        <Experience />
        <SectionDivider from="#FF6B00" to="#FFD166" />
        <ServicesAccordion />
        <SectionDivider from="#FFD166" to="#F5A800" />
        <Testimonials />
        <FAQ />
        <SectionDivider from="#FFD166" to="#FF6B00" />
        <Contact />
        <SectionDivider from="#FF6B00" to="#CC4400" />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
