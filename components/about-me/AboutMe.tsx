'use client';

import { Section } from '@/layouts/Section';
import { useThemeStore } from '@/stores/theme.store';
import { Button } from '../common/Button';
import { ColorPalette } from './ColorPalette';
import { PopOutAvatar } from './PopOutAvatar';

export const AboutMe = () => {
  const { mainColor } = useThemeStore();

  return (
    <Section>
      <div
        id='about'
        className='relative mt-24 flex w-full flex-col items-center justify-between gap-15 lg:mt-0 lg:h-screen lg:flex-row lg:gap-20 lg:pb-[6vh]'
      >
        <div className='z-10 flex flex-1 flex-col items-start justify-center pe-8 md:pe-12'>
          <div className='max-w-xl'>
            <div className='inline-flex items-center gap-2 rounded-lg border border-[#222]/10 px-3 py-1 font-semibold tracking-tight dark:border-[#d8d8d8]/50'>
              <p>Hello there!</p>
            </div>
            <h1
              className='mt-6 text-5xl font-bold tracking-tighter md:text-7xl'
              style={{ color: mainColor }}
            >
              I’m Nathan
              <br />
            </h1>
            <p className='mt-4 text-3xl font-semibold'>Frontend Developer</p>
            <p className='mt-4 text-lg'>
              High level experience in web development knowledge, producing quality work. I’m
              passionate about component-driven architecture, performance optimization, and clean
              code.
            </p>
            <div className='mt-6 flex flex-col items-start gap-8 lg:flex-row lg:items-center'>
              <Button
                variant='solid'
                className='bg-purple shrink-0 text-lg font-medium whitespace-nowrap'
                // onClick={() => {
                //   document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                // }}
              >
                About Me
              </Button>

              <ColorPalette />
            </div>
          </div>
        </div>

        <PopOutAvatar />
      </div>
    </Section>
  );
};
