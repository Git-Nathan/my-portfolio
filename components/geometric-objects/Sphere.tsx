import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

export interface ISphereProps extends HTMLAttributes<HTMLDivElement> {
  colorA?: string;
  colorB?: string;
}

export function Sphere(props: Readonly<ISphereProps>) {
  const { className, style, colorA = '#4793fe', colorB = colorA, ...restProps } = props;

  return (
    <div
      className={cn('absolute -z-1 h-32 w-32 rounded-full opacity-30', className)}
      style={{
        backgroundImage: `radial-gradient(circle at 30% 30%, ${colorA}, ${colorB})`,
        ...style,
      }}
      {...restProps}
    />
  );
}
