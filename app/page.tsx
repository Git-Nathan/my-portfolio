import { AboutMe } from '@/components/about-me/AboutMe';
import CTA from '@/components/CTA';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import WhyChooseMe from '@/components/WhyChooseMe';
import { Background } from '@/layouts/Background';

export default function Home() {
  return (
    <>
      <Background />
      <AboutMe />
      <WhyChooseMe />
      <Portfolio />
      <Pricing />
      <CTA />
    </>
  );
}
