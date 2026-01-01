import CTA from '@/components/CTA';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import WhyChooseMe from '@/components/WhyChooseMe';
import AboutMe from '@/components/AboutMe';
import { BlurOverlay } from '@/components/common/BlurOverlay';

export default function Home() {
  return (
    <>
      <BlurOverlay />
      <AboutMe />
      <WhyChooseMe />
      <Portfolio />
      <Pricing />
      <CTA />
    </>
  );
}
