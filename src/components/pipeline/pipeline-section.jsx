'use client';

import { useState } from 'react';
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
  const [activeStage, setActiveStage] = useState(PIPELINE_STAGES[0]);

  return (
    <section className="py-24 bg-[#09090B] text-zinc-50 border-t border-[#27272A]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP_VARIANT}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-50">
            Three stages. <span className="text-cyan-400">One unified pipeline.</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl text-lg md:text-xl mx-auto md:mx-0">
            Streamline your entire data journey from ingestion to intelligence without juggling multiple vendors or complex architectures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Side: Clickable Stage Cards */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-4">
            {PIPELINE_STAGES.map((stage) => {
              const Icon = iconMap[stage.icon];
              const isActive = activeStage.id === stage.id;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300 relative group",
                    isActive 
                      ? "border-cyan-500/30 bg-[#18181B] shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]" 
                      : "border-[#27272A] bg-transparent hover:bg-[#18181B]/50 hover:border-[#27272A]"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-lg flex items-center justify-center transition-colors",
                    isActive ? "bg-cyan-500/10 text-cyan-400" : "bg-[#27272A]/50 text-zinc-400 group-hover:text-zinc-300"
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={cn(
                      "font-semibold text-lg transition-colors",
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

          {/* Right Side: Dynamic Detail Card */}
          <div className="md:col-span-7 lg:col-span-8 md:min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full rounded-2xl border border-[#27272A] bg-[#18181B] overflow-hidden flex flex-col relative"
              >
                {/* Decorative glowing gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
                
                <div className="p-8 md:p-10 flex-1 flex flex-col relative z-10">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-zinc-50">
                    {activeStage.title}
                  </h3>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl">
                    {activeStage.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    {activeStage.metrics.map((metric, idx) => (
                      <div 
                        key={idx}
                        className="flex flex-col gap-1 p-4 rounded-lg bg-[#09090B] border border-[#27272A]"
                      >
                        <span className="text-zinc-500 text-sm font-medium uppercase tracking-wider">
                          {metric.label}
                        </span>
                        <span className="text-zinc-50 text-xl md:text-2xl font-semibold">
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
  );
}
