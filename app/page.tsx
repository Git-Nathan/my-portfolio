import CTA from '@/components/CTA';
import Hero from '@/components/Hero';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import WhyChooseMe from '@/components/WhyChooseMe';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Hero />
      <WhyChooseMe />
      <Portfolio />
      <Pricing />
      <CTA />
    </>
  );
}
