'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <div className='pt-12'>
      <div className='flex flex-col items-center px-28 pb-16'>
        <div className='w-fit rounded-xl border-2 border-slate-300/80 p-0.5 px-3 text-sm font-semibold'>
          Testimonials
        </div>
        <div className='bg-gradient-to-b from-black to-[#002499] bg-clip-text pt-6 text-center text-4xl font-bold tracking-tighter text-transparent lg:text-5xl'>
          What our users say
        </div>
      </div>
      <div className='mb-12 h-[750px] overflow-hidden [mask-image:linear-gradient(to_top,transparent,black,transparent)] md:mb-28 lg:mb-36'>
        <motion.div
          animate={{
            translateY: '-50%',
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          <div className='flex items-center justify-center gap-4 overflow-x-hidden pb-4'>
            <div className='hidden md:block'>
              <div className='w-[310px] rounded-2xl p-8 shadow-xl'>
                <div className='pb-4 font-medium'>
                  As a seasoned designer always on the lookout for innovative
                  tools, Framer.com instantly grabbed my attention.
                </div>
                <div className='flex items-center gap-3'>
                  <Image
                    src='/assets/avatar-1.png'
                    alt='Avatar'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold'>Alex Rivera</div>
                    <div>@jamietechguru00</div>
                  </div>
                </div>
              </div>

              <div className='my-6 w-[310px] rounded-2xl p-8 shadow-xl'>
                <div className='pb-4 font-medium'>
                  Our productivity has skyrocketed since we started using this
                  tool.
                </div>
                <div className='flex items-center gap-3'>
                  <Image
                    src={'/assets/avatar-6.png'}
                    alt='Avatar'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold'>Josh Smith</div>
                    <div>@jjsmith</div>
                  </div>
                </div>
              </div>

              <div className='w-[310px] rounded-2xl p-8 shadow-xl'>
                <div className='pb-4 font-medium'>
                  This app has completely transformed how I manage my projects
                  and deadlines.
                </div>
                <div className='flex items-center gap-3'>
                  <Image
                    src={'/assets/avatar-3.png'}
                    alt='Avatar'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold'>Morgan Lee</div>
                    <div>@morganleewhiz</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className='w-[310px] rounded-2xl p-8 shadow-xl'>
                <div className='pb-4 font-medium'>
                  I was amazed at how quickly we were able to integrate this app
                  into our workflow.
                </div>
                <div className='flex items-center gap-3'>
                  <Image
                    src={'/assets/avatar-7.png'}
                    alt='Avatar'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold'>Casey Jordan</div>
                    <div>@caseyj</div>
                  </div>
                </div>
              </div>

              <div className='my-6 w-[310px] rounded-2xl p-8 shadow-xl'>
                <div className='pb-4 font-medium'>
                  Planning and executing events has never been easier. This app
                  helps me keep track of all the moving parts, ensuring nothing
                  slips through the cracks.
                </div>
                <div className='flex items-center gap-3'>
                  <Image
                    src={'/assets/avatar-2.png'}
                    alt='Avatar'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold'>Taylor Kim</div>
                    <div>@taylorkimm</div>
                  </div>
                </div>
              </div>

              <div className='w-[310px] rounded-2xl p-8 shadow-xl'>
                <div className='pb-4 font-medium'>
                  The customizability and integration capabilities of this app
                  are top-notch.
                </div>
                <div className='flex items-center gap-3'>
                  <Image
                    src={'/assets/avatar-5.png'}
                    alt='Avatar'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold'>Riley Smith</div>
                    <div>@rileysmith1</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='hidden md:block'>
              <div className='w-[310px] rounded-2xl p-8 shadow-xl'>
                <div className='pb-4 font-medium'>
                  Adopting this app for our team has streamlined our project
                  management and improved communication across the board.
                </div>
                <div className='flex items-center gap-3'>
                  <Image
                    src={'/assets/avatar-4.png'}
                    alt='Avatar'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold'>Jordan Patels</div>
                    <div>@jpatelsdesign</div>
                  </div>
                </div>
              </div>

              <div className='w-[310px] rounded-2xl p-8 shadow-xl'>
                <div className='pb-4 font-medium'>
                  With this app, we can easily assign tasks, track progress, and
                  manage documents all in one place.
                </div>
                <div className='flex items-center gap-3'>
                  <Image
                    src={'/assets/avatar-8.png'}
                    alt='Avatar'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold'>Sam Dawson</div>
                    <div>@dawsontechtips</div>
                  </div>
                </div>
              </div>

              <div className='w-[310px] rounded-2xl p-8 shadow-xl'>
                <div className='pb-4 font-medium'>
                  Its user-friendly interface and robust features support our
                  diverse needs.
                </div>
                <div className='flex items-center gap-3'>
                  <Image
                    src={'/assets/avatar-9.png'}
                    alt='Avatar'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold'>Casey Harper</div>
                    <div>@casey09</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center gap-4 overflow-x-hidden'>
            <div className='hidden md:block'>
              <div className='w-[310px] rounded-2xl p-8 shadow-xl'>
                <div className='pb-4 font-medium'>
                  As a seasoned designer always on the lookout for innovative
                  tools, Framer.com instantly grabbed my attention.
                </div>
                <div className='flex items-center gap-3'>
                  <Image
                    src={'/assets/avatar-1.png'}
                    alt='Avatar'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold'>Alex Rivera</div>
                    <div>@jamietechguru00</div>
                  </div>
                </div>
              </div>

              <div className='my-6 w-[310px] rounded-2xl p-8 shadow-xl'>
                <div className='pb-4 font-medium'>
                  Our productivity has skyrocketed since we started using this
                  tool.
                </div>
                <div className='flex items-center gap-3'>
                  <Image
                    src={'/assets/avatar-6.png'}
                    alt='Avatar'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold'>Josh Smith</div>
                    <div>@jjsmith</div>
                  </div>
                </div>
              </div>

              <div className='w-[310px] rounded-2xl p-8 shadow-xl'>
                <div className='pb-4 font-medium'>
                  This app has completely transformed how I manage my projects
                  and deadlines.
                </div>
                <div className='flex items-center gap-3'>
                  <Image
                    src={'/assets/avatar-3.png'}
                    alt='Avatar'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold'>Morgan Lee</div>
                    <div>@morganleewhiz</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className='w-[310px] rounded-2xl p-8 shadow-xl'>
                <div className='pb-4 font-medium'>
                  I was amazed at how quickly we were able to integrate this app
                  into our workflow.
                </div>
                <div className='flex items-center gap-3'>
                  <Image
                    src={'/assets/avatar-7.png'}
                    alt='Avatar'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold'>Casey Jordan</div>
                    <div>@caseyj</div>
                  </div>
                </div>
              </div>

              <div className='my-6 w-[310px] rounded-2xl p-8 shadow-xl'>
                <div className='pb-4 font-medium'>
                  Planning and executing events has never been easier. This app
                  helps me keep track of all the moving parts, ensuring nothing
                  slips through the cracks.
                </div>
                <div className='flex items-center gap-3'>
                  <Image
                    src={'/assets/avatar-2.png'}
                    alt='Avatar'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold'>Taylor Kim</div>
                    <div>@taylorkimm</div>
                  </div>
                </div>
              </div>

              <div className='w-[310px] rounded-2xl p-8 shadow-xl'>
                <div className='pb-4 font-medium'>
                  The customizability and integration capabilities of this app
                  are top-notch.
                </div>
                <div className='flex items-center gap-3'>
                  <Image
                    src={'/assets/avatar-5.png'}
                    alt='Avatar'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold'>Riley Smith</div>
                    <div>@rileysmith1</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='hidden md:block'>
              <div className='w-[310px] rounded-2xl p-8 shadow-xl'>
                <div className='pb-4 font-medium'>
                  Adopting this app for our team has streamlined our project
                  management and improved communication across the board.
                </div>
                <div className='flex items-center gap-3'>
                  <Image
                    src={'/assets/avatar-4.png'}
                    alt='Avatar'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold'>Jordan Patels</div>
                    <div>@jpatelsdesign</div>
                  </div>
                </div>
              </div>

              <div className='w-[310px] rounded-2xl p-8 shadow-xl'>
                <div className='pb-4 font-medium'>
                  With this app, we can easily assign tasks, track progress, and
                  manage documents all in one place.
                </div>
                <div className='flex items-center gap-3'>
                  <Image
                    src={'/assets/avatar-8.png'}
                    alt='Avatar'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold'>Sam Dawson</div>
                    <div>@dawsontechtips</div>
                  </div>
                </div>
              </div>

              <div className='w-[310px] rounded-2xl p-8 shadow-xl'>
                <div className='pb-4 font-medium'>
                  Its user-friendly interface and robust features support our
                  diverse needs.
                </div>
                <div className='flex items-center gap-3'>
                  <Image
                    src={'/assets/avatar-9.png'}
                    alt='Avatar'
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className='font-semibold'>Casey Harper</div>
                    <div>@casey09</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Testimonials
