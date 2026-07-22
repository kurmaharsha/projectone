import React from 'react';
import { X, Download, Printer, CheckCircle2, GraduationCap, Code, Trophy, Sparkles, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { personalData, skillCategories, projectsData, achievementsData } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Container */}
      <div className="glass-card max-w-4xl w-full max-h-[90vh] rounded-3xl border border-slate-700 flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Control Bar */}
        <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-xs font-mono text-slate-400 ml-2">
              Kurma_Harshavardhan_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Save PDF
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[#0F172A] text-slate-200 space-y-8 font-poppins text-xs sm:text-sm">

          {/* Header */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {personalData.name}
              </h1>
              <p className="text-indigo-400 font-mono text-xs sm:text-sm font-semibold mt-1">
                {personalData.title}
              </p>
              <p className="text-slate-400 text-xs mt-0.5">
                {personalData.college} • {personalData.department}
              </p>
            </div>

            <div className="space-y-1 text-xs text-slate-300 font-mono self-stretch sm:self-auto bg-slate-900 p-3.5 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personalData.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-purple-400" />
                <span>github.com/kurmaharshavardhan</span>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <div className="space-y-2">
            <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Career Objective
            </h2>
            <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              {personalData.careerObjective}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex justify-between items-start">
              <div>
                <h3 className="font-bold text-white text-sm">B.Tech in Artificial Intelligence & Data Science</h3>
                <p className="text-indigo-400 text-xs font-semibold">{personalData.college}</p>
                <p className="text-slate-400 text-xs mt-1">Specialization: Machine Learning, Data Analytics, Deep Learning & Software Systems</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono text-[11px] shrink-0">
                Fresher / Pursuing
              </span>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Code className="w-4 h-4" /> Technical Skills
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {skillCategories.map((cat) => (
                <div key={cat.category} className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                  <h3 className="font-bold text-white text-xs">{cat.category}</h3>
                  <p className="text-slate-300 text-xs font-mono">
                    {cat.skills.map(s => s.name).join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Key Projects
            </h2>
            <div className="space-y-3">
              {projectsData.map((proj) => (
                <div key={proj.id} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-white text-sm">{proj.title}</h3>
                    <span className="text-[11px] font-mono text-indigo-400">
                      {proj.techStack.join(' | ')}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs">{proj.description}</p>
                  <ul className="space-y-1 pt-1">
                    {proj.highlights.map((h, idx) => (
                      <li key={idx} className="text-slate-400 text-xs flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Trophy className="w-4 h-4" /> Achievements & Certifications
            </h2>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-2">
              {achievementsData.map((ach) => (
                <div key={ach.id} className="flex items-start gap-3">
                  <Trophy className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-xs">{ach.title}</h4>
                    <p className="text-slate-400 text-xs">{ach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
