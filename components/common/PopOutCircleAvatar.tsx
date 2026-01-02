import Image from 'next/image';
import { MorphShape } from './MorphShape';

export function PopOutCircleAvatar() {
  return (
    <div className='relative w-[80vw] max-w-125 flex-1 lg:me-[2vw]'>
      <div className='flex aspect-square size-full items-center justify-center'>
        <div className='aspect-square w-full max-w-125 rotate-12 overflow-hidden rounded-[30%] bg-[#CEBBFD]'>
          <MorphShape className='fill-purple absolute right-[24%] bottom-[40%] z-0 size-[26%] translate-x-1/2 translate-y-1/2 animate-[spin_90s_linear_infinite_reverse]' />

          <MorphShape className='fill-purple absolute top-[20%] left-[4%] size-[30%] -translate-x-1/2 -translate-y-1/2 animate-[spin_90s_linear_infinite]' />

          <Image
            className='pointer-events-none absolute -bottom-10 left-[55%] z-10 -translate-x-[54%] scale-120 -rotate-12'
            src='/images/my-avatar.webp'
            alt='My Avatar'
            width={800}
            height={800}
          />
        </div>

        <MorphShape className='fill-purple absolute bottom-[35%] left-[4%] size-[34%] -translate-x-1/2 translate-y-1/2 animate-[spin_70s_linear_infinite]' />

        <MorphShape className='fill-purple absolute top-[24%] right-[8%] size-[40%] translate-x-1/2 -translate-y-1/2 animate-[spin_70s_linear_infinite_reverse]' />
      </div>
    </div>
  );
}
