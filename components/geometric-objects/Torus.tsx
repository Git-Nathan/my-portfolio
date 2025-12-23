import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

export interface ITorusProps extends HTMLAttributes<HTMLDivElement> {
  colorA?: string;
  colorB?: string;
  innerColor?: string;
}

export function Torus(props: Readonly<ITorusProps>) {
  const {
    className,
    style,
    colorA = '#a78bfa',
    colorB = '#4c1d95',
    innerColor = '#fff',
    ...restProps
  } = props;

  return (
    <div
      className={cn('absolute -z-1 h-32 w-32 rounded-full opacity-50', className)}
      style={{
        backgroundImage: `linear-gradient(135deg, ${colorA}, ${colorB})`,
        ...style,
      }}
      {...restProps}
    >
      <div className='absolute inset-6 rounded-full' style={{ backgroundColor: innerColor }} />
    </div>
  );
}
