import { Section } from '@/layouts/Section';
import { Button } from './Button';
import { PopOutCircleAvatar } from './common/PopOutCircleAvatar';
import { Shape } from './common/Shape';
import {
  slantedPath,
  softBurstPath,
  fourSidedCookiePath,
  pentagonPath,
  pixelCirclePath,
  gemPath,
  puffyDiamondPath,
} from '@/utils/shapePaths';
import { InverseMouseParallax } from './common/InverseMouseParallax';
import { FloatingShape } from './common/FloatingShape';

const AboutMe = () => {
  return (
    <Section
      backgroundObjects={
        <>
          <InverseMouseParallax className='top-100 -z-1 -rotate-12'>
            <FloatingShape delay='-20s'>
              <Shape
                className='fill-purple bottom-[10vw] left-0 size-[16vw] -translate-x-1/2 translate-y-1/2'
                path={softBurstPath}
              />
              <Shape
                className='fill-red bottom-[2vw] left-[-8vw] size-[20vw] -translate-x-1/2 translate-y-1/2'
                path={fourSidedCookiePath}
              />
              <Shape
                className='fill-blue bottom-[2vw] left-[8vw] size-[20vw] -translate-x-1/2 translate-y-1/2'
                path={pentagonPath}
              />
              <Shape
                className='fill-cyan top-[8vw] size-[25vw] -translate-x-1/2 -translate-y-1/2 -rotate-45'
                path={slantedPath}
              />
            </FloatingShape>
          </InverseMouseParallax>
          <InverseMouseParallax className='top-350 -z-1 -rotate-12'>
            <FloatingShape delay='-34s' reverseRotation>
              <Shape
                className='fill-purple bottom-[10vw] left-0 size-[16vw] -translate-x-1/2 translate-y-1/2'
                path={softBurstPath}
              />
              <Shape
                className='fill-red bottom-[2vw] left-[-8vw] size-[20vw] -translate-x-1/2 translate-y-1/2'
                path={puffyDiamondPath}
              />
              <Shape
                className='fill-cyan top-[8vw] size-[25vw] -translate-x-1/2 -translate-y-1/2 -rotate-45'
                path={pixelCirclePath}
              />
            </FloatingShape>
          </InverseMouseParallax>
          <InverseMouseParallax className='top-200 left-1/2 -z-1'>
            <FloatingShape>
              <Shape
                className='fill-cyan bottom-[5vw] left-[6vw] size-[18vw] -translate-x-1/2 translate-y-1/2 rotate-40'
                path={fourSidedCookiePath}
              />
              <Shape
                className='fill-purple top-[5vw] size-[16vw] -translate-x-1/2 -translate-y-1/2 rotate-12'
                path={slantedPath}
              />
            </FloatingShape>
          </InverseMouseParallax>
          <InverseMouseParallax className='top-10 left-1/2 -z-1'>
            <FloatingShape delay='-45s' reverseRotation>
              <Shape
                className='fill-blue bottom-[8vw] left-[6vw] size-[12vw] -translate-x-1/2 translate-y-1/2 rotate-40'
                path={pixelCirclePath}
              />
              <Shape
                className='fill-red -top-[3vw] size-[8vw] -translate-x-1/2 -translate-y-1/2 rotate-12'
                path={gemPath}
              />
            </FloatingShape>
          </InverseMouseParallax>
        </>
      }
    >
      <div
        id='home'
        className='relative flex w-full flex-col items-center justify-between gap-15 py-20 md:py-40 lg:flex-row lg:gap-20'
      >
        <div className='pointer-events-none z-10 flex flex-1 flex-col items-start justify-center pe-8 md:pe-12'>
          <div className='max-w-xl'>
            <div className='inline-flex items-center gap-2 rounded-lg border border-[#222]/10 px-3 py-1 font-semibold tracking-tight'>
              <p>Hello there!</p>
            </div>
            <h1 className='mt-6 pb-2 text-5xl font-bold tracking-tighter text-black md:text-5xl'>
              I’m Nathan
              <br />
              Frontend Developer
            </h1>
            <p className='mt-4 text-lg'>
              I’m a Frontend Engineer. I thrive in asynchronous, distributed teams and love building
              intuitive, responsive interfaces that users enjoy. I’m passionate about
              component-driven architecture, performance optimization, and clean code.
            </p>
            <Button
              variant='solid'
              className='pointer-events-auto mt-6 bg-[#7655BE] text-lg font-medium'
              // onClick={() => {
              //   document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              // }}
            >
              View My Work
            </Button>
          </div>
        </div>

        <PopOutCircleAvatar />
      </div>
    </Section>
  );
};

export default AboutMe;
