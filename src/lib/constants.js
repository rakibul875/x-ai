export const PIPELINE_STAGES = [
  { 
    id: 'ingest', 
    label: 'Ingest Data', 
    icon: 'Database',
    title: 'Seamless Data Integration',
    description: 'Connect to your existing databases, APIs, or data lakes. We automatically normalize and stream your unstructured data in real-time without complex ETL pipelines.',
    metrics: [
      { label: 'Throughput', value: '50k ops/sec' },
      { label: 'Latency', value: '< 15ms' }
    ]
  },
  { 
    id: 'analyze', 
    label: 'Analyze with AI', 
    icon: 'Cpu',
    title: 'Intelligent Processing',
    description: 'Run our optimized Large Language Models on your raw text, audio, or image data. Extract meaning, structure, and intent automatically with custom rule engines.',
    metrics: [
      { label: 'Accuracy', value: '99.4%' },
      { label: 'Processing', value: 'Parallelized' }
    ]
  },
  { 
    id: 'generate', 
    label: 'Generate Insights', 
    icon: 'Zap',
    title: 'Actionable Intelligence',
    description: 'Turn processed data into unified analytics. Trigger automated workflows, push structured payloads to your warehouse, or visualize immediately on our dashboards.',
    metrics: [
      { label: 'Uptime', value: '99.99%' },
      { label: 'Integrations', value: '250+' }
    ]
  },
];

export const FADE_UP_VARIANT = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
