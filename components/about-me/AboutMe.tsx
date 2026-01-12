'use client';

import { DocumentDownloadIcon } from '@/icons/DocumentDownloadIcon';
import { Section } from '@/layouts/Section';
import { Button } from '../common/button/Button';
import { ExternalLink } from '../common/button/ExternalLink';
import { ColorText } from '../common/ColorText';
import { EyeFollowAvatar } from './EyeFollowAvatar';

export const AboutMe = () => {
  return (
    <Section
      className='mt-25 lg:mt-0'
      wrapperProps={{
        className: 'flex w-full flex-col-reverse justify-between gap-20 lg:flex-row',
      }}
    >
      <EyeFollowAvatar />

      <div className='flex flex-col lg:flex-3'>
        <ColorText
          elements='h2'
          className='text-4xl font-bold tracking-tighter'
          underlineHoverEffect
        >
          About Me
        </ColorText>
        <div className='mt-6 flex flex-col gap-3 text-lg'>
          <p>
            I’m Thuần — but you can call me Nathan. I’m a frontend developer who loves turning ideas
            into clean, user‑friendly web experiences. I’ve built projects across different domains
            like e‑learning, e‑commerce, and on‑demand services, always focusing on performance and
            design that feels good to use.
          </p>
          <p>
            What I enjoy most is collaborating with teams and finding ways to deliver complex
            projects efficiently. I’m excited about opportunities where I can continue learning,
            contribute to innovative products, and help create great user experiences.
          </p>
        </div>
        <div className='mt-6 flex gap-5'>
          <Button className='shrink-0 text-lg font-medium whitespace-nowrap'>My Work</Button>
          <ExternalLink
            href='/pdfs/Nathan_Ngo_Frontend_Engineer_React.pdf'
            icon={<DocumentDownloadIcon />}
          >
            Resume
          </ExternalLink>
        </div>
      </div>
    </Section>
  );
};
