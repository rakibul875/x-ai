'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, Zap } from 'lucide-react';
import { PIPELINE_STAGES, FADE_UP_VARIANT } from '@/lib/constants';
import { cn } from '@/lib/utils';

const iconMap = {
  Database: Database,
  Cpu: Cpu,
  Zap: Zap,
};

export function PipelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isCooldownRef = useRef(false);
  const containerRef = useRef(null);

  const activeStage = PIPELINE_STAGES[activeIndex];


  useEffect(() => {
    const handleWheel = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;


      const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;

      if (!isVisible) return;

      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      if (isScrollingDown && activeIndex < PIPELINE_STAGES.length - 1) {
        e.preventDefault();
        if (!isCooldownRef.current) {
          setActiveIndex((prev) => prev + 1);
          triggerCooldown();
        }
      }

      else if (isScrollingUp && activeIndex > 0) {
        e.preventDefault();
        if (!isCooldownRef.current) {
          setActiveIndex((prev) => prev - 1);
          triggerCooldown();
        }
      }

    };

    const triggerCooldown = () => {
      isCooldownRef.current = true;
      setTimeout(() => {
        isCooldownRef.current = false;
      }, 650);
    };


    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [activeIndex]);

  return (
    <div className="w-full bg-[#09090B] border-t border-[#27272A]">
      <section
        ref={containerRef}
        className="relative w-full max-w-6xl mx-auto px-6 py-24 min-h-screen flex flex-col justify-center"
      >
        <div className="py-4">


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP_VARIANT}
            className="mb-8 md:mb-12 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-50">
              Three stages. <span className="text-cyan-400">One unified pipeline.</span>
            </h2>
            <p className="mt-3 text-zinc-400 max-w-2xl text-base md:text-lg mx-auto md:mx-0">
              Streamline your entire data journey from ingestion to intelligence without juggling multiple vendors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start relative">


            <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-3">
              {PIPELINE_STAGES.map((stage, index) => {
                const Icon = iconMap[stage.icon];
                const isActive = activeIndex === index;

                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "flex items-center gap-4 p-3.5 rounded-xl border text-left transition-all duration-300 relative group",
                      isActive
                        ? "border-cyan-500/50 bg-zinc-900/90 shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]"
                        : "border-[#27272A] bg-transparent hover:bg-[#18181B]/50 hover:border-[#27272A]"
                    )}
                  >
                    <div className={cn(
                      "p-2.5 rounded-lg flex items-center justify-center transition-colors",
                      isActive ? "bg-cyan-500/10 text-cyan-400" : "bg-[#27272A]/50 text-zinc-400 group-hover:text-zinc-300"
                    )}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={cn(
                        "font-semibold text-base md:text-lg transition-colors",
                        isActive ? "text-zinc-50" : "text-zinc-400 group-hover:text-zinc-300"
                      )}>
                        {stage.label}
                      </h3>
                    </div>

                    {isActive && (
                      <motion.div
                        layoutId="active-indicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 rounded-l-xl"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>


            <div className="md:col-span-7 lg:col-span-8 md:min-h-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full rounded-2xl border border-[#27272A] bg-[#18181B] overflow-hidden flex flex-col relative"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

                  <div className="p-6 md:p-8 flex-1 flex flex-col relative z-10">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-zinc-50">
                      {activeStage.title}
                    </h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                      {activeStage.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-auto">
                      {activeStage.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col gap-1 p-3.5 rounded-lg bg-[#09090B] border border-[#27272A]"
                        >
                          <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
                            {metric.label}
                          </span>
                          <span className="text-zinc-50 text-lg md:text-xl font-semibold">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}