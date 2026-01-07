'use client';

import { Section } from '@/layouts/Section';
import { Typewriter } from 'react-simple-typewriter';
import { Button } from '../common/Button';
import { ColorText } from '../common/ColorText';
import { ColorPalette } from './ColorPalette';
import { PopOutAvatar } from './PopOutAvatar';

export const HomeSection = () => {
  return (
    <Section
      id='about'
      wrapperProps={{
        className:
          'relative mt-24 flex w-full flex-col items-center justify-between gap-15 lg:mt-0 lg:h-screen lg:flex-row lg:gap-20 lg:pb-[6vh]',
      }}
    >
      <div className='z-10 flex flex-1 flex-col items-start justify-center pe-8 md:pe-12'>
        <div className='max-w-xl'>
          <div className='inline-flex items-center gap-2 rounded-lg border border-[#222]/10 py-1 ps-2 pe-3 font-semibold tracking-tight dark:border-[#d8d8d8]/50'>
            <p>👋 Hello there!</p>
          </div>
          <ColorText elements='h1' className='mt-5 text-5xl font-bold tracking-tighter md:text-7xl'>
            I’m Nathan
            <br />
          </ColorText>
          <div className='mt-2 min-h-10 text-2xl leading-7 font-semibold lg:text-3xl'>
            A{' '}
            <Typewriter
              words={[
                'Frontend Developer',
                'Programmer',
                'Curious Learner',
                'Pro Gamer of loading screens',
              ]}
              cursor
              loop
            />
          </div>
          <p className='mt-2 text-lg'>
            High level experience in web development knowledge, producing quality work. I’m
            passionate about component-driven architecture, performance optimization, and clean
            code.
          </p>
          <div className='mt-6 flex flex-col items-start gap-8 lg:flex-row lg:items-center'>
            <Button className='bg-purple shrink-0 text-lg font-medium whitespace-nowrap'>
              About Me
            </Button>

            <ColorPalette />
          </div>
        </div>
      </div>

      <PopOutAvatar />
    </Section>
  );
};
