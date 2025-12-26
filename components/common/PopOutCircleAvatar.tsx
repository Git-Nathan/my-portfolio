import Image from 'next/image';
import { MorphShape } from './MorphShape';

export function PopOutCircleAvatar() {
  return (
    <div className='relative flex-1'>
      <div className='flex aspect-square size-full items-center justify-center'>
        <div className='aspect-square w-full max-w-125 rotate-12 overflow-hidden rounded-[30%] bg-indigo-500'>
          <Image
            className='absolute -bottom-10 left-[55%] -translate-x-[54%] scale-120 -rotate-12'
            src='/images/my-avatar.webp'
            alt='My Avatar'
            width={800}
            height={800}
          />
        </div>

        <div className='absolute top-0 left-0 flex h-full w-full items-center justify-center'>
          <MorphShape color='#6750A4' />
        </div>
      </div>
    </div>
  );
}
