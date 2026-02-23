'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { timelineOrder } from '@/data/portfolio';
import { useRef } from 'react';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-6xl font-bold mb-32 tracking-tighter uppercase"
        >
          THE JOURNEY
        </motion.h2>

        <div className="relative">
          {/* Curved SVG Line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-2 md:w-full h-full pointer-events-none hidden md:block">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <motion.path
                d="M 50 0 C 50 0 50 10 50 10 C 20 10 20 20 20 30 C 20 40 50 50 50 60 C 50 70 80 80 80 90 C 80 100 50 100 50 100"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </svg>
          </div>

          <div className="space-y-32">
            {timelineOrder.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  item: {
    year: string;
    title: string;
    description: string;
    role?: string;
    company?: string;
    image?: string;
    type?: string;
  };
  index: number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className={`relative flex flex-col md:flex-row gap-8 md:gap-24 items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Content Side */}
      <div className={`w-full md:w-1/2 ${isEven ? 'text-right' : 'text-left'}`}>
        <div className="flex flex-col gap-2">
          <span className="text-blue-400 font-mono text-xl tracking-widest font-bold">{item.year}</span>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">{item.title}</h3>
          {item.company && <div className="text-xl text-neutral-400 font-mono">{item.company}</div>}
          {item.role && <div className="text-lg text-blue-300 font-medium mb-4">{item.role}</div>}
          <p className="text-neutral-400 text-lg leading-relaxed max-w-xl ml-auto mr-auto md:mx-0">
            {item.description}
          </p>
        </div>

        {item.image && (
          <div className={`mt-8 relative aspect-video rounded-2xl overflow-hidden border border-white/10 opacity-90 hover:opacity-100 transition-opacity max-w-md ${isEven ? 'ml-auto' : 'mr-auto'}`}>
            <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        )}
      </div>

      {/* Decorative center icon for desktop */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] z-10" />

      {/* Empty Side for Layout Balance */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
}
