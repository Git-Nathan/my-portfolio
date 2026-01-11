import { ArrowRightIcon } from '@/icons/ArrowRightIcon';
import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes } from 'react';

export type ILearnMoreButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function LearnMoreButton(props: ILearnMoreButtonProps) {
  const { className, ...restProps } = props;

  return (
    <button
      className={cn(
        'relative flex items-center py-1.5 ps-13 pe-4 hover:[&_.arrow-line]:w-4 hover:[&_.arrow-line]:-translate-x-1 hover:[&_.button-content]:text-neutral-200! dark:hover:[&_.button-content]:text-neutral-800! hover:[&_.icon-wrapper]:w-full hover:[&_.icon-wrapper]:ps-6',
        className,
      )}
      {...restProps}
    >
      <div className='icon-wrapper bg-text-gray text-text-gray-reverse absolute left-0 flex size-10 items-center rounded-full ps-2 transition-all duration-200'>
        <div className='arrow-line bg-text-gray-reverse absolute left-5 h-0.5 w-0 rounded-full transition-all duration-200' />
        <ArrowRightIcon />
      </div>
      <p className='button-content text-text-gray z-10 text-lg font-medium transition-all duration-200'>
        Check It Out
      </p>
    </button>
  );
}
