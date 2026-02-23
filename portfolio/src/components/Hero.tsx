'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';
import ScrambleText from './ScrambleText';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-neutral-950 pt-20">
      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: Text & Intro */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <div className="overflow-hidden mb-6">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-blue-500 font-mono text-lg tracking-widest mb-2 block">HELLO, I AM</span>
              <h1 className="text-[10vw] md:text-[5vw] leading-[0.9] font-bold tracking-tighter text-white mb-2">
                ANSHUL <br /> PANDEY
              </h1>
            </motion.div>
          </div>

          <div className="h-12 md:h-16 mb-8 overflow-hidden">
            <div className="text-2xl md:text-4xl font-mono text-neutral-400">
              <span className="mr-4">&gt;</span>
              <ScrambleText text="PLATFORM ENGINEER" className="text-white" />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-lg"
          >
            {personalInfo.tagline}
          </motion.p>
        </div>

        {/* Right: Photo */}
        <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-[300px] h-[300px] md:w-[500px] md:h-[600px] rounded-sm overflow-hidden"
          >
            <img src={personalInfo.photo} alt={personalInfo.name} className="w-full h-full object-cover transition-all duration-700" />

            {/* Decorative Frame */}
            <div className="absolute inset-0 border border-white/10" />
            <div className="absolute bottom-4 right-4 text-xs font-mono text-white/50 backdrop-blur-sm px-2 py-1">
              BORN 2000
            </div>
          </motion.div>
        </div>

      </div>

      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-1/2 w-96 h-96 bg-blue-600 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full blur-[150px]" />
      </div>
    </section>
  );
}
