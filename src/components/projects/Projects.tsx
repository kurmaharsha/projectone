import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Folder, CheckCircle2, Play, ArrowRight } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import { Project } from '../../types';
import { PhishingDetectorDemo } from './PhishingDetectorDemo';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Card Mouse Tilt State
  const [tilt, setTilt] = useState<Record<string, { x: number; y: number }>>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const card = e.currentTarget.getBoundingClientRect();
    const cardWidth = card.width;
    const cardHeight = card.height;
    const centerX = card.left + cardWidth / 2;
    const centerY = card.top + cardHeight / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / (cardHeight / 2)) * -8;
    const rotateY = (mouseX / (cardWidth / 2)) * 8;

    setTilt(prev => ({ ...prev, [id]: { x: rotateX, y: rotateY } }));
  };

  const handleMouseLeave = (id: string) => {
    setTilt(prev => ({ ...prev, [id]: { x: 0, y: 0 } }));
  };

  return (
    <section id="projects" className="py-20 relative bg-slate-900/60 overflow-hidden">

      {/* Ambient background glow blobs */}
      <div className="glow-blob w-96 h-96 bg-indigo-600/20 top-1/4 -left-32"></div>
      <div className="glow-blob w-96 h-96 bg-cyan-500/20 bottom-1/4 -right-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold">
            <Folder className="w-3.5 h-3.5" /> FEATURED PORTFOLIO PROJECTS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Engineered with <span className="text-gradient">3D Glassmorphism & AI</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore intelligent machine learning systems, automated data analytics dashboards, and production software tools.
          </p>
        </div>

        {/* Project Cards Grid with 3D Tilt & Glassmorphism */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => {
            const cardTilt = tilt[project.id] || { x: 0, y: 0 };

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onMouseMove={(e) => handleMouseMove(e, project.id)}
                onMouseLeave={() => handleMouseLeave(project.id)}
                style={{
                  transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
                  transition: 'transform 0.15s ease-out',
                }}
                className="glass-card glass-shine rounded-3xl overflow-hidden border border-slate-700/60 hover:border-indigo-500/60 flex flex-col justify-between group shadow-2xl relative"
              >
                <div>
                  {/* Project Image Container with Smooth Zoom & Gradient */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/30"></div>

                    {/* Top Badge */}
                    {project.badge && (
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-mono text-[10px] font-bold tracking-wider shadow-lg border border-indigo-400/50 backdrop-blur-md">
                        {project.badge}
                      </div>
                    )}
                  </div>

                  {/* Card Body Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Highlights Bullet List */}
                    <div className="space-y-1.5 pt-1">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Floating Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-3">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-lg bg-slate-800/90 text-indigo-300 border border-indigo-500/30 hover:border-cyan-400 hover:text-white hover:scale-105 transition-all shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons with Ripple & Arrow Slide Animation */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 text-xs font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-indigo-500/50 rounded-xl flex items-center justify-center gap-2 transition-all group/btn shadow-md"
                  >
                    <Github className="w-4 h-4 text-slate-300 group-hover/btn:text-white group-hover/btn:rotate-12 transition-transform" />
                    <span>GitHub</span>
                  </a>

                  {project.isInteractiveDemo ? (
                    <a
                      href="#interactive-ai"
                      className="flex-1 py-3 px-4 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-600 hover:from-indigo-600 hover:to-cyan-600 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/30 group/demo hover:scale-105"
                    >
                      <Play className="w-3.5 h-3.5 fill-current text-white group-hover/demo:scale-110 transition-transform" />
                      <span>Live Demo</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/demo:opacity-100 group-hover/demo:translate-x-1 transition-all" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-3 px-4 text-xs font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-cyan-400/50 rounded-xl flex items-center justify-center gap-2 transition-all group/demo"
                    >
                      <ExternalLink className="w-4 h-4 text-cyan-400 group-hover/demo:scale-110 transition-transform" />
                      <span>Live Demo</span>
                    </button>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Embedded Interactive AI Demo */}
        <PhishingDetectorDemo />

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="glass-card max-w-lg w-full p-6 sm:p-8 rounded-3xl border border-slate-700 space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
            <p className="text-slate-300 text-sm">{selectedProject.description}</p>
            
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase">Key Architecture Points</h4>
              <ul className="space-y-1.5">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-xl"
              >
                Close
              </button>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> View Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
