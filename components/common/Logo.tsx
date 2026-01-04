'use client';

import { useThemeStore } from '@/stores/theme.store';

export function Logo() {
  const { mainColor } = useThemeStore();

  return (
    <p
      className='font-baloo translate-y-0.75 text-[40px] leading-10 font-semibold transition-colors duration-200'
      style={{ color: mainColor }}
    >
      N/{'>'}
    </p>
  );
}
