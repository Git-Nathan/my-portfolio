'use client';

import { Button } from './Button';

const AboutMe = () => {
  return (
    <div
      id='home'
      className='my-40 flex w-full items-center justify-between pt-8 pb-20 md:pt-5 md:pb-10'
    >
      <div className='mt-15 md:w-119.5 lg:mt-0'>
        <div className='inline-flex items-center gap-2 rounded-lg border border-[#222]/10 px-3 py-1 font-semibold tracking-tight'>
          <p>Hello there!</p>
        </div>
        <h1 className='mt-6 bg-linear-to-b from-black to-[#002ab3] bg-clip-text pb-2 text-5xl font-bold tracking-tighter text-transparent md:text-5xl'>
          I’m Nathan
          <br />
          Frontend Developer
        </h1>
        <p className='mt-4 text-lg'>
          I’m a Frontend Engineer. I thrive in asynchronous, distributed teams and love building
          intuitive, responsive interfaces that users enjoy. I’m passionate about component-driven
          architecture, performance optimization, and clean code.
        </p>
        <Button
          variant='gradient'
          className='mt-6 text-lg font-medium'
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          View My Videos
        </Button>
      </div>
      <div className=''>sdffsd</div>
    </div>
  );
};

export default AboutMe;
