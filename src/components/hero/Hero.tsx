import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail, Sparkles, ShieldCheck, Play, Award } from 'lucide-react';
import { personalData } from '../../data/portfolioData';
import { ParticleBackground } from './ParticleBackground';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = personalData.typingTitles;

  useEffect(() => {
    const currentTitle = titles[currentTextIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, titles]);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#0A0A0A]">
      
      {/* Studio Diagonal Light Beam Ray Spotlight (Matching Reference Image) */}
      <div className="spotlight-ray z-0" />

      {/* Dark Atmospheric Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-10 pointer-events-none" />

      {/* Particle Canvas Overlay */}
      <ParticleBackground />

      {/* Ambient Glowing Blobs */}
      <div className="glow-blob w-96 h-96 bg-[#FF4D36]/20 top-1/4 left-10" />
      <div className="glow-blob w-80 h-80 bg-cyan-500/15 bottom-10 right-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Red Accent Line & Sub-label */}
            <div className="flex items-center gap-3">
              <span className="w-10 h-[3px] bg-[#FF4D36] rounded-full"></span>
              <span className="text-[#FF4D36] font-mono text-xs sm:text-sm font-bold tracking-widest uppercase">
                ARTIFICIAL INTELLIGENCE & DATA SCIENCE
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none uppercase">
                HI, I'M <br />
                <span className="text-gradient-coral">
                  {personalData.name}
                </span>
              </h1>
            </div>

            {/* Subtitle with Typing Animation */}
            <div className="flex items-center gap-2 text-lg sm:text-2xl font-bold text-slate-300 h-10 font-mono tracking-wide uppercase">
              <span className="text-[#FF4D36]">&gt; I'M</span>
              <span className="text-white">{displayText}</span>
              <span className="w-0.5 h-6 bg-[#FF4D36] animate-pulse"></span>
            </div>

            {/* Objective Tagline & CGPA Badge */}
            <p className="text-slate-400 text-xs sm:text-sm lg:text-base max-w-xl leading-relaxed">
              {personalData.careerObjective}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-slate-300">
                  {personalData.college}
                </span>
              </div>

              {personalData.cgpa && (
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono font-bold text-amber-300">
                    CGPA: {personalData.cgpa} / 10.0
                  </span>
                </div>
              )}
            </div>

            {/* Action Buttons with Vibrant Coral */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-bold tracking-wider text-white uppercase bg-[#FF4D36] hover:bg-[#E63926] rounded-none shadow-xl shadow-[#FF4D36]/30 transition-all hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current text-white" />
                <span>WATCH PORTFOLIO</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2.5 px-6 py-4 text-xs sm:text-sm font-bold tracking-wider text-slate-200 hover:text-white uppercase bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-[#FF4D36]/60 rounded-none backdrop-blur-md transition-all hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#FF4D36] group-hover:-translate-y-0.5 transition-transform" />
                <span>RESUME</span>
              </button>

              <a
                href={`mailto:${personalData.email}`}
                aria-label="Send direct email to Kurma Harshavardhan"
                className="flex items-center gap-2 px-5 py-4 text-xs sm:text-sm font-bold tracking-wider text-slate-300 hover:text-white uppercase bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-purple-500/50 rounded-none backdrop-blur-md transition-all hover:scale-105 active:scale-95"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>EMAIL ME</span>
              </a>
            </div>

            {/* Quick Metrics Bar with CGPA Highlight */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-md">
              <div>
                <p className="text-2xl font-extrabold text-amber-300 font-mono flex items-center gap-1">
                  {personalData.cgpa || "8.79"}
                </p>
                <p className="text-xs text-slate-400">Academic CGPA</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#FF4D36] font-mono">24-Hr</p>
                <p className="text-xs text-slate-400">Hackathon Finisher</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-cyan-400 font-mono">3+</p>
                <p className="text-xs text-slate-400">AI & Web Projects</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: High-Clarity Portrait Photo under Studio Spotlight Beam */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-md h-[480px] sm:h-[560px]">

              {/* Glowing Aura behind portrait */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#FF4D36]/15 to-transparent rounded-3xl blur-2xl pointer-events-none"></div>

              {/* High Contrast Crystal-Clear Studio Photo Frame */}
              <div className="w-full h-full rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl relative bg-[#0A0A0A] group">
                <img
                  src={personalData.profileImage || "/profile.jpg"}
                  alt={personalData.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-105 contrast-105"
                />
                
                {/* Vignette Gradients on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent opacity-85"></div>

                {/* Info Overlay Badge on Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0A0A0A]/90 backdrop-blur-md border border-white/15 flex items-center justify-between shadow-2xl">
                  <div>
                    <h3 className="text-sm font-bold text-white font-mono uppercase flex items-center gap-2">
                      KURMA HARSHAVARDHAN
                    </h3>
                    <p className="text-[11px] text-[#FF4D36] font-mono font-bold">
                      AI & DS • CGPA {personalData.cgpa}
                    </p>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-[#FF4D36] animate-ping"></div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
