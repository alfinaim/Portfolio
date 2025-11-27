import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Send, Mail, MapPin, Linkedin, Github, Twitter, CheckCircle } from 'lucide-react';

export default function ContactSection() {
    const { isDark } = useTheme();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        
        // Save to localStorage
        const messages = JSON.parse(localStorage.getItem('portfolio-messages') || '[]');
        messages.push({
            ...formData,
            id: Date.now(),
            date: new Date().toISOString()
        });
        localStorage.setItem('portfolio-messages', JSON.stringify(messages));
        
        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setFormData({ name: '', email: '', message: '' });
        setSending(false);
        setSent(true);
        
        setTimeout(() => setSent(false), 3000);
    };

    const socials = [
        { icon: Github, label: 'GitHub', href: '#' },
        { icon: Linkedin, label: 'LinkedIn', href: '#' },
        { icon: Twitter, label: 'Twitter', href: '#' }
    ];

    return (
        <section id="contact" className={`py-32 relative overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
            {/* Background Elements */}
            <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${
                isDark ? 'bg-violet-600/10' : 'bg-violet-300/20'
            }`} />
            <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${
                isDark ? 'bg-blue-600/10' : 'bg-blue-300/20'
            }`} />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className={`text-sm font-semibold tracking-wider uppercase ${
                        isDark ? 'text-violet-400' : 'text-violet-600'
                    }`}>
                        Contact
                    </span>
                    <h2 className={`text-4xl md:text-5xl font-bold mt-3 ${
                        isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                        Let's Work Together
                    </h2>
                    <p className={`mt-4 text-lg max-w-2xl mx-auto ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                        Have a project in mind? Let's discuss how we can bring your ideas to life with AI-powered solutions.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={`p-8 rounded-3xl h-full ${
                            isDark ? 'bg-slate-900/50 border border-slate-800' : 'bg-white shadow-xl'
                        }`}>
                            <h3 className={`text-2xl font-bold mb-6 ${
                                isDark ? 'text-white' : 'text-slate-900'
                            }`}>
                                Get in Touch
                            </h3>
                            
                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl ${
                                        isDark ? 'bg-violet-500/10' : 'bg-violet-100'
                                    }`}>
                                        <Mail className={`w-5 h-5 ${
                                            isDark ? 'text-violet-400' : 'text-violet-600'
                                        }`} />
                                    </div>
                                    <div>
                                        <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                            Email
                                        </p>
                                        <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                                            hello@yourportfolio.dev
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl ${
                                        isDark ? 'bg-violet-500/10' : 'bg-violet-100'
                                    }`}>
                                        <MapPin className={`w-5 h-5 ${
                                            isDark ? 'text-violet-400' : 'text-violet-600'
                                        }`} />
                                    </div>
                                    <div>
                                        <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                            Location
                                        </p>
                                        <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                                            Remote / Worldwide
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={`border-t pt-6 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                                <p className={`text-sm mb-4 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                                    Connect with me
                                </p>
                                <div className="flex gap-3">
                                    {socials.map((social) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`p-3 rounded-xl transition-colors ${
                                                isDark 
                                                    ? 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700' 
                                                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                                            }`}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className={`p-8 rounded-3xl ${
                            isDark ? 'bg-slate-900/50 border border-slate-800' : 'bg-white shadow-xl'
                        }`}>
                            <div className="space-y-5">
                                <div>
                                    <label className={`block text-sm font-medium mb-2 ${
                                        isDark ? 'text-slate-300' : 'text-slate-700'
                                    }`}>
                                        Name
                                    </label>
                                    <Input
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        placeholder="Your name"
                                        required
                                        className={`${
                                            isDark 
                                                ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-500' 
                                                : 'bg-slate-50 border-slate-200'
                                        }`}
                                    />
                                </div>
                                <div>
                                    <label className={`block text-sm font-medium mb-2 ${
                                        isDark ? 'text-slate-300' : 'text-slate-700'
                                    }`}>
                                        Email
                                    </label>
                                    <Input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        placeholder="your@email.com"
                                        required
                                        className={`${
                                            isDark 
                                                ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-500' 
                                                : 'bg-slate-50 border-slate-200'
                                        }`}
                                    />
                                </div>
                                <div>
                                    <label className={`block text-sm font-medium mb-2 ${
                                        isDark ? 'text-slate-300' : 'text-slate-700'
                                    }`}>
                                        Message
                                    </label>
                                    <Textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                        required
                                        className={`resize-none ${
                                            isDark 
                                                ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-500' 
                                                : 'bg-slate-50 border-slate-200'
                                        }`}
                                    />
                                </div>
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        type="submit"
                                        disabled={sending || sent}
                                        className={`w-full py-6 font-semibold rounded-xl transition-all ${
                                            sent 
                                                ? 'bg-green-600 hover:bg-green-600' 
                                                : 'bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700'
                                        } text-white`}
                                    >
                                        {sending ? (
                                            <span className="flex items-center gap-2">
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </span>
                                        ) : sent ? (
                                            <span className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4" />
                                                Message Saved!
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Send Message
                                                <Send className="w-4 h-4" />
                                            </span>
                                        )}
                                    </Button>
                                </motion.div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}