'use client';

import { GithubIcon } from '@/icons/contact-icon/GithubIcon';
import { LinkedInIcon } from '@/icons/contact-icon/LinkedInIcon';
import { WhatsAppIcon } from '@/icons/contact-icon/WhatsAppIcon';
import { Section } from '@/layouts/Section';
import { ExternalLink } from '../common/button/ExternalLink';
import { ColorText } from '../common/ColorText';
import { FadeIn } from '../motion-animation/FadeIn';

export const Contact = () => {
  return (
    <Section className='h-screen' id='contact'>
      <FadeIn direction='up'>
        <ColorText
          elements='h2'
          className='text-4xl font-bold tracking-tighter'
          underlineHoverEffect
        >
          Get In Touch
        </ColorText>
      </FadeIn>
      <FadeIn as='p' className='mt-6 max-w-120 text-center text-lg'>
        I’m always open to new ideas, collaborations, or just a friendly chat. If you’d like to work
        together or simply say hello, drop me a message and let’s connect!
      </FadeIn>

      <FadeIn className='mt-6'>
        <ExternalLink href='mailto:ngothuandeveloper@gmail.com' variant='color'>
          Say Hello
        </ExternalLink>
      </FadeIn>

      <FadeIn className='text-text-gray fill-text-gray mt-6 flex items-center gap-1'>
        <ExternalLink
          href={'https://www.linkedin.com/in/ngothuandeveloper/'}
          icon={<LinkedInIcon className='size-11' />}
          variant='icon'
        />
        <ExternalLink
          href={'https://github.com/Git-Nathan'}
          icon={<GithubIcon className='size-9.5' />}
          variant='icon'
        />
        <ExternalLink
          href={'https://wa.me/84902205450'}
          icon={<WhatsAppIcon className='size-10' />}
          variant='icon'
        />
      </FadeIn>
    </Section>
  );
};
