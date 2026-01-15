'use client';

import { AvatarBody } from '@/icons/avatar-icon/AvatarBody';
import { useThemeStore } from '@/stores/theme.store';
import { FadeIn } from '../motion-animation/FadeIn';
import { LeftEye } from './LeftEye';
import { RightEye } from './RightEye';

export function EyeFollowAvatar() {
  const { mainColor } = useThemeStore();

  return (
    <FadeIn className='flex h-130 w-full justify-center lg:flex-2' direction='right'>
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
    </FadeIn>
  );
}
