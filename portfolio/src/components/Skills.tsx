'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-24 tracking-tighter"
        >
          THE STACK
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <h3 className="text-2xl font-bold mb-6 text-neutral-200">{category.title}</h3>
              <p className="text-neutral-400 mb-8 leading-relaxed text-lg">{category.description}</p>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-mono border border-white/10 rounded-lg text-neutral-300 bg-neutral-900/50 group-hover:border-white/30 group-hover:bg-neutral-900 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
