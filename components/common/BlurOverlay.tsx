import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

export function BlurOverlay({ className, ...restProps }: Readonly<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cn('absolute inset-0 z-0 size-full bg-[#eeeeee]/50 backdrop-blur-3xl', className)}
      {...restProps}
    />
  );
}
