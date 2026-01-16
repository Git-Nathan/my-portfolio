'use client';

import { useThemeStore } from '@/stores/theme.store';
import Image from 'next/image';
import { MorphShape } from '../common/MorphShape';

export function PopOutAvatar() {
  const { mainColor } = useThemeStore();

  return (
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
        <MorphShape
          className='absolute right-[24%] bottom-[40%] z-0 size-[28%] translate-x-1/2 translate-y-1/2'
          animate={{ rotate: -360 }}
          transition={{
            rotate: {
              duration: 90,
              ease: 'linear',
              repeat: Infinity,
            },
            scale: {
              duration: 0.2,
              ease: 'easeOut',
            },
          }}
        />

        <MorphShape
          className='absolute top-[20%] left-[4%] size-[35%] -translate-x-1/2 -translate-y-1/2'
          animate={{ rotate: 360 }}
          transition={{
            rotate: {
              duration: 90,
              ease: 'linear',
              repeat: Infinity,
            },
            scale: {
              duration: 0.2,
              ease: 'easeOut',
            },
          }}
        />

        <Image
          className='pointer-events-none absolute -bottom-10 left-[55%] z-10 -translate-x-[54%] scale-120 -rotate-12'
          src='/images/my-avatar.webp'
          alt='My Avatar'
          width={600}
          height={600}
          loading='eager'
        />
      </div>

      <MorphShape
        className='absolute bottom-[35%] left-[2%] size-[36%] -translate-x-1/2 translate-y-1/2'
        animate={{ rotate: 360 }}
        transition={{
          rotate: {
            duration: 70,
            ease: 'linear',
            repeat: Infinity,
          },
          scale: {
            duration: 0.2,
            ease: 'easeOut',
          },
        }}
      />

      <MorphShape
        className='absolute top-[18%] right-[8%] size-[42%] translate-x-1/2 -translate-y-1/2'
        animate={{ rotate: -360 }}
        transition={{
          rotate: {
            duration: 70,
            ease: 'linear',
            repeat: Infinity,
          },
          scale: {
            duration: 0.2,
            ease: 'easeOut',
          },
        }}
      />
    </div>
  );
}
