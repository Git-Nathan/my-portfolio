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
  const getBaseClasses = () => {
    if (variant === 'solid') return 'bg-black px-5 py-2 text-white';
  };

  const getHoverClasses = () => {
    return 'transition-transform duration-200 ease-in-out hover:scale-105';
  };

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
  );
}
