'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FADE_UP_VARIANT } from '@/lib/constants';
import { DataCanvas } from './data-canvas';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090B] text-zinc-50 px-4 md:px-6">
      <DataCanvas />
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FADE_UP_VARIANT}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#27272A] bg-[#18181B]/80 backdrop-blur-sm text-sm text-zinc-300"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Next-generation data intelligence</span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={FADE_UP_VARIANT}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400"
        >
          From raw data to<br />
          <span className="text-cyan-400">structured intelligence</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={FADE_UP_VARIANT}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-zinc-400"
        >
          Transform your unstructured datasets into actionable insights with our powerful, automated processing pipelines.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={FADE_UP_VARIANT}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
        >
          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-zinc-50 text-zinc-950 font-medium hover:bg-zinc-200 transition-colors w-full sm:w-auto">
            Start Building
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex items-center justify-center px-6 py-3 rounded-md border border-[#27272A] bg-[#18181B] hover:bg-[#27272A] transition-colors w-full sm:w-auto">
            View Documentation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
