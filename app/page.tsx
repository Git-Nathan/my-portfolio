import CTA from '@/components/CTA';
import { HeroSection } from '@/components/hero-section/HeroSection';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import { Section } from '@/layouts/Section';
import { BlurOverlay } from '@/components/common/BlurOverlay';
import WhyChooseMe from '@/components/WhyChooseMe';
import AboutMe from '@/components/AboutMe';
import { SquareShape } from '@/icons/shapes/SquareShape';
import { SlantedShape } from '@/icons/shapes/SlantedShape';

export default function Home() {
  return (
    <>
      <BlurOverlay />

      <HeroSection />

      <Section
        backgroundObjects={
          <>
            <SquareShape className='top-1/12 left-1/12 -z-1 size-90' />
            <SquareShape className='right-1/12 bottom-3/12 -z-1 size-75' />
          </>
        }
      >
        <AboutMe />
      </Section>

      <Section
        backgroundObjects={
          <>
            <SlantedShape className='top-0 left-1/12 -z-1 size-90' />
            <SlantedShape className='right-1/12 bottom-3/12 -z-1' />
          </>
        }
      >
        <WhyChooseMe />
      </Section>

      <Section
        backgroundObjects={
          <>
            <SquareShape className='top-0 left-1/12 -z-1' />
            <SquareShape className='right-1/12 bottom-3/12 -z-1' />
          </>
        }
      >
        <Portfolio />
      </Section>

      <Section
        backgroundObjects={
          <>
            <SquareShape className='top-0 left-1/12 -z-1 size-90' />
            <SquareShape className='right-1/12 bottom-3/12 -z-1' />
          </>
        }
      >
        <Pricing />
      </Section>

      <Section
        backgroundObjects={
          <>
            <SquareShape className='top-0 left-1/12 -z-1 size-90' />
            <SquareShape className='right-1/12 bottom-3/12 -z-1' />
          </>
        }
      >
        <CTA />
      </Section>
    </>
  );
}
