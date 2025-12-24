import { cn } from '@/utils/cn';
import { HTMLAttributes, ReactNode } from 'react';

export interface ISectionProps extends HTMLAttributes<HTMLDivElement> {
  backgroundObjects?: ReactNode;
}

export function Section(props: Readonly<ISectionProps>) {
  const { children, backgroundObjects, ...restProps } = props;

  return (
    <section className={cn('relative flex items-center justify-center')} {...restProps}>
      {backgroundObjects}
      <div className='relative mx-[4%] flex w-full max-w-7xl flex-col items-center justify-center'>
        {children}
      </div>
    </section>
  );
}
