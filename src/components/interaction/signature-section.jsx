'use client';

import { motion } from 'framer-motion';
import { FADE_UP_VARIANT } from '@/lib/constants';
import { InteractiveCube } from './interactive-cube';

export function SignatureSection() {
  return (
    <section className="py-24 bg-[#09090B] px-4 md:px-6 border-t border-[#27272A] overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        
        <div className="flex-1 text-center md:text-left z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP_VARIANT}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-50 mb-6 leading-tight">
              Data, reorganized <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                at your command.
              </span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed mb-8">
              Experience the power of structural fluidity. Connect infinite sources and reshape them instantly for any destination. Our intelligent core handles the mapping automatically.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 rounded-md bg-cyan-500 text-zinc-950 font-medium hover:bg-cyan-400 transition-colors w-full sm:w-auto shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)]">
                Explore Architecture
              </button>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 w-full h-[400px] md:h-[500px] relative">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
          <InteractiveCube />
        </div>
        
      </div>
    </section>
  );
}
