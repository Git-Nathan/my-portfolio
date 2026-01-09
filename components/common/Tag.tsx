import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

export function Tag(props: HTMLAttributes<HTMLParagraphElement>) {
  const { className, ...restProps } = props;

  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-[#222]/10 py-1 ps-2 pe-3 font-semibold tracking-tight dark:border-[#d8d8d8]/50',
        className,
      )}
      {...restProps}
    >
      Tag
    </p>
  );
}
