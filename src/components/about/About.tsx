import React from 'react';
import { motion } from 'framer-motion';
import { Brain, GraduationCap, Target, Lightbulb, CheckCircle2, Sparkles, BookOpen, Flame } from 'lucide-react';
import { personalData } from '../../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    "Specialized in Artificial Intelligence & Data Science curriculum at Mahendra Engineering College",
    "Hands-on experience in Machine Learning algorithms, predictive analytics, and Python AI stack",
    "Proven problem-solving mindset demonstrated in 24-Hour National Level Hackathon",
    "Keen interest in Generative AI, Natural Language Processing, and full-stack software integration"
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Driven by Curiosity, <span className="text-gradient">Powered by AI</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Discover my academic journey, core technical philosophy, and career objectives.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">

          {/* Left Side: Story & Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Brain className="w-6 h-6 text-indigo-400" />
                Professional Summary & Objective
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a dedicated **Artificial Intelligence and Data Science** student at **Mahendra Engineering College**. My passion lies at the intersection of mathematical data modeling, machine learning algorithms, and modern software development.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                As an aspiring AI Engineer and Software Developer, I thrive on tackling complex computational challenges—from building intelligent **phishing URL detectors using NLP** to designing interactive market analytics dashboards and database management tools.
              </p>

              {/* Core Strengths Bullet Points */}
              <div className="pt-4 space-y-3">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-xl border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Education & CGPA</h4>
                  <p className="text-xs text-slate-400">{personalData.college}</p>
                  <p className="text-[11px] text-amber-300 font-mono font-bold mt-0.5">{personalData.department} • CGPA: {personalData.cgpa}</p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-xl border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Career Goal</h4>
                  <p className="text-xs text-slate-400">AI Engineer / Data Scientist</p>
                  <p className="text-[11px] text-indigo-400 font-mono mt-0.5">Seeking Internships & Roles</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Key Pillars Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Brain className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Machine Learning & Analytics</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Proficient in data preprocessing, feature engineering, classification, regression, and data visualization using Python libraries like Pandas, NumPy, and Matplotlib.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Software & Web Development</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Skilled in clean code practices using Python, Java, C, and JavaScript alongside modern HTML5/CSS3 responsive layouts and SQL database integration.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-purple-500/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Hackathon & Problem Solving</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Experienced in fast-paced hackathon environments, delivering working prototypes under tight time constraints through active teamwork and rapid iteration.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
