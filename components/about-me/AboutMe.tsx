'use client';

import { Section } from '@/layouts/Section';
import { ColorText } from '../common/ColorText';

export const AboutMe = () => {
  return (
    <Section>
      <div className='flex w-full items-center justify-between gap-10'>
        <div className='size-40 flex-2 bg-red-400' />
        <div className='flex flex-3 flex-col'>
          <ColorText elements='h1' className='mt-6 text-5xl font-bold tracking-tighter md:text-5xl'>
            I’m Nathan
            <br />
          </ColorText>
        </div>
      </div>
    </Section>
  );
};
