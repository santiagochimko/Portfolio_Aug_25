import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';
export function App() {
  return <div className="font-sans bg-gray-50 text-gray-800">
      <Routes>
        <Route path="/" element={<>
              <Navbar />
              <main>
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <EducationSection />
                <ContactSection />
              </main>
              <Footer />
            </>} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>;
}