'use client';

import { useThemeStore } from '@/stores/theme.store';

export function EyeFollowAvatar() {
  const { mainColor } = useThemeStore();

  return (
    <div
      className='h-130 w-full rounded-4xl lg:flex-2'
      style={{
        backgroundColor: `${mainColor}63`,
      }}
    />
  );
}
