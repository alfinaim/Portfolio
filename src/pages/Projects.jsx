import React, { useState, useEffect } from 'react';
import ThemeProvider, { useTheme } from '../components/portfolio/ThemeProvider';
import Navbar from '../components/portfolio/Navbar';
import Footer from '../components/portfolio/Footer';
import CursorEffect from '../components/portfolio/CursorEffect';
import { projects } from '../components/portfolio/ProjectsSection';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils/utils';

function ProjectsContent() {
    const { isDark } = useTheme();
    const [hoveredId, setHoveredId] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
            <Navbar />
            
            <section className="pt-32 pb-20">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <Link 
                            to={createPageUrl('Home')}
                            className={`inline-flex items-center gap-2 text-sm font-medium mb-6 transition-colors ${
                                isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                        <h1 className={`text-4xl md:text-5xl font-bold ${
                            isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                            All Projects
                        </h1>
                        <p className={`mt-4 text-lg ${
                            isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                            A complete collection of my AI-powered web applications
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={`group relative rounded-2xl overflow-hidden ${
                                    isDark ? 'bg-slate-800/50' : 'bg-white shadow-lg'
                                }`}
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${
                                        isDark ? 'from-slate-800/90 to-transparent' : 'from-slate-900/70 to-transparent'
                                    }`} />
                                    
                                    {/* Icon Badge */}
                                    <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
                                        <project.icon className="w-5 h-5 text-white" />
                                    </div>

                                    {/* Hover Links */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                                        className="absolute top-4 right-4 flex gap-2"
                                    >
                                        <button className={`p-2 rounded-lg backdrop-blur-sm transition-colors ${
                                            isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/20 hover:bg-black/30'
                                        }`}>
                                            <Github className="w-4 h-4 text-white" />
                                        </button>
                                        <button className={`p-2 rounded-lg backdrop-blur-sm transition-colors ${
                                            isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/20 hover:bg-black/30'
                                        }`}>
                                            <ExternalLink className="w-4 h-4 text-white" />
                                        </button>
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className={`text-xl font-bold mb-2 ${
                                        isDark ? 'text-white' : 'text-slate-900'
                                    }`}>
                                        {project.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed mb-4 ${
                                        isDark ? 'text-slate-400' : 'text-slate-600'
                                    }`}>
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`px-3 py-1 text-xs font-medium rounded-full ${
                                                    isDark 
                                                        ? 'bg-slate-700 text-slate-300' 
                                                        : 'bg-slate-200 text-slate-700'
                                                }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default function Projects() {
    return (
        <ThemeProvider>
            <CursorEffect />
            <ProjectsContent />
        </ThemeProvider>
    );
}