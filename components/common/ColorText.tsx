'use client';

import { useThemeStore } from '@/stores/theme.store';
import { HtmlHTMLAttributes } from 'react';

export type IColorTextProps = HtmlHTMLAttributes<HTMLElement> & {
  elements: string;
};

export function ColorText(props: IColorTextProps) {
  const { elements = 'p', ...restProps } = props;
  const { mainColor } = useThemeStore();

  const Component = elements;

  return <Component style={{ color: mainColor }} {...restProps} />;
}
