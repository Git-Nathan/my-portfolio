'use client';

import { BarcodeIcon } from '@/icons/BarcodeIcon';
import { BuildingIcon } from '@/icons/BuildingIcon';
import { FlashIcon } from '@/icons/FlashIcon';
import { MessageIcon } from '@/icons/MessageIcon';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const WhyChooseMe = () => {
  return (
    <div className='flex flex-col items-center overflow-x-hidden pb-24'>
      <div className='mx-auto mt-20 flex flex-col items-center px-8 font-medium md:w-137.5 lg:w-157.5'>
        <div className='w-fit rounded-xl border-2 border-slate-300/80 p-0.5 px-3 text-sm'>
          About
        </div>
        <div className='bg-linear-to-b from-black to-[#002499] bg-clip-text py-6 text-center text-3xl font-bold tracking-tighter text-transparent md:text-4xl lg:text-5xl'>
          Why Choose My Editing Services?
        </div>

        <div className='mb-8 text-center text-lg md:text-xl'>
          Because your listings deserve more than just another video.
        </div>
      </div>
      <div className='relative mx-3 mt-3 flex items-center md:mx-10'>
        <motion.img
          src={'/images/edit-3d.png'}
          alt='Editing Software'
          className='absolute -top-10 -right-14 size-30 md:size-44 xl:-right-32 xl:size-64'
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
        <Image
          src={'/images/final-cut-screen.png'}
          alt='Product Image'
          width={1200}
          height={806}
          className='h-auto rounded-3xl px-1'
        />
        <motion.img
          src={'/images/final-cut-pro-logo.png'}
          alt='Final Cut Pro Logo'
          className='absolute -left-11 size-30 md:-left-20 md:size-44 xl:-left-36 xl:size-64'
          initial={{ translateY: '10%' }}
          animate={{
            translateY: '-10%',
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'reverse',
          }}
        />
      </div>

      <div className='grid max-w-350 px-10 sm:grid-cols-1 md:grid-cols-2 md:gap-8 md:px-20 lg:grid-cols-4 lg:px-28'>
        <div className='mt-16'>
          <BuildingIcon className='mb-3' />
          <div className='text-2xl font-bold'>Tailored for Real Estate</div>
          <div className='my-2 text-lg'>
            Every edit is made to highlight property features and attract serious buyers.
          </div>
          <div className='text-lg font-medium'>
            Learn more <FaArrowRight className='inline h-3 w-3' />
          </div>
        </div>

        <div className='mt-16'>
          <FlashIcon className='mb-3' />
          <div className='text-2xl font-bold'>Fast Turnaround</div>
          <div className='my-2 text-lg'>
            Delivering projects within 12-24 hours — because I know your listings can’t wait.
          </div>
          <div className='text-lg font-medium'>
            Learn more <FaArrowRight className='inline h-3 w-3' />
          </div>
        </div>

        <div className='mt-16'>
          <BarcodeIcon className='mb-3' />
          <div className='text-2xl font-bold'>Cinematic Quality That Sells</div>
          <div className='my-2 text-lg'>
            Smooth transitions, perfect color, and a professional finish.
          </div>
          <div className='text-lg font-medium'>
            Learn more <FaArrowRight className='inline h-3 w-3' />
          </div>
        </div>

        <div className='mt-16'>
          <MessageIcon className='mb-3' />
          <div className='text-2xl font-bold'>Clear Communication, Hassle-Free Process</div>
          <div className='my-2 text-lg'>
            Clear, fast, and reliable updates throughout your project.
          </div>
          <div className='text-lg font-medium'>
            Learn more <FaArrowRight className='inline h-3 w-3' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMe;
