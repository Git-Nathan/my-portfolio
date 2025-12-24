'use client';
import { motion } from 'framer-motion';
import { Button } from './Button';

const AboutMe = () => {
  return (
    <section id='home' className='flex justify-center overflow-x-clip pt-8 pb-20 md:pt-5 md:pb-10'>
      <div className='max-w-350 px-6 lg:px-20'>
        <div className='items-center gap-10 lg:flex'>
          <div className='mt-15 md:w-119.5 lg:mt-0'>
            <h1 className='mt-6 bg-linear-to-b from-black to-[#002ab3] bg-clip-text pb-2 text-5xl font-bold tracking-tighter text-transparent md:text-5xl'>
              About Me
            </h1>
            <p className='mt-4 text-lg'>
              I’m a Frontend Engineer. I thrive in asynchronous, distributed teams and love building
              intuitive, responsive interfaces that users enjoy. I’m passionate about
              component-driven architecture, performance optimization, and clean code. <br />
              <br />
              When I’m not coding, I enjoy exploring new tools, refining workflows, and contributing
              to team growth through mentorship and collaboration.
            </p>
            <Button
              variant='darkGlass'
              className='mt-6 text-lg font-medium'
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Videos
            </Button>
          </div>
          <div className='relative md:mt-0 md:h-162 md:flex-1'>
            <motion.img
              src={'/images/video-editing.png'}
              alt='Cog'
              className='md:h-full md:w-auto md:max-w-none'
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 3,
                ease: 'easeInOut',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
