import React from 'react';
import ThemeProvider from '../components/portfolio/ThemeProvider';
import Navbar from '../components/portfolio/Navbar';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import GitHubActivity from '../components/portfolio/GitHubActivity';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';
import CursorEffect from '../components/portfolio/CursorEffect';

export default function Home() {
    return (
        <ThemeProvider>
            <CursorEffect />
            <div className="min-h-screen">
                <Navbar />
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <GitHubActivity />
                <ContactSection />
                <Footer />
            </div>
        </ThemeProvider>
    );
}