import Image from 'next/image';

export function MyWorkItem() {
  return (
    <div className='relative mt-16 flex min-h-90 w-full flex-col items-end justify-center'>
      <Image
        className='absolute z-0 overflow-hidden rounded'
        src={'/images/thehelloapp.png'}
        alt={'The Hello App'}
        objectFit='cover'
        fill
      />

      <div>asdf</div>
      <div>asdf</div>
    </div>
  );
}
