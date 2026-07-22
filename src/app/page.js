import { HeroSection } from '@/components/hero/hero-section';
import { PipelineSection } from '@/components/pipeline/pipeline-section';
import { DashboardPreview } from '@/components/dashboard/dashboard-preview';
import { SignatureSection } from '@/components/interaction/signature-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PipelineSection />
      <DashboardPreview />
      <SignatureSection />
    </main>
  );
}
