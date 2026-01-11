import { cn } from '@/utils/cn';
import { HTMLAttributes, ReactNode } from 'react';

export interface ISectionProps extends HTMLAttributes<HTMLDivElement> {
  backgroundObjects?: ReactNode;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
}

export function Section({
  children,
  backgroundObjects,
  wrapperProps,
  className,
  ...restProps
}: ISectionProps) {
  const { className: wrapperClassName, ...restWrapperProps } = wrapperProps || {};

  return (
    <section
      className={cn('relative flex items-center justify-center overflow-x-clip', className)}
      {...restProps}
    >
      {backgroundObjects}
      <div
        className={cn(
          'relative mx-[4%] flex w-full max-w-5xl flex-col items-center justify-center',
          wrapperClassName,
        )}
        {...restWrapperProps}
      >
        {children}
      </div>
    </section>
  );
}
