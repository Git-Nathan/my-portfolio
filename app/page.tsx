import CTA from '@/components/CTA';
import { Triangle } from '@/components/geometric-objects/Triangle';
import { Sphere } from '@/components/geometric-objects/Sphere';
import { Torus } from '@/components/geometric-objects/Torus';
import Hero from '@/components/Hero';
import { HeroSection } from '@/components/hero-section/HeroSection';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import WhyChooseMe from '@/components/WhyChooseMe';
import { Section } from '@/layouts/Section';
import { BlurOverlay } from '@/components/common/BlurOverlay';

export default function Home() {
  return (
    <>
      <BlurOverlay />

      <HeroSection />

      <Section
        backgroundObjects={
          <>
            <Sphere className='top-1/12 left-1/12 size-90' />
            <Sphere className='right-1/12 bottom-3/12 size-75' colorA='#FAB34E' colorB='#FAB34E' />
          </>
        }
      >
        <Hero />
      </Section>

      <Section
        backgroundObjects={
          <>
            <Sphere className='top-0 left-1/12 size-90' />
            <Triangle className='right-1/12 bottom-3/12' />
          </>
        }
      >
        <WhyChooseMe />
      </Section>

      <Section
        backgroundObjects={
          <>
            <Triangle size={300} className='top-0 left-1/12' />
            <Triangle size={300} className='right-1/12 bottom-3/12' />
          </>
        }
      >
        <Portfolio />
      </Section>

      <Section
        backgroundObjects={
          <>
            <Sphere className='top-0 left-1/12 size-90' />
            <Triangle className='right-1/12 bottom-3/12' />
          </>
        }
      >
        <Pricing />
      </Section>

      <Section
        backgroundObjects={
          <>
            <Torus className='top-0 left-1/12 size-90' />
            <Triangle className='right-1/12 bottom-3/12' />
          </>
        }
      >
        <CTA />
      </Section>
    </>
  );
}
