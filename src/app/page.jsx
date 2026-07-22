import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/hero/hero-section';
import { PipelineSection } from '@/components/pipeline/pipeline-section';
import { DashboardPreview } from '@/components/dashboard/dashboard-preview';
import { SignatureSection } from '@/components/interaction/signature-section';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#09090B] text-zinc-50 overflow-x-hidden scroll-smooth selection:bg-cyan-500/30 selection:text-cyan-50">
      <Header />
      <main>
        <HeroSection />
        <PipelineSection />
        <DashboardPreview />
        <SignatureSection />
      </main>
      <Footer />
    </div>
  );
}
