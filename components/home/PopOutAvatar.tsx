'use client';

import { useThemeStore } from '@/stores/theme.store';
import Image from 'next/image';
import { MorphShape } from '../common/MorphShape';

export function PopOutAvatar() {
  const { mainColor } = useThemeStore();

  return (
    <div className='relative w-[80vw] max-w-125 flex-1 lg:me-[2vw]'>
      <div
        className='flex aspect-square size-full items-center justify-center transition-all duration-200'
        style={{
          color: mainColor,
        }}
      >
        <div
          className='relative aspect-square w-full max-w-125 rotate-12 overflow-hidden rounded-[30%] transition-all duration-200'
          style={{
            backgroundColor: `${mainColor}63`,
          }}
        >
          <MorphShape className='absolute right-[24%] bottom-[40%] z-0 size-[26%] translate-x-1/2 translate-y-1/2 animate-[spin_90s_linear_infinite_reverse]' />

          <MorphShape className='absolute top-[20%] left-[4%] size-[30%] -translate-x-1/2 -translate-y-1/2 animate-[spin_90s_linear_infinite]' />

          <Image
            className='pointer-events-none absolute -bottom-10 left-[55%] z-10 -translate-x-[54%] scale-120 -rotate-12'
            src='/images/my-avatar.webp'
            alt='My Avatar'
            width={600}
            height={600}
            loading='eager'
          />
        </div>

        <MorphShape className='absolute bottom-[35%] left-[2%] size-[34%] -translate-x-1/2 translate-y-1/2 animate-[spin_70s_linear_infinite]' />

        <MorphShape className='absolute top-[18%] right-[8%] size-[40%] translate-x-1/2 -translate-y-1/2 animate-[spin_70s_linear_infinite_reverse]' />
      </div>
    </div>
  );
}
