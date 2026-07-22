import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, MapPin, Copy, Check, Sparkles, ExternalLink, Code2, Terminal } from 'lucide-react';
import { personalData } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    if (personalData.phone) {
      navigator.clipboard.writeText(personalData.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0B0F19]/60 overflow-hidden">
      
      {/* Background Glow Blobs */}
      <div className="glow-blob w-96 h-96 bg-indigo-600/15 top-1/3 left-1/4"></div>
      <div className="glow-blob w-96 h-96 bg-cyan-500/15 bottom-1/4 right-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold">
            <Mail className="w-3.5 h-3.5" /> DIRECT CONTACT & PROFILES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Let's Build Something <span className="text-gradient">Impactful Together</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Reach out directly via email, phone, or connect on professional engineering platforms.
          </p>
        </div>

        {/* Contact Quick-Action Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 1. Direct Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card glass-shine p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/10">
                <Mail className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-indigo-400 uppercase">Direct Email</span>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors font-mono truncate mt-1">
                  {personalData.email}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Primary inbox for software opportunities & inquiries.
                </p>
              </div>
            </div>

            <div className="pt-6 flex items-center gap-2">
              <a
                href={`mailto:${personalData.email}`}
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Mail className="w-3.5 h-3.5" /> Email Me
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition-colors"
                title="Copy Email Address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>

          {/* 2. Direct Phone / Mobile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card glass-shine p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/10">
                <Phone className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">Mobile Contact</span>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors font-mono mt-1">
                  {personalData.phone}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Direct phone calls & WhatsApp communication.
                </p>
              </div>
            </div>

            <div className="pt-6 flex items-center gap-2">
              <a
                href={`tel:${personalData.phone}`}
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </a>
              <button
                onClick={handleCopyPhone}
                className="p-2.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition-colors"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>

          {/* 3. LinkedIn Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card glass-shine p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/10">
                <Linkedin className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase">LinkedIn Network</span>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mt-1">
                  Kurma Harsha Vardhan
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Professional network, project updates & achievements.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400/50 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md group/link"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* 4. LeetCode Coding Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card glass-shine p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-amber-400/50 transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/10">
                <Code2 className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase">LeetCode Profile</span>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-mono mt-1">
                  @harsha_13789
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Data Structures, Algorithms & Problem Solving.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={personalData.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-400/50 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md group/link"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400 group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* 5. GitHub Code Repository Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card glass-shine p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-purple-400/50 transition-all duration-300 group flex flex-col justify-between md:col-span-2 lg:col-span-2"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/10">
                <Github className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-purple-400 uppercase">GitHub Repository & Code</span>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors font-mono truncate mt-1">
                  Girish_Minor_project_1.ipynb
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Explore open source AI/ML project Jupyter Notebook source code on GitHub.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md group/link"
              >
                <Github className="w-4 h-4" />
                <span>View Project on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
