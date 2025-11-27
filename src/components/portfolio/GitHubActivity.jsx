import React from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';
import { GitCommit, GitPullRequest, Star, GitFork, Calendar } from 'lucide-react';

// Simulated GitHub activity data (offline/localStorage)
const activityData = [
    { id: 1, type: 'commit', repo: 'ai-content-generator', message: 'Added GPT-4 streaming support', date: '2 hours ago' },
    { id: 2, type: 'pr', repo: 'smart-chatbot-platform', message: 'Merged: Multi-language support', date: '5 hours ago' },
    { id: 3, type: 'star', repo: 'tensorflow-utils', message: 'Starred repository', date: '1 day ago' },
    { id: 4, type: 'commit', repo: 'ai-image-editor', message: 'Optimized canvas rendering', date: '1 day ago' },
    { id: 5, type: 'fork', repo: 'langchain-templates', message: 'Forked repository', date: '2 days ago' },
    { id: 6, type: 'commit', repo: 'voice-assistant-app', message: 'Fixed speech recognition bug', date: '3 days ago' },
];

// Generate contribution grid data
const generateContributions = () => {
    const contributions = [];
    for (let i = 0; i < 52; i++) {
        const week = [];
        for (let j = 0; j < 7; j++) {
            week.push(Math.floor(Math.random() * 5));
        }
        contributions.push(week);
    }
    return contributions;
};

const contributions = generateContributions();

const getActivityIcon = (type) => {
    switch (type) {
        case 'commit': return GitCommit;
        case 'pr': return GitPullRequest;
        case 'star': return Star;
        case 'fork': return GitFork;
        default: return GitCommit;
    }
};

const getActivityColor = (type, isDark) => {
    const colors = {
        commit: isDark ? 'text-green-400' : 'text-green-600',
        pr: isDark ? 'text-purple-400' : 'text-purple-600',
        star: isDark ? 'text-yellow-400' : 'text-yellow-600',
        fork: isDark ? 'text-blue-400' : 'text-blue-600',
    };
    return colors[type] || colors.commit;
};

const getContributionColor = (level, isDark) => {
    if (isDark) {
        const colors = ['bg-slate-800', 'bg-green-900/50', 'bg-green-700/60', 'bg-green-500/70', 'bg-green-400'];
        return colors[level];
    }
    const colors = ['bg-slate-200', 'bg-green-200', 'bg-green-300', 'bg-green-400', 'bg-green-500'];
    return colors[level];
};

export default function GitHubActivity() {
    const { isDark } = useTheme();

    return (
        <section className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className={`text-sm font-semibold tracking-wider uppercase ${
                        isDark ? 'text-violet-400' : 'text-violet-600'
                    }`}>
                        Open Source
                    </span>
                    <h2 className={`text-4xl md:text-5xl font-bold mt-3 ${
                        isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                        GitHub Activity
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Contribution Graph */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`p-6 rounded-2xl ${
                            isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-50'
                        }`}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Calendar className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                            <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                Contribution Graph
                            </h3>
                        </div>
                        <div className="overflow-x-auto pb-2">
                            <div className="flex gap-1 min-w-max">
                                {contributions.map((week, weekIndex) => (
                                    <div key={weekIndex} className="flex flex-col gap-1">
                                        {week.map((level, dayIndex) => (
                                            <motion.div
                                                key={dayIndex}
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: (weekIndex * 7 + dayIndex) * 0.001 }}
                                                whileHover={{ scale: 1.3 }}
                                                className={`w-3 h-3 rounded-sm cursor-pointer transition-transform ${getContributionColor(level, isDark)}`}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-4">
                            <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Less</span>
                            {[0, 1, 2, 3, 4].map((level) => (
                                <div
                                    key={level}
                                    className={`w-3 h-3 rounded-sm ${getContributionColor(level, isDark)}`}
                                />
                            ))}
                            <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>More</span>
                        </div>
                    </motion.div>

                    {/* Recent Activity */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`p-6 rounded-2xl ${
                            isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-50'
                        }`}
                    >
                        <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            Recent Activity
                        </h3>
                        <div className="space-y-3">
                            {activityData.map((activity, index) => {
                                const Icon = getActivityIcon(activity.type);
                                return (
                                    <motion.div
                                        key={activity.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ x: 4 }}
                                        className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                                            isDark ? 'hover:bg-slate-700/50' : 'hover:bg-white'
                                        }`}
                                    >
                                        <div className={`p-2 rounded-lg ${
                                            isDark ? 'bg-slate-700' : 'bg-white shadow-sm'
                                        }`}>
                                            <Icon className={`w-4 h-4 ${getActivityColor(activity.type, isDark)}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className={`text-sm font-medium truncate ${
                                                isDark ? 'text-white' : 'text-slate-900'
                                            }`}>
                                                {activity.message}
                                            </p>
                                            <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                                                {activity.repo} • {activity.date}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}