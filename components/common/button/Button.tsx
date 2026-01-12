'use client';

import { useThemeStore } from '@/stores/theme.store';
import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  endIcon?: ReactNode;
  variant?: 'solid' | 'text' | 'secondary';
};

export function Button({
  children,
  className,
  icon,
  endIcon,
  variant = 'solid',
  style,
  ...props
}: IButtonProps) {
  const { mainColor } = useThemeStore();

  const baseClasses = {
    solid: 'text-white shadow-lg',
    secondary:
      'bg-gray-700 px-5 py-2 text-lg font-medium whitespace-nowrap text-white transition-all duration-200 ease-in-out hover:scale-105 dark:bg-gray-300 dark:text-black',
    text: '',
  };

  const getBaseStyle = () => {
    if (variant === 'solid')
      return { backgroundColor: mainColor, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' };

    return {};
  };

  return (
    <button
      className={cn(
        'relative flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-2 transition-all duration-200 ease-in-out hover:scale-105',
        baseClasses[variant],
        className,
      )}
      style={{
        ...getBaseStyle(),
        ...style,
      }}
      {...props}
    >
      {icon}
      {children}
      {endIcon}
    </button>
  );
}
