'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-neutral-950 text-white min-h-[60vh] flex flex-col justify-center border-t border-white/10">
      <div className="max-w-7xl mx-auto w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-neutral-500 text-lg md:text-xl mb-8 font-mono"
        >
          WHAT&apos;S NEXT?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10vw] leading-[0.9] font-bold tracking-tighter mb-12 hover:text-blue-500 transition-colors duration-500 cursor-pointer"
        >
          <a href={`mailto:${personalInfo.email}`}>SAY HELLO</a>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm md:text-lg font-medium uppercase tracking-widest mt-12">
          <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors relative group">
            LinkedIn
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-400 transition-all group-hover:w-full" />
          </a>
          <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors relative group">
            GitHub
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
          </a>
          <a href={personalInfo.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors relative group">
            YouTube
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-500 transition-all group-hover:w-full" />
          </a>
        </div>
      </div>

      <div className="w-full text-center text-xs text-neutral-600 mt-24">
        <span>© {new Date().getFullYear()} {personalInfo.name} • Crafted with Next.js & Framer Motion</span>
      </div>
    </section>
  );
}
