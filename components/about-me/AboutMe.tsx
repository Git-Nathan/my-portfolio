'use client';

import { Section } from '@/layouts/Section';
import { ColorText } from '../common/ColorText';
import { FadeIn } from '../motion-animation/FadeIn';
import { AboutMeActions } from './AboutMeActions';
import { EyeFollowAvatar } from './EyeFollowAvatar';

export const AboutMe = () => {
  return (
    <Section
      className='mt-25 lg:mt-0'
      wrapperProps={{
        className: 'flex w-full flex-col-reverse justify-between gap-20 lg:flex-row',
      }}
      id='about-me'
    >
      <FadeIn className='flex h-130 w-full justify-center lg:flex-2' direction='right'>
        <EyeFollowAvatar />
      </FadeIn>

      <div className='flex flex-col lg:flex-3'>
        <FadeIn direction='left'>
          <ColorText
            elements='h2'
            className='text-4xl font-bold tracking-tighter'
            underlineHoverEffect
          >
            About Me
          </ColorText>
        </FadeIn>
        <div className='mt-6 flex flex-col gap-3 text-lg'>
          <FadeIn as='p' direction='left'>
            I&apos;m Thuan — but you can call me Nathan. I&apos;m a frontend developer who loves
            turning ideas into clean, user‑friendly web experiences. I&apos;ve built projects across
            different domains like e‑learning, e‑commerce, and on‑demand services, always focusing
            on performance and design that feels good to use.
          </FadeIn>
          <FadeIn as='p' direction='left'>
            What I enjoy most is collaborating with teams and finding ways to deliver complex
            projects efficiently. I&apos;m excited about opportunities where I can continue
            learning, contribute to innovative products, and help create great user experiences.
          </FadeIn>
        </div>
        <FadeIn className='mt-6 flex gap-5' direction='left'>
          <AboutMeActions />
        </FadeIn>
      </div>
    </Section>
  );
};
