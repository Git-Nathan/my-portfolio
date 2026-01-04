'use client';

import { useThemeStore } from '@/stores/theme.store';

export type IColorButtonProps = {
  color: string;
};

export function ColorButton(props: IColorButtonProps) {
  const { color } = props;

  const { mainColor, setMainColor } = useThemeStore();

  const isActive = mainColor === color;

  return (
    <button
      className='flex size-8 cursor-pointer items-center justify-center rounded-full shadow-lg'
      style={{ backgroundColor: color }}
      onClick={() => setMainColor(color)}
    >
      <div
        className='flex size-6 items-center justify-center rounded-full bg-white'
        style={{
          backgroundColor: isActive ? 'white' : 'transparent',
        }}
      >
        <div
          className='size-4 rounded-full'
          style={{
            backgroundColor: isActive ? color : 'transparent',
          }}
        />
      </div>
    </button>
  );
}
