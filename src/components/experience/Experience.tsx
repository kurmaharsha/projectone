import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { experienceData, personalData } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <Briefcase className="w-3.5 h-3.5" /> ACADEMIC & MILESTONES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Experience & <span className="text-gradient">Education Timeline</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Tracking my academic progress at Mahendra Engineering College and continuous hands-on AI project growth.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">

          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline Icon Node */}
              <div className="absolute -left-[25px] top-0 w-12 h-12 rounded-2xl bg-slate-900 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/20">
                {item.icon === 'GraduationCap' ? (
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                ) : (
                  <Code className="w-6 h-6 text-indigo-400" />
                )}
              </div>

              {/* Date Badge on Desktop Left Side */}
              <div className="hidden sm:block absolute -left-36 top-2 text-right w-24">
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                  {item.period}
                </span>
              </div>

              {/* Experience Glass Content Card */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/40 transition-all space-y-4">
                
                {/* Date Badge Mobile */}
                <div className="sm:hidden inline-block mb-2">
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                    {item.period}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-400 flex items-center gap-1.5 mt-0.5">
                      {item.organization}
                    </p>
                  </div>

                  <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700 self-start">
                    Status: {personalData.experience}
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 pt-2">
                  {item.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
