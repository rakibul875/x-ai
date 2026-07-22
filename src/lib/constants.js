export const PIPELINE_STAGES = [
  { id: 'ingestion', label: 'Data Ingestion', status: 'completed' },
  { id: 'processing', label: 'Processing', status: 'active' },
  { id: 'analysis', label: 'Analysis', status: 'pending' },
  { id: 'intelligence', label: 'Intelligence', status: 'pending' },
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
