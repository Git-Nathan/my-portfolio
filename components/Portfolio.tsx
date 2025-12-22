const Portfolio: React.FC = () => {
  return (
    <div
      id='about'
      className='flex flex-col items-center overflow-x-hidden pb-24'
    >
      <div className='mx-auto mt-20 flex flex-col items-center px-8 font-medium md:w-[550px] lg:w-[630px]'>
        <div className='w-fit rounded-xl border-2 border-slate-300/80 p-0.5 px-3 text-sm'>
          Portfolio
        </div>
        <div className='bg-gradient-to-b from-black to-[#002499] bg-clip-text py-6 text-center text-3xl font-bold tracking-tighter text-transparent md:text-4xl lg:text-5xl'>
          My Work
        </div>

        <div className='mb-8 text-center text-lg md:text-xl'>
          See how I transform ordinary footage into stunning real estate
          stories.
        </div>
      </div>

      <div className='flex w-full flex-wrap items-center justify-center gap-16 px-8 pt-4'>
        <div className='flex w-full max-w-[360px] flex-col items-center justify-center rounded-xl p-4 shadow-2xl'>
          <div
            className='relative w-full overflow-hidden rounded-2xl shadow-lg'
            style={{ aspectRatio: '9/16' }}
          >
            <iframe
              src={`https://www.youtube.com/embed/M0BsRedTPp8`}
              title='YouTube Short 1'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className='absolute top-0 left-0 h-full w-full'
            ></iframe>
          </div>
        </div>

        <div className='flex w-full max-w-[360px] flex-col items-center justify-center rounded-xl p-4 shadow-2xl'>
          <div
            className='relative w-full overflow-hidden rounded-2xl shadow-lg'
            style={{ aspectRatio: '9/16' }}
          >
            <iframe
              src={`https://www.youtube.com/embed/YO5O-y4ihyo`}
              title='YouTube Short 2'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className='absolute top-0 left-0 h-full w-full'
            ></iframe>
          </div>
        </div>

        <div className='flex w-full max-w-[360px] flex-col items-center justify-center rounded-xl p-4 shadow-2xl'>
          <div
            className='relative w-full overflow-hidden rounded-2xl shadow-lg'
            style={{ aspectRatio: '9/16' }}
          >
            <iframe
              src={`https://www.youtube.com/embed/UcPriL62Pkk`}
              title='YouTube Short 3'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className='absolute top-0 left-0 h-full w-full'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
