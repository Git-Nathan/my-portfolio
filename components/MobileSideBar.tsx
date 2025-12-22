'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/utils/cn'
import { Button } from './Button'
import { MenuIcon } from '@/icons/MenuIcon'
import { AppLink } from './Link'
import { CloseIcon } from '@/icons/CloseIcon'

export function MobileSideBar() {
  const [openSideBar, setOpenSideBar] = useState(false)

  const handleToggleOpenSideBar = () => {
    setOpenSideBar((prev) => !prev)
  }

  useEffect(() => {
    if (openSideBar) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [openSideBar])

  const sideBarContent = (
    <div
      className={cn(
        'fixed inset-y-0 right-0 z-[999] h-[100vh] w-[100vw] max-w-[375px] border-l-black bg-neutral-950/30 shadow-[inset_0_0_8px_1px_hsl(0,0%,100%,0.2)] backdrop-blur-[16px] transition-transform duration-300',
        openSideBar ? 'translate-x-0' : 'translate-x-full',
      )}
    >
      <div className='p-4'>
        <div className='flex justify-between'>
          <h2 className='text-xl font-bold text-white'>Menu</h2>
          <Button
            className='p-1 text-white lg:hidden'
            variant='glass'
            icon={<CloseIcon className='scale-125' />}
            onClick={handleToggleOpenSideBar}
          />
        </div>
        <ul className='mt-4 space-y-3'>
          <li>
            <AppLink
              className='text-neutral-800'
              href='#home'
              onClick={handleToggleOpenSideBar}
            >
              Home
            </AppLink>
          </li>
          <li>
            <AppLink
              className='text-neutral-800'
              href='#about'
              onClick={handleToggleOpenSideBar}
            >
              Portfolio
            </AppLink>
          </li>
          <li>
            <AppLink
              className='text-neutral-800'
              href='#services'
              onClick={handleToggleOpenSideBar}
            >
              Pricing
            </AppLink>
          </li>
          <li>
            <AppLink
              className='text-neutral-800'
              href='#contact'
              onClick={handleToggleOpenSideBar}
            >
              Contact
            </AppLink>
          </li>
        </ul>
      </div>
    </div>
  )

  // find portal container
  const portalContainer =
    typeof window !== 'undefined'
      ? document.getElementById('mobile-sidebar-portal')
      : null

  return (
    <>
      {portalContainer
        ? createPortal(sideBarContent, portalContainer)
        : sideBarContent}
      <Button
        className='p-1 lg:hidden'
        variant='darkGlass'
        icon={<MenuIcon />}
        onClick={handleToggleOpenSideBar}
      />
    </>
  )
}
