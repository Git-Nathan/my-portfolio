'use client';

import { useThemeStore } from '@/stores/theme.store';
import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  variant?: 'solid';
}

export function Button({
  children,
  className,
  icon,
  variant = 'solid',
  ...props
}: Readonly<IButtonProps>) {
  const { mainColor } = useThemeStore();

  const getBaseClasses = () => {
    if (variant === 'solid') return 'bg-black px-5 py-2 text-white';
  };

  const getHoverClasses = () => {
    return 'ease-in-out hover:scale-105';
  };

  return (
    <button
      className={cn(
        'cursor-pointer overflow-hidden rounded-full shadow-lg transition-all duration-200',
        getBaseClasses(),
        getHoverClasses(),
        className,
      )}
      style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', backgroundColor: mainColor }}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
