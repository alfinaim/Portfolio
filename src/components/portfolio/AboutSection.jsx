import React from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

const values = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "I write maintainable, scalable code following best practices and design patterns."
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Always exploring new technologies and AI capabilities to build better solutions."
    },
    {
        icon: Rocket,
        title: "Performance",
        description: "Optimized applications that deliver fast, smooth user experiences."
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Strong believer in teamwork and clear communication for project success."
    }
];

export default function AboutSection() {
    const { isDark } = useTheme();

    return (
        <section id="about" className={`py-32 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-r from-violet-500 to-blue-500 opacity-20 blur-2xl`} />
                        <div className={`relative aspect-square rounded-3xl overflow-hidden ${
                            isDark ? 'bg-slate-800' : 'bg-slate-100'
                        }`}>
                            <img
                                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=800&q=80"
                                alt="Developer workspace"
                                className="w-full h-full object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${
                                isDark ? 'from-slate-900/50 to-transparent' : 'from-white/30 to-transparent'
                            }`} />
                        </div>
                        
                        {/* Floating Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className={`absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-2xl ${
                                isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white'
                            }`}
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className={`text-3xl font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent`}>
                                        5+
                                    </div>
                                    <div className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                        Years Exp
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className={`text-3xl font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent`}>
                                        50+
                                    </div>
                                    <div className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                        Projects
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className={`text-sm font-semibold tracking-wider uppercase ${
                            isDark ? 'text-violet-400' : 'text-violet-600'
                        }`}>
                            About Me
                        </span>
                        <h2 className={`text-4xl md:text-5xl font-bold mt-3 mb-6 ${
                            isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                            Passionate about building
                            <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent"> AI-powered </span>
                            experiences
                        </h2>
                        <p className={`text-lg leading-relaxed mb-8 ${
                            isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                            I'm a web developer with a deep passion for artificial intelligence and its potential 
                            to transform how we interact with technology. Over the years, I've specialized in 
                            creating intelligent web applications that combine beautiful design with powerful 
                            AI capabilities.
                        </p>
                        <p className={`text-lg leading-relaxed mb-8 ${
                            isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                            My journey began with traditional web development, but discovering the possibilities 
                            of AI integration opened up a whole new world. Now, I focus on building applications 
                            that leverage machine learning, natural language processing, and computer vision to 
                            create truly intelligent user experiences.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    className={`p-4 rounded-xl ${
                                        isDark ? 'bg-slate-800/50' : 'bg-slate-50'
                                    }`}
                                >
                                    <value.icon className={`w-6 h-6 mb-2 ${
                                        isDark ? 'text-violet-400' : 'text-violet-600'
                                    }`} />
                                    <h4 className={`font-semibold mb-1 ${
                                        isDark ? 'text-white' : 'text-slate-900'
                                    }`}>
                                        {value.title}
                                    </h4>
                                    <p className={`text-sm ${
                                        isDark ? 'text-slate-500' : 'text-slate-600'
                                    }`}>
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}