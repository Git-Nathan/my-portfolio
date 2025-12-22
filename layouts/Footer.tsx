import Image from 'next/image';

export const Footer = () => {
  return (
    <div className='flex flex-col gap-8 bg-black p-16 text-white md:flex-row md:px-20 xl:px-44'>
      <div className='flex max-w-150 flex-col gap-5 text-gray-300/85'>
        <Image
          src={'/images/logo.png'}
          alt='Logo'
          className='cursor-pointer'
          width={40}
          height={40}
        />
        <div>
          LioSmooth.com delivers fast, high-quality, and affordable image editing services worldwide
          — built to boost your business.
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='text-lg font-bold'>Contact Us</div>
        <div className='cursor-pointer text-gray-300/85'>By email: studio@liosmooth.com</div>
      </div>
    </div>
  );
};
