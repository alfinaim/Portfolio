import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Settings } from 'lucide-react';

import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import ThemeToggle from '@/components/portfolio/ThemeToggle';

// Default config (used if no settings in database)
const defaultConfig = {
  name: "Your Name",
  title: "Web Developer",
  tagline: "Crafting modern web experiences with the power of AI tools",
  bio: "I'm a web developer who has embraced the AI revolution. By combining traditional development skills with powerful AI tools like ChatGPT, Claude, and Cursor, I create sophisticated web applications faster than ever before.",
  email: "hello@example.com",
};

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  const { data: settingsList } = useQuery({
    queryKey: ['portfolio-settings'],
    queryFn: () => base44.entities.PortfolioSettings.list(),
  });

  const { data: projects = [] } = useQuery({
    queryKey: ['projects'],
    queryFn: () => base44.entities.Project.list('-created_date'),
  });

  const settings = settingsList?.[0] || defaultConfig;

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      
      {/* Admin link */}
      <Link
        to={createPageUrl('Admin')}
        className={`fixed top-6 right-20 z-50 p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
          isDark 
            ? 'bg-white/10 hover:bg-white/20 text-white' 
            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
        }`}
        title="Admin Panel"
      >
        <Settings className="w-5 h-5" />
      </Link>

      <HeroSection
        name={settings.name}
        title={settings.title}
        tagline={settings.tagline}
        isDark={isDark}
      />
      
      <AboutSection 
        bio={settings.bio} 
        photoUrl={settings.photo_url}
        isDark={isDark} 
      />
      
      <ProjectsSection projects={projects} isDark={isDark} />
      
      <SkillsSection skills={settings.skills} isDark={isDark} />
      
      <ContactSection 
        email={settings.email} 
        socials={{
          github_url: settings.github_url,
          linkedin_url: settings.linkedin_url,
          twitter_url: settings.twitter_url,
        }}
        isDark={isDark} 
      />
      
      <Footer name={settings.name} isDark={isDark} />
    </div>
  );
}