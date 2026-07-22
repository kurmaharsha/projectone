import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, BrainCircuit, FolderCheck, Sparkles, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { achievementsData } from '../../data/portfolioData';

export const Achievements: React.FC = () => {

  const triggerConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  return (
    <section id="achievements" className="py-20 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
            <Trophy className="w-3.5 h-3.5" /> RECOGNITION & HONORS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Highlights from national level coding hackathons, technical achievements, and personal coding milestones.
          </p>
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={triggerConfetti}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between"
            >
              {/* Background Glow Accent */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>

              <div className="space-y-4 relative z-10">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/10">
                    {item.icon === 'Trophy' && <Trophy className="w-7 h-7" />}
                    {item.icon === 'BrainCircuit' && <BrainCircuit className="w-7 h-7 text-cyan-400" />}
                    {item.icon === 'FolderCheck' && <FolderCheck className="w-7 h-7 text-indigo-400" />}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-mono font-bold text-amber-400">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 font-mono">
                    {item.subtitle}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Animated Stat Footer */}
              {item.stat && (
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between relative z-10">
                  <div>
                    <span className="text-2xl font-extrabold text-white font-mono group-hover:text-amber-400 transition-colors">
                      {item.stat}
                    </span>
                    <p className="text-[11px] text-slate-400">{item.statLabel}</p>
                  </div>
                  <Sparkles className="w-5 h-5 text-amber-400/60 group-hover:text-amber-400 group-hover:rotate-12 transition-all" />
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
