'use client';

import { AvatarBody } from '@/icons/AvatarIcon/AvatarBody';
import { useThemeStore } from '@/stores/theme.store';

export function EyeFollowAvatar() {
  const { mainColor } = useThemeStore();

  return (
    <div className='flex h-130 w-full justify-center lg:flex-2'>
      <div
        className='flex w-full max-w-100 items-center justify-center rounded-4xl'
        style={{
          backgroundColor: `${mainColor}63`,
        }}
      >
        <div className='relative'>
          <AvatarBody smile />
        </div>
      </div>
    </div>
  );
}
