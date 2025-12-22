'use client'

import { AppLink } from '@/components/Link'
import { MobileSideBar } from '@/components/MobileSideBar'
import Image from 'next/image'

export function Header() {
  return (
    <div className='fixed top-0 z-[100] w-full gap-4'>
      <header className='sticky top-0 z-40 mx-auto w-full max-w-[1440px] py-2 pr-2 pl-2'>
        <div className='inset-0 flex h-[60px] items-center justify-between overflow-hidden rounded-full border border-white/30 bg-neutral-950/5 pr-[10px] pl-5 shadow-[inset_0_0_8px_1px_hsl(0,0%,100%,0.2)] backdrop-blur-[16px]'>
          <div className='rounded-full bg-[#231f20]/80 p-1'>
            <Image
              src={'/images/logo.png'}
              alt='Logo'
              className='cursor-pointer'
              width={40}
              height={40}
            />
          </div>
          <nav className='absolute left-1/2 -translate-x-1/2'>
            <ul className='hidden items-center gap-5 font-medium text-neutral-900 lg:flex'>
              <li>
                <AppLink href='#home'>Home</AppLink>
              </li>
              <li>
                <AppLink href='#about'>Portfolio</AppLink>
              </li>
              <li>
                <AppLink href='#services'>Pricing</AppLink>
              </li>
              <li>
                <AppLink href='#contact'>Contact</AppLink>
              </li>
            </ul>
          </nav>
          <div className='flex items-center gap-2'>
            <AppLink
              href='https://www.instagram.com/studio.liosmooth'
              target='_blank'
              rel='noreferrer'
              className='border-none bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] text-sm text-white shadow-[inset_0_0_6px_1px_hsl(0,0%,100%,0.3)] lg:text-base'
            >
              Message Us on Instagram
            </AppLink>
            <MobileSideBar />
          </div>
        </div>
      </header>
    </div>
  )
}
