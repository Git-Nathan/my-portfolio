import { AboutMe } from '@/components/about-me/AboutMe';
import { CTA } from '@/components/CTA';
import { HomeSection } from '@/components/home/HomeSection';
import { MyWork } from '@/components/my-work/MyWork';
import { Pricing } from '@/components/Pricing';
import { Background } from '@/layouts/Background';

export default function Home() {
  return (
    <>
      <Background />
      <HomeSection />
      <AboutMe />
      <MyWork />
      <Pricing />
      <CTA />
    </>
  );
}
