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

        <MorphShape className='absolute bottom-0 left-0' size={80} color='#7655BE' />
      </div>
    </div>
  );
}
