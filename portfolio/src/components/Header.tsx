'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-white"
    >
      <Link href="/">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="w-10 h-10 overflow-hidden relative">
            <img src="/assets/img/logo.png" alt="Logo" className="object-contain w-full h-full scale-125" />
          </div>
          <span className="font-bold tracking-tighter text-xl hidden md:block">ANSHUL PANDEY</span>
        </div>
      </Link>

      <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
        {['Work', 'About', 'Contact'].map((item) => (
          <Link key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-50 transition-opacity">
            {item}
          </Link>
        ))}
      </nav>

      <button className="md:hidden text-sm font-medium uppercase tracking-widest">
        Menu
      </button>
    </motion.header>
  );
}
