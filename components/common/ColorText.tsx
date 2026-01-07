'use client';

import { useThemeStore } from '@/stores/theme.store';
import { HtmlHTMLAttributes } from 'react';

export type IColorTextProps = HtmlHTMLAttributes<HTMLElement> & {
  elements: string;
  underlineHoverEffect?: boolean;
};

export function ColorText(props: IColorTextProps) {
  const { elements = 'p', underlineHoverEffect, ...restProps } = props;
  const { mainColor } = useThemeStore();

  const Component = elements;

  if (underlineHoverEffect) {
    return (
      <div className='flex w-fit flex-col hover:[&_.text-underline]:w-[200%]'>
        <Component style={{ color: mainColor }} {...restProps} />
        <div
          className='text-underline mt-1 h-1 w-1/2 rounded-full transition-all duration-200'
          style={{
            backgroundColor: mainColor,
          }}
        />
      </div>
    );
  }

  return <Component style={{ color: mainColor }} {...restProps} />;
}
