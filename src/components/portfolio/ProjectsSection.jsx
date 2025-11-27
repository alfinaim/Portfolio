import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Bot, Brain, Wand2, MessageSquare, Image, ArrowRight } from 'lucide-react';
import { Button } from "../ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils/utils';

export const projects = [
    {
        id: 1,
        title: "AI Content Generator",
        description: "A powerful web application that uses GPT-4 to generate high-quality content for blogs, social media, and marketing materials with customizable tone and style.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        tags: ["React", "OpenAI", "Node.js", "TailwindCSS"],
        icon: Wand2,
        gradient: "from-violet-500 to-purple-600"
    },
    {
        id: 2,
        title: "Smart Chatbot Platform",
        description: "Enterprise-grade chatbot builder with natural language processing, multi-channel deployment, and advanced analytics dashboard.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
        tags: ["Next.js", "LangChain", "PostgreSQL", "WebSocket"],
        icon: MessageSquare,
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        id: 3,
        title: "AI Image Editor",
        description: "Browser-based image editing tool with AI-powered features including background removal, style transfer, and intelligent object detection.",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
        tags: ["React", "TensorFlow.js", "Canvas API", "Stable Diffusion"],
        icon: Image,
        gradient: "from-pink-500 to-rose-500"
    },
    {
        id: 4,
        title: "Predictive Analytics Dashboard",
        description: "Real-time analytics platform with machine learning models for business forecasting, trend analysis, and automated reporting.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        tags: ["Vue.js", "Python", "TensorFlow", "D3.js"],
        icon: Brain,
        gradient: "from-emerald-500 to-teal-500"
    },
    {
        id: 5,
        title: "Voice Assistant Web App",
        description: "Hands-free web navigation and task management using advanced speech recognition and natural language understanding.",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80",
        tags: ["React", "Web Speech API", "GPT-4", "Firebase"],
        icon: Bot,
        gradient: "from-orange-500 to-amber-500"
    },
    {
        id: 6,
        title: "AI Code Assistant",
        description: "Developer productivity tool that provides intelligent code suggestions, automated documentation, and bug detection in real-time.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        tags: ["TypeScript", "Monaco Editor", "CodeLlama", "Express"],
        icon: Sparkles,
        gradient: "from-indigo-500 to-violet-500"
    }
];

const INITIAL_COUNT = 6;

export default function ProjectsSection() {
    const { isDark } = useTheme();
    const [hoveredId, setHoveredId] = useState(null);
    
    const displayedProjects = projects.slice(0, INITIAL_COUNT);

    return (
        <section id="projects" className={`py-32 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className={`text-sm font-semibold tracking-wider uppercase ${
                        isDark ? 'text-violet-400' : 'text-violet-600'
                    }`}>
                        Portfolio
                    </span>
                    <h2 className={`text-4xl md:text-5xl font-bold mt-3 ${
                        isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                        Featured Projects
                    </h2>
                    <p className={`mt-4 text-lg max-w-2xl mx-auto ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                        A collection of AI-powered web applications I've built to push the boundaries of what's possible
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`group relative rounded-2xl overflow-hidden ${
                                isDark ? 'bg-slate-800/50' : 'bg-slate-50'
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
                    </AnimatePresence>
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-12"
                >
                    <Link to={createPageUrl('Projects')}>
                        <Button
                            variant="outline"
                            className={`px-8 py-6 rounded-xl font-semibold flex items-center gap-2 transition-all ${
                                isDark 
                                    ? 'border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600' 
                                    : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                            }`}
                        >
                            View All Projects
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}