'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Activity, Zap, ShieldCheck } from 'lucide-react';
import { FADE_UP_VARIANT } from '@/lib/constants';
import { DataCanvas } from './data-canvas';

const PHRASES = [
  "structured intelligence",
  "real-time insights",
  "automated pipelines",
  "actionable analytics"
];

export function HeroSection() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % PHRASES.length;
      const fullText = PHRASES[i];

      setText(
        isDeleting 
          ? fullText.substring(0, text.length - 1) 
          : fullText.substring(0, text.length + 1)
      );

      let nextSpeed = isDeleting ? 45 : 90;

      if (!isDeleting && text === fullText) {
        // Pause at the end of word before deleting
        nextSpeed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        // Switch to next word and pause briefly
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        nextSpeed = 500;
      }

      setTypingSpeed(nextSpeed);
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090B] text-zinc-50 px-4 md:px-6">
      <DataCanvas />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-8 pt-20">
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FADE_UP_VARIANT}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-[#18181B]/80 backdrop-blur-sm text-sm text-cyan-50 cursor-pointer hover:bg-[#27272A]/80 transition-colors shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-medium tracking-wide">Next-Gen Data Engine v2.0</span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={FADE_UP_VARIANT}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400 flex flex-col items-center justify-center min-h-[140px] md:min-h-[180px]"
        >
          <span>From raw data to</span>
          <span className="flex items-center justify-center pt-2">
            <span className="text-cyan-400 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {text}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block w-[4px] h-[0.9em] bg-cyan-400 ml-2 rounded-full"
            />
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={FADE_UP_VARIANT}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed"
        >
          Transform your unstructured datasets into actionable insights with our powerful, automated processing pipelines.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={FADE_UP_VARIANT}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-6"
        >
          <button className="relative group flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-zinc-50 text-zinc-950 font-medium hover:bg-zinc-200 transition-colors w-full sm:w-auto overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            Start Building Free
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-[#27272A] bg-[#18181B]/80 backdrop-blur-sm text-zinc-300 hover:bg-[#27272A] hover:text-zinc-50 transition-colors w-full sm:w-auto shadow-xl">
            <BookOpen className="w-4 h-4" />
            Explore Documentation
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center z-10 px-4"
      >
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-xs md:text-sm font-medium text-zinc-500">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400/80" />
            Processing &gt; 10B events/day
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-[#27272A]" />
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400/80" />
            Sub-15ms Latency
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-[#27272A]" />
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-purple-400/80" />
            99.99% Uptime
          </div>
        </div>
      </motion.div>
    </section>
  );
}
