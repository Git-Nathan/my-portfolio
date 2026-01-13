'use client';

import { AvatarBody } from '@/icons/AvatarIcon/AvatarBody';
import { useThemeStore } from '@/stores/theme.store';
import { LeftEye } from './LeftEye';
import { RightEye } from './RightEye';

interface EyeFollowAvatarProps {
  smile?: boolean;
}

export function EyeFollowAvatar({ smile = false }: EyeFollowAvatarProps) {
  const { mainColor } = useThemeStore();

  return (
    <div className='flex h-130 w-full justify-center lg:flex-2'>
      <div
        className='flex w-full max-w-100 items-center justify-center rounded-4xl'
        style={{
          backgroundColor: `${mainColor}93`,
        }}
      >
        <div className='relative flex items-center justify-center'>
          <AvatarBody smile={smile} />
          <LeftEye />
          <RightEye />
        </div>
      </div>
    </div>
  );
}
