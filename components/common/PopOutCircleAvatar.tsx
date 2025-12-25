import Image from 'next/image';

export function PopOutCircleAvatar() {
  return (
    <div className='relative flex-1'>
      <div className='flex aspect-square size-full items-center justify-center'>
        <div className='aspect-square w-full rotate-12 rounded-[30%] bg-indigo-500' />
        <Image
          className='absolute'
          src='/images/my-avatar.png'
          alt='My Avatar'
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
