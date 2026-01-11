'use client';

import { useThemeStore } from '@/stores/theme.store';
import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

type TagProps = HTMLAttributes<HTMLParagraphElement> & {
  variant?: 'outline' | 'solid';
};

export function Tag(props: TagProps) {
  const { className, children, variant = 'outline', ...restProps } = props;

  const { mainColor } = useThemeStore();

  const variantStyles = {
    outline: 'border border-[#222]/10 dark:border-[#d8d8d8]/50',
    solid: 'bg-gray-200 dark:bg-gray-700 border-0',
  };

  const getStyle = () => {
    if (variant === 'solid') {
      return {
        backgroundColor: mainColor + 'aa',
      };
    }
  };

  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-base font-medium tracking-tight',
        variantStyles[variant],
        className,
      )}
      style={getStyle()}
      {...restProps}
    >
      {children}
    </p>
  );
}
