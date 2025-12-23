import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

export function BlurOverlay(props: Readonly<HTMLAttributes<HTMLDivElement>>) {
  const { className, ...restProps } = props;

  return (
    <div
      className={cn('absolute inset-0 z-0 size-full backdrop-blur-2xl', className)}
      {...restProps}
    />
  );
}
