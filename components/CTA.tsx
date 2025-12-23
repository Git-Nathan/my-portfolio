'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { AppLink } from './Link';

const CTA = () => {
  const sectionRef = useRef(null);

  return (
    <div
      id='contact'
      ref={sectionRef}
      className='flex flex-col items-center overflow-x-clip px-14 pt-16 pb-24'
    >
      <div className='relative flex max-w-142.5 flex-col items-center justify-center'>
        <motion.img
          src={'/images/camera-3d.png'}
          alt='Editing Software'
          className='absolute -left-35 size-40 md:-left-46 md:size-50 xl:-left-72 xl:size-72'
          animate={{
            translateY: '-20%',
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'reverse',
          }}
        />
        <motion.img
          src={'/images/video-3d.png'}
          alt='Editing Software'
          className='absolute -right-35 size-40 md:-right-46 md:size-50 xl:-right-72 xl:size-72'
          animate={{
            translateY: '-20%',
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'reverse',
          }}
        />
        <div className='bg-linear-to-b from-black to-[#002499] bg-clip-text py-6 text-center text-4xl font-bold tracking-tighter text-transparent md:text-5xl lg:text-6xl'>
          Let’s Bring Your Listings to Life
        </div>

        <div className='mb-8 text-center text-lg md:text-xl'>
          Get in touch to start your next real estate video project.
        </div>

        <div className='mt-4 flex flex-col items-center gap-4 text-lg'>
          <AppLink
            href='https://www.instagram.com/studio.liosmooth'
            target='_blank'
            rel='noreferrer'
            className='border-none bg-linear-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] text-sm text-white shadow-[inset_0_0_6px_1px_hsl(0,0%,100%,0.3)] lg:text-base'
          >
            Message Us on Instagram
          </AppLink>
          <a
            href='mailto:studio@liosmooth.com'
            className='cursor-pointer overflow-hidden rounded-full border border-black/50 bg-black/60 px-4 py-2 text-sm text-white shadow-[inset_0_0_6px_1px_hsl(0,0%,0%,0.5)] backdrop-blur-md transition-transform duration-200 ease-in-out hover:scale-105 lg:text-base'
          >
            Contact via Gmail
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
