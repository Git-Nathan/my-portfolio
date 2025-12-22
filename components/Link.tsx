'use client'

import { cn } from '@/utils/cn'
import Link from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

export interface IAppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode
  href: string
  children?: ReactNode
  variant?: 'default' | 'darkGlass'
}

export function AppLink({
  icon,
  href,
  children,
  className,
  ...restProps
}: IAppLinkProps) {
  const getClassesByVariant = () => {
    if (restProps.variant === 'darkGlass')
      return 'border border-black/50 bg-black/60 px-4 py-2 text-white shadow-[inset_0_0_6px_1px_hsl(0,0%,0%,0.5)] backdrop-blur-[12px]'

    return 'overflow-hidden rounded-full border border-white/50 bg-white/50 px-4 py-2 text-black shadow-[inset_0_0_6px_1px_hsl(0,0%,100%,0.5)] backdrop-blur-[12px]'
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    if (restProps.onClick) {
      restProps.onClick(e)
    }
  }

  return (
    <Link href={href} {...restProps} onClick={handleClick}>
      <div
        className={cn(
          'cursor-pointer overflow-hidden rounded-full font-medium transition-transform duration-200 ease-in-out hover:scale-105',
          getClassesByVariant(),
          className,
        )}
      >
        {icon}
        {children}
      </div>
    </Link>
  )
}
