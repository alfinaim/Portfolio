import React from 'react';
import { useTheme } from './ThemeProvider';
import { Heart } from 'lucide-react';

export default function Footer() {
    const { isDark } = useTheme();

    return (
        <footer className={`py-8 border-t ${
            isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
        }`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                        © {new Date().getFullYear()} Portfolio. All rights reserved.
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                        Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and AI
                    </div>
                </div>
            </div>
        </footer>
    );
}