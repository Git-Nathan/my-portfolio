import { Button } from './Button';
import { PopOutCircleAvatar } from './common/PopOutCircleAvatar';
import { Section } from '@/layouts/Section';

export const AboutMe = () => {
  return (
    <Section>
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
