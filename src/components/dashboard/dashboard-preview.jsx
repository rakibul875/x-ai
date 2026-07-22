'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Globe, Blocks, Settings, Activity, Server, Target } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FADE_UP_VARIANT } from '@/lib/constants';

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'endpoints', label: 'Endpoints', icon: Globe },
  { id: 'integrations', label: 'Integrations', icon: Blocks },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const METRICS = [
  { label: 'Latency', value: '41ms', change: '-2ms', trend: 'down', icon: Activity },
  { label: 'Throughput', value: '2.4M/s', change: '+12%', trend: 'up', icon: Server },
  { label: 'Accuracy', value: '99.1%', change: '+0.4%', trend: 'up', icon: Target },
];

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeTimeframe, setActiveTimeframe] = useState('1h');

  return (
    <section className="py-24 bg-[#09090B] px-4 md:px-6 border-t border-[#27272A] flex justify-center">
      <div className="w-full max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP_VARIANT}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-50 mb-4">
            Command Center
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg md:text-xl">
            Monitor, control, and route your data pipelines with precision.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-xl border border-[#27272A] bg-[#18181B] overflow-hidden flex flex-col md:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          {/* Sidebar */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-[#27272A] bg-[#18181B] p-4 flex flex-row md:flex-col gap-2 overflow-x-auto hide-scrollbar">
            <div className="hidden md:flex items-center gap-2 px-3 pb-6 pt-2">
              <div className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Globe className="w-4 h-4" />
              </div>
              <span className="font-medium text-zinc-100">Project X</span>
            </div>
            
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors whitespace-nowrap",
                  activeTab === item.id
                    ? "bg-[#27272A] text-zinc-100"
                    : "text-zinc-400 hover:bg-[#27272A]/50 hover:text-zinc-300"
                )}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-6 md:p-8 bg-[#09090B]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <h3 className="text-xl font-semibold text-zinc-100 capitalize">
                {activeTab} Overview
              </h3>
              
              {/* Tab Switcher */}
              <div className="flex items-center p-1 rounded-lg bg-[#18181B] border border-[#27272A]">
                {['1h', '24h', '7d', '30d'].map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setActiveTimeframe(tf)}
                    className={cn(
                      "px-3 py-1 text-xs font-medium rounded-md transition-all",
                      activeTimeframe === tf
                        ? "bg-[#27272A] text-zinc-100 shadow-sm"
                        : "text-zinc-400 hover:text-zinc-300"
                    )}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {METRICS.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#18181B] border border-[#27272A]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-zinc-400 font-medium">{metric.label}</span>
                    <metric.icon className="w-4 h-4 text-zinc-500" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-semibold text-zinc-100">{metric.value}</span>
                    <span className={cn(
                      "text-xs font-medium",
                      metric.trend === 'up' && metric.label !== 'Latency' ? 'text-emerald-400' : 'text-cyan-400'
                    )}>
                      {metric.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mock Chart Area */}
            <div className="h-48 md:h-64 rounded-xl border border-[#27272A] bg-[#18181B] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272A_1px,transparent_1px),linear-gradient(to_bottom,#27272A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
              
              {/* Animated mock line chart using SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                  d="M0,150 C100,150 150,50 250,80 C350,110 400,20 500,60 C600,100 650,40 750,90 C850,140 900,30 1000,50"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
