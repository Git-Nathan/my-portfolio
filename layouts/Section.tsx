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
  ...restProps
}: Readonly<ISectionProps>) {
  const { className: wrapperClassName, ...restWrapperProps } = wrapperProps || {};

  return (
    <section
      className={cn('relative flex items-center justify-center overflow-x-clip')}
      {...restProps}
    >
      {backgroundObjects}
      <div
        className={cn(
          'relative flex w-full max-w-350 flex-col items-center justify-center px-[4%]',
          wrapperClassName,
        )}
        {...restWrapperProps}
      >
        {children}
      </div>
    </section>
  );
}
