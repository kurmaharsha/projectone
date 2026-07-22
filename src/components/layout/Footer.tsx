import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Phone, Code2 } from 'lucide-react';
import { personalData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070A13] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 items-center">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold font-mono text-base shadow-md">
                KH
              </div>
              <span className="font-bold text-white tracking-wide text-lg">
                KURMA HARSHAVARDHAN
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Artificial Intelligence & Data Science Student at {personalData.college}. Dedicated to Machine Learning, Deep Learning, and Software Engineering.
            </p>
          </div>

          {/* Social Links & Clock */}
          <div className="md:col-span-6 flex flex-col md:items-end space-y-4">
            <div className="flex items-center gap-3">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kurma Harshavardhan's GitHub Profile"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:shadow-indigo-500/20 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-110 shadow-md"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kurma Harshavardhan's LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400/60 hover:shadow-cyan-500/30 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-110 shadow-md"
              >
                <Linkedin className="w-5 h-5 text-cyan-400" />
              </a>

              <a
                href={personalData.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kurma Harshavardhan's LeetCode Profile"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400/60 hover:shadow-amber-500/30 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-110 shadow-md"
              >
                <Code2 className="w-5 h-5 text-amber-400" />
              </a>

              <a
                href={`mailto:${personalData.email}`}
                aria-label="Send Email to Kurma Harshavardhan"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 hover:shadow-purple-500/20 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-110 shadow-md"
              >
                <Mail className="w-5 h-5 text-purple-400" />
              </a>

              {personalData.phone && (
                <a
                  href={`tel:${personalData.phone}`}
                  aria-label="Call Kurma Harshavardhan"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:shadow-emerald-500/20 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-110 shadow-md"
                >
                  <Phone className="w-5 h-5 text-emerald-400" />
                </a>
              )}

              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg shadow-indigo-500/30"
                aria-label="Back to Top"
                title="Back to Top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Local System Time: {time}</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Kurma Harshavardhan. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-mono">
            Designed & Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-current animate-pulse" /> for AI & Data Science Excellence
          </p>
        </div>

      </div>
    </footer>
  );
};
