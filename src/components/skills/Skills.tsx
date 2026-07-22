import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Coffee, Cpu, FileCode, Database, 
  Layout, Palette, Braces, Smartphone, 
  GitBranch, Github, Terminal, BookOpen, Cloud, 
  Brain, Network, BarChart3, Sparkles, Layers 
} from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  // Helper map for icons
  const renderIcon = (iconName: string, className: string) => {
    const icons: Record<string, React.ReactNode> = {
      Code2: <Code2 className={className} />,
      Coffee: <Coffee className={className} />,
      Cpu: <Cpu className={className} />,
      FileCode: <FileCode className={className} />,
      Database: <Database className={className} />,
      Layout: <Layout className={className} />,
      Palette: <Palette className={className} />,
      Braces: <Braces className={className} />,
      Smartphone: <Smartphone className={className} />,
      GitBranch: <GitBranch className={className} />,
      Github: <Github className={className} />,
      Terminal: <Terminal className={className} />,
      BookOpen: <BookOpen className={className} />,
      Cloud: <Cloud className={className} />,
      Brain: <Brain className={className} />,
      Network: <Network className={className} />,
      BarChart3: <BarChart3 className={className} />,
      Sparkles: <Sparkles className={className} />
    };

    return icons[iconName] || <Code2 className={className} />;
  };

  const categories = ['All', ...skillCategories.map(c => c.category)];

  const filteredCategories = activeTab === 'All' 
    ? skillCategories 
    : skillCategories.filter(c => c.category === activeTab);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <Layers className="w-3.5 h-3.5" /> SKILLS & STACK
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Technical <span className="text-gradient">Competencies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Comprehensive breakdown of programming languages, frameworks, developer tools, and AI domain expertise.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 scale-105'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/80'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-10">
          {filteredCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-white flex items-center gap-2 font-mono border-b border-slate-800 pb-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                {cat.category}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="glass-card p-5 rounded-2xl border border-slate-800/90 hover:border-indigo-500/40 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                          {renderIcon(skill.icon, `w-5 h-5 ${skill.color || 'text-indigo-400'}`)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[11px] text-slate-400 font-mono">Proficiency</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + skillIdx * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
