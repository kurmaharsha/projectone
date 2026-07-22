import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { personalData } from '../../data/portfolioData';

export const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress timer over ~2.2 seconds so visitors see the Welcome Animation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.12, filter: 'blur(16px)' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A] text-white overflow-hidden p-4 select-none"
        >
          {/* Studio Diagonal Spotlight Beam */}
          <div className="spotlight-ray" />
          
          {/* Ambient Glowing Background Orbs */}
          <div className="absolute w-96 h-96 bg-[#FF4D36]/25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-100"></div>

          {/* Welcome Glass Pop Card */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0, y: 40 }}
            animate={{ scale: [0.6, 1.04, 1], opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="glass-pop-box p-8 sm:p-12 rounded-3xl max-w-lg w-full relative z-10 text-center space-y-6 border border-white/20 shadow-2xl"
          >
            {/* WELCOME TO MY PORTFOLIO Header */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FF4D36]/15 border border-[#FF4D36]/40 text-[#FF4D36] text-xs font-mono font-bold tracking-widest uppercase">
                <Sparkles className="w-4 h-4 text-[#FF4D36] animate-bounce" /> WELCOME TO MY PORTFOLIO
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono uppercase">
                {personalData.name}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <span className="text-xs text-cyan-400 font-mono flex items-center gap-1 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                  <ShieldCheck className="w-3.5 h-3.5" /> AI & DS ENGINEER
                </span>
                {personalData.cgpa && (
                  <span className="text-xs text-amber-300 font-mono font-bold flex items-center gap-1 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                    <Award className="w-3.5 h-3.5 text-amber-400" /> CGPA: {personalData.cgpa}
                  </span>
                )}
              </div>
            </motion.div>

            {/* Glowing KH Logo Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.25, 1] }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex justify-center py-2"
            >
              <div className="relative group">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#FF4D36] via-cyan-400 to-purple-500 blur-lg opacity-90 animate-pulse"></div>
                <div className="relative w-24 h-24 rounded-2xl bg-[#0A0A0A] border border-white/30 flex items-center justify-center text-white font-extrabold font-mono text-3xl shadow-2xl">
                  KH
                </div>
              </div>
            </motion.div>

            {/* Welcome Progress Bar */}
            <div className="space-y-2.5 pt-2">
              <div className="flex justify-between items-center text-[11px] font-mono text-slate-300">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Brain className="w-3.5 h-3.5 text-[#FF4D36] animate-spin" /> LOADING PROFILE...
                </span>
                <span className="text-[#FF4D36] font-bold font-mono">{Math.min(progress, 100)}%</span>
              </div>

              <div className="w-full h-2.5 bg-slate-950/90 rounded-full overflow-hidden border border-white/10 p-0.5 shadow-inner">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#FF4D36] via-amber-400 to-cyan-400"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: 'easeOut', duration: 0.15 }}
                />
              </div>
            </div>

            <div className="text-[10px] text-slate-400 font-mono pt-1">
              Mahendra Engineering College • Academic CGPA {personalData.cgpa}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
