'use client';

import { AvatarBody } from '@/icons/avatar-icon/AvatarBody';
import { useThemeStore } from '@/stores/theme.store';
import { LeftEye } from './LeftEye';
import { RightEye } from './RightEye';

export function EyeFollowAvatar() {
  const { mainColor } = useThemeStore();

  return (
    <div
      className='flex w-full max-w-100 items-center justify-center rounded-4xl'
      style={{
        backgroundColor: `${mainColor}83`,
      }}
    >
      <div className='relative flex items-center justify-center'>
        <AvatarBody />
        <LeftEye />
        <RightEye />
        <div id='face-center' className='absolute top-28' />
      </div>
    </div>
  );
}
