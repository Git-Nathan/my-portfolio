import { AboutMe } from '@/components/about-me/AboutMe';
import { CTA } from '@/components/CTA';
import { HomeSection } from '@/components/home/HomeSection';
import { Portfolio } from '@/components/Portfolio';
import { Pricing } from '@/components/Pricing';
import { Background } from '@/layouts/Background';

export default function Home() {
  return (
    <>
      <Background />
      <HomeSection />
      <AboutMe />
      <Portfolio />
      <Pricing />
      <CTA />
    </>
  );
}
