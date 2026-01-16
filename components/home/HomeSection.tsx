'use client';

import { Section } from '@/layouts/Section';
import { motion } from 'motion/react';
import { Typewriter } from 'react-simple-typewriter';
import { AppLink } from '../common/button/AppLink';
import { ColorText } from '../common/ColorText';
import { Tag } from '../common/Tag';
import { ScaleInMotion } from '../motion-animation/ScaleInMotion';
import { ColorPalette } from './ColorPalette';
import { PopOutAvatar } from './PopOutAvatar';

export const HomeSection = () => {
  return (
    <Section
      id='home'
      wrapperProps={{
        className:
          'relative mt-24 flex w-full flex-col items-center justify-between gap-15 lg:mt-0 lg:h-screen lg:flex-row lg:gap-20 lg:pb-[6vh]',
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.2, duration: 0.6 }}
        className='z-10 flex flex-1 flex-col items-start justify-center pe-8 md:pe-12'
      >
        <div className='max-w-xl'>
          <Tag className='ps-2 pe-3'>👋 Hello there!</Tag>
          <ColorText elements='h1' className='mt-5 text-5xl font-bold tracking-tighter md:text-7xl'>
            I’m Nathan
            <br />
          </ColorText>
          <div className='mt-2 min-h-10 text-2xl leading-7 font-semibold lg:text-3xl'>
            A{' '}
            <Typewriter
              words={['Joyful Person', 'Frontend Developer', 'Programmer', 'Curious Learner']}
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
            <AppLink className='px-5 text-lg' href='#about-me' scrollOffset={180}>
              About Me
            </AppLink>

            <ColorPalette />
          </div>
        </div>
      </motion.div>

      <ScaleInMotion
        className='relative w-[80vw] max-w-125 flex-1 lg:me-[2vw]'
        delay={3.2}
        duration={1.2}
      >
        <PopOutAvatar />
      </ScaleInMotion>
    </Section>
  );
};
