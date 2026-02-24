import { SequenceScroll } from '@/components/SequenceScroll';
import { AboutSection } from '@/components/AboutSection';
import { BentoSection } from '@/components/BentoSection';
import { StatsSection } from '@/components/StatsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CtaSection } from '@/components/CtaSection';
import { FooterSection } from '@/components/FooterSection';

export default function Page() {
  return (
    <main className="bg-kopi-ink text-kopi-cream">
      <SequenceScroll />

      {/* Following sections now start after the full hero scroll */}
      <div className="relative z-10 bg-gradient-to-b from-kopi-ink via-kopi-deep to-kopi-ink">
        <AboutSection />
        <BentoSection />
        <StatsSection />
        <TestimonialsSection />
        <CtaSection />
        <FooterSection />
      </div>
    </main>
  );
}

