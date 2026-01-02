import { cn } from '@/utils/cn';
import { HTMLAttributes, ReactNode } from 'react';

export interface ISectionProps extends HTMLAttributes<HTMLDivElement> {
  backgroundObjects?: ReactNode;
}

export function Section({ children, backgroundObjects, ...restProps }: Readonly<ISectionProps>) {
  return (
    <section
      className={cn('relative flex items-center justify-center overflow-x-clip')}
      {...restProps}
    >
      {backgroundObjects}
      <div className='relative flex w-full max-w-7xl flex-col items-center justify-center px-[4%]'>
        {children}
      </div>
    </section>
  );
}
