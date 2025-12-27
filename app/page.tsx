import CTA from '@/components/CTA';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import { Section } from '@/layouts/Section';
import { BlurOverlay } from '@/components/common/BlurOverlay';
import WhyChooseMe from '@/components/WhyChooseMe';
import AboutMe from '@/components/AboutMe';
import { Shape } from '@/components/common/Shape';

export default function Home() {
  return (
    <>
      <BlurOverlay />

      {/* <HeroSection /> */}

      <Section
        backgroundObjects={
          <>
            <Shape className='top-1/12 left-1/12 -z-1 size-90 opacity-40' />
            <Shape className='right-1/12 bottom-3/12 -z-1 size-75 opacity-40' />
          </>
        }
      >
        <AboutMe />
      </Section>

      <Section
        backgroundObjects={
          <>
            <Shape className='top-0 left-1/12 -z-1 size-90 opacity-40' />
            <Shape className='right-1/12 bottom-3/12 -z-1 opacity-40' />
          </>
        }
      >
        <WhyChooseMe />
      </Section>

      <Section
        backgroundObjects={
          <>
            <Shape className='top-0 left-1/12 -z-1 opacity-40' />
            <Shape className='right-1/12 bottom-3/12 -z-1 opacity-40' />
          </>
        }
      >
        <Portfolio />
      </Section>

      <Section
        backgroundObjects={
          <>
            <Shape className='top-0 left-1/12 -z-1 size-90 opacity-40' />
            <Shape className='right-1/12 bottom-3/12 -z-1 opacity-40' />
          </>
        }
      >
        <Pricing />
      </Section>

      <Section
        backgroundObjects={
          <>
            <Shape className='top-0 left-1/12 -z-1 size-90 opacity-40' />
            <Shape className='right-1/12 bottom-3/12 -z-1 opacity-40' />
          </>
        }
      >
        <CTA />
      </Section>
    </>
  );
}
