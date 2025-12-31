import { Section } from '@/layouts/Section';
import { Button } from './Button';
import { PopOutCircleAvatar } from './common/PopOutCircleAvatar';
import { Shape } from './common/Shape';
import { getRandomShapePath } from '@/utils/shapePaths';

const AboutMe = () => {
  return (
    <Section
      backgroundObjects={
        <>
          <div className='absolute top-4/12 left-2/12'>
            <Shape
              className='fill-purple bottom-20 left-10 -z-1 size-60 -translate-x-1/2 translate-y-1/2'
              path={getRandomShapePath()}
            />
            <Shape
              className='fill-cyan top-20 -z-1 size-80 -translate-x-1/2 -translate-y-1/2'
              path={getRandomShapePath()}
            />
          </div>
          <Shape className='right-2/12 bottom-3/12 -z-1 size-75 translate-x-1/2 translate-y-1/2' />
        </>
      }
    >
      <div
        id='home'
        className='relative flex w-full flex-col items-center justify-between gap-20 py-20 md:py-40 lg:flex-row'
      >
        <div className='pointer-events-none z-10 flex flex-1 flex-col items-start justify-center px-8 md:px-12'>
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
