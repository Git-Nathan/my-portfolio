'use client';

import { DocumentDownloadIcon } from '@/icons/DocumentDownloadIcon';
import { Section } from '@/layouts/Section';
import { Button } from '../common/Button';
import { ColorText } from '../common/ColorText';

export const AboutMe = () => {
  return (
    <Section>
      <div className='flex w-full justify-between gap-20'>
        <div className='h-140 flex-2 rounded-4xl bg-red-400' />
        <div className='flex flex-3 flex-col pt-10'>
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
            <Button className='shrink-0 text-lg font-medium whitespace-nowrap'>My Work</Button>
            <a
              href='/pdfs/Nathan_Ngo_Frontend_Engineer_React.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='flex shrink-0 items-center gap-2 rounded-full bg-gray-700 px-5 py-2 text-lg font-medium whitespace-nowrap text-white'
            >
              Resume
              <DocumentDownloadIcon />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
