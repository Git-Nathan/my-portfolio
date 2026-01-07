'use client';

import { Section } from '@/layouts/Section';
import { Button } from '../common/Button';
import { ColorText } from '../common/ColorText';

export const AboutMe = () => {
  return (
    <Section>
      <div className='flex w-full items-center justify-between gap-20'>
        <div className='size-40 flex-2 bg-red-400' />
        <div className='flex flex-3 flex-col'>
          <ColorText
            elements='h1'
            className='text-4xl font-bold tracking-tighter'
            underlineHoverEffect
          >
            About Me
          </ColorText>
          <div className='mt-6 flex flex-col gap-3 text-lg'>
            <p>
              I’m Thuần — but you can call me Nathan. I’m a frontend developer who loves turning
              ideas into clean, user‑friendly web experiences. I’ve built projects across different
              domains like e‑learning, e‑commerce, and on‑demand services, always focusing on
              performance and design that feels good to use.
            </p>
            <p>
              What I enjoy most is collaborating with teams and finding ways to deliver complex
              projects efficiently. I’m excited about opportunities where I can continue learning,
              contribute to innovative products, and help create great user experiences.
            </p>
          </div>
          <div className='mt-6 flex gap-5'>
            <Button className='bg-purple shrink-0 text-lg font-medium whitespace-nowrap'>
              My Work
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
