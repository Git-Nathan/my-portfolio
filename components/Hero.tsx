'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Button } from './Button'

const Hero = () => {
  const heroRef = useRef(null)

  return (
    <section
      id='home'
      ref={heroRef}
      className='flex justify-center overflow-x-clip pt-8 pb-20 md:pt-5 md:pb-10'
      style={{
        background:
          'radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 100%)',
      }}
    >
      <div className='max-w-[1400px] px-6 lg:px-20'>
        <div className='items-center gap-10 lg:flex'>
          <div className='mt-15 md:w-[478px] lg:mt-0'>
            <div className='inline-flex items-center gap-2 rounded-lg border border-[#222]/10 px-3 py-1 font-semibold tracking-tight'>
              <p>LioSmooth Vietnam</p>
              <svg
                width='30'
                height='20'
                viewBox='0 0 30 20'
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                className='rounded'
              >
                <rect width='30' height='20' fill='#da251d' />
                <polygon
                  points='15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85'
                  fill='#ff0'
                />
              </svg>
            </div>
            <h1 className='mt-6 bg-gradient-to-b from-black to-[#001E80] bg-clip-text pb-2 text-5xl font-bold tracking-tighter text-transparent md:text-5xl'>
              Transform Real Estate Listings Into{' '}
              <span className='text-nowrap'>Eye-Catching</span> Videos
            </h1>
            <p className='mt-4 text-lg'>
              Fast, affordable, and professional video editing for real estate
              agents and agencies.
            </p>
            <Button
              variant='darkGlass'
              className='mt-6 text-lg font-medium'
              onClick={() => {
                document
                  .getElementById('about')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View My Videos
            </Button>
          </div>
          <div className='relative md:mt-0 md:h-[648px] md:flex-1'>
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
  )
}

export default Hero
