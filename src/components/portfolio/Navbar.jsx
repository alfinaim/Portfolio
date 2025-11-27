import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const { isDark, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['About', 'Projects', 'Skills', 'Contact'];

    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled 
                    ? isDark 
                        ? 'bg-slate-900/80 backdrop-blur-xl border-b border-slate-800' 
                        : 'bg-white/80 backdrop-blur-xl border-b border-slate-200'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <motion.a 
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
                >
                    <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
                        dev
                    </span>
                    folio
                </motion.a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item)}
                            className={`text-sm font-medium transition-colors hover:text-violet-500 ${
                                isDark ? 'text-slate-400' : 'text-slate-600'
                            }`}
                        >
                            {item}
                        </button>
                    ))}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-colors ${
                            isDark 
                                ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' 
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                    >
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-3">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleTheme}
                        className={`p-2 rounded-full ${
                            isDark ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-700'
                        }`}
                    >
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </motion.button>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={isDark ? 'text-white' : 'text-slate-900'}
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`md:hidden border-t ${
                            isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200'
                        }`}
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollTo(item)}
                                    className={`text-left text-lg font-medium ${
                                        isDark ? 'text-slate-300' : 'text-slate-700'
                                    }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}