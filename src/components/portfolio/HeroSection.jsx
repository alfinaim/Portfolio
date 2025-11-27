import React from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function HeroSection() {
    const { isDark } = useTheme();

    return (
        <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
            isDark ? 'bg-slate-950' : 'bg-slate-50'
        }`}>
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl ${
                    isDark ? 'bg-violet-600/20' : 'bg-violet-300/30'
                }`} />
                <div className={`absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl ${
                    isDark ? 'bg-blue-600/20' : 'bg-blue-300/30'
                }`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl ${
                    isDark ? 'bg-purple-600/10' : 'bg-purple-300/20'
                }`} />
            </div>

            {/* Grid Pattern */}
            <div 
                className={`absolute inset-0 ${isDark ? 'opacity-[0.02]' : 'opacity-[0.03]'}`}
                style={{
                    backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 ${
                            isDark 
                                ? 'bg-violet-500/10 text-violet-400 border border-violet-500/20' 
                                : 'bg-violet-100 text-violet-700 border border-violet-200'
                        }`}
                    >
                        <Sparkles className="w-4 h-4" />
                        Building the future with AI
                    </motion.div>

                    <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 ${
                        isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                        <span className="block">Web Developer</span>
                        <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                            & AI Enthusiast
                        </span>
                    </h1>

                    <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                        I craft intelligent web applications that leverage the power of artificial intelligence 
                        to create exceptional user experiences and solve real-world problems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow"
                        >
                            View My Work
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className={`px-8 py-4 font-semibold rounded-xl border transition-colors ${
                                isDark 
                                    ? 'border-slate-700 text-slate-300 hover:bg-slate-800' 
                                    : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                            }`}
                        >
                            Get In Touch
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <ArrowDown className={`w-6 h-6 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}