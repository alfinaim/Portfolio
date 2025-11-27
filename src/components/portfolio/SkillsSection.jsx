import React from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';
import { Code2, Server, Brain } from 'lucide-react';

const skillCategories = [
    {
        title: "Frontend",
        icon: Code2,
        gradient: "from-violet-500 to-purple-600",
        skills: ["React", "TypeScript", "Next.js", "TailwindCSS", "Vue.js", "JavaScript", "HTML/CSS"]
    },
    {
        title: "Backend",
        icon: Server,
        gradient: "from-blue-500 to-cyan-500",
        skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs", "Express"]
    },
    {
        title: "AI & ML",
        icon: Brain,
        gradient: "from-emerald-500 to-teal-500",
        skills: ["OpenAI/GPT", "LangChain", "TensorFlow", "Prompt Engineering", "Vector DBs", "RAG", "Fine-tuning"]
    }
];



export default function SkillsSection() {
    const { isDark } = useTheme();

    return (
        <section id="skills" className={`py-32 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
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
                        Expertise
                    </span>
                    <h2 className={`text-4xl md:text-5xl font-bold mt-3 ${
                        isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                        Skills & Technologies
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className={`p-8 rounded-2xl ${
                                isDark ? 'bg-slate-900/50 border border-slate-800' : 'bg-white shadow-xl shadow-slate-200/50'
                            }`}
                        >
                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.gradient} mb-4`}>
                                <category.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className={`text-xl font-bold mb-4 ${
                                isDark ? 'text-white' : 'text-slate-900'
                            }`}>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                        className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                                            isDark 
                                                ? 'bg-slate-800 text-slate-300' 
                                                : 'bg-slate-100 text-slate-700'
                                        }`}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}