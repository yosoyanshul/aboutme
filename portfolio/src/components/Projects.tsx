'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-24 tracking-tighter"
        >
          SELECTED CHALLENGES
        </motion.h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="group relative border-t border-white/20 pt-12"
            >
              <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16">
                <div className="md:w-1/3">
                   <span className="text-sm text-neutral-500 font-mono mb-4 block">0{index + 1}</span>
                   <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                   <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-xs font-mono px-2 py-1 border border-white/10 rounded text-neutral-400">
                          {tech}
                        </span>
                      ))}
                   </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>
                  {project.link && (
                    <div className="mt-8">
                       <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-colors">
                          View Project
                       </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
