'use client';

import { useThemeStore } from '@/stores/theme.store';
import { HtmlHTMLAttributes } from 'react';
import { FadeIn } from '../motion-animation/FadeIn';

export type IColorTextProps = HtmlHTMLAttributes<HTMLElement> & {
  elements: string;
  underlineHoverEffect?: boolean;
  animationDirection?: 'up' | 'down' | 'left' | 'right';
};

export function ColorText(props: IColorTextProps) {
  const { elements = 'p', underlineHoverEffect, animationDirection, ...restProps } = props;
  const { mainColor } = useThemeStore();

  const Component = elements;

  if (underlineHoverEffect) {
    return (
      <FadeIn
        className='flex w-fit max-w-full flex-col hover:[&_.text-underline]:w-full'
        direction={animationDirection}
      >
        <Component style={{ color: mainColor }} {...restProps} />
        <div
          className='text-underline mt-1 h-1 w-1/2 rounded-full transition-all duration-200'
          style={{
            backgroundColor: mainColor,
          }}
        />
      </FadeIn>
    );
  }

  return <Component style={{ color: mainColor }} {...restProps} />;
}
