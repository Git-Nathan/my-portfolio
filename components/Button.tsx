import { cn } from '@/utils/cn'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  variant?: 'solid' | 'gradient' | 'glass' | 'darkGlass'
}

export function Button({
  children,
  className,
  icon,
  variant = 'solid',
  ...props
}: IButtonProps) {
  const getBaseClasses = () => {
    if (variant === 'solid') return 'bg-black px-5 py-2 text-white'

    if (variant === 'glass')
      return 'border border-white/50 bg-white/30 px-4 py-2 text-[#323232] shadow-[inset_0_0_6px_1px_hsl(0,0%,100%,0.5)] backdrop-blur-[12px]'

    if (variant === 'darkGlass')
      return 'border border-black/50 bg-black/60 px-4 py-2 text-white shadow-[inset_0_0_6px_1px_hsl(0,0%,0%,0.5)] backdrop-blur-[12px]'

    return
  }

  const getHoverClasses = () => {
    return 'transition-transform duration-200 ease-in-out hover:scale-105'
  }

  return (
    <button
      className={cn(
        'cursor-pointer overflow-hidden rounded-full',
        getBaseClasses(),
        getHoverClasses(),
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  )
}
