import { IoMdCheckmark } from 'react-icons/io'

const Pricing = () => {
  return (
    <div id='services' className='mb-8'>
      <div className='mx-auto mt-16 mb-12 flex max-w-[700px] flex-col items-center px-12 font-medium'>
        <div className='w-fit rounded-xl border-2 border-slate-300/80 p-0.5 px-3 text-sm'>
          Boost your business
        </div>
        <div className='bg-gradient-to-b from-black to-[#002499] bg-clip-text py-6 text-center text-3xl font-bold tracking-tighter text-transparent md:text-4xl lg:text-5xl'>
          Choose Your Package
        </div>

        <div className='mb-8 text-center text-lg md:text-xl'>
          Transparent pricing, no hidden fees — just quality edits that sell
          properties.
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-8 pb-10 lg:flex-row lg:items-end'>
        <div className='max-w-[307px] rounded-2xl border-2 border-gray-100 p-8 shadow-xl'>
          <div className='font-bold text-gray-500'>Standard Package</div>
          <div className='py-8'>
            <div className='mb-2'>
              <span className='text-5xl font-extrabold'>$35</span>
              <span className='text-sm text-gray-600'>
                {' '}
                for videos under 90s
              </span>
            </div>
            <div>
              <span className='text-3xl font-bold'>$45</span>
              <span className='text-sm text-gray-600'>
                {' '}
                for videos over 90s
              </span>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2 shrink-0' /> Basic
              trimming & merging
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2 shrink-0' /> Balance
              overall colors of the video
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2 shrink-0' /> Basic color
              correction
            </div>
          </div>
        </div>

        <div className='max-w-[307px] rounded-2xl border-2 bg-black p-8 text-white shadow-2xl'>
          <div className='flex items-center justify-between'>
            <div className='font-bold text-gray-500'>Premium Package</div>
            <div className='w-fit rounded-xl border-2 border-slate-300/20 bg-gradient-to-r from-pink-500 via-lime-600 to-sky-400 bg-clip-text p-0.5 px-2 text-xs font-bold tracking-tighter text-transparent'>
              Most Popular
            </div>
          </div>
          <div className='py-8'>
            <div className='mb-2'>
              <span className='text-5xl font-extrabold'>$50</span>
              <span className='text-sm text-gray-400'>
                {' '}
                for videos under 90s
              </span>
            </div>
            <div>
              <span className='text-3xl font-bold'>$65</span>
              <span className='text-sm text-gray-400'>
                {' '}
                for videos over 90s
              </span>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2 shrink-0' /> Smooth
              trimming paced to transitions
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2 shrink-0' /> Remove
              unnecessary breaks and pauses
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2 shrink-0' /> Improve
              visual flow between scenes
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2 shrink-0' /> Advanced
              color adjustment
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2 shrink-0' /> Modify
              brightness, contrast, exposure, and saturation
            </div>
          </div>
        </div>
        <div className='max-w-[307px] rounded-2xl border-2 border-gray-100 p-8 shadow-xl'>
          <div className='font-bold text-gray-500'>High-end Package</div>
          <div className='py-8'>
            <div className='mb-2'>
              <span className='text-5xl font-extrabold'>$80</span>
              <span className='text-sm text-gray-600'>
                {' '}
                for videos under 90s
              </span>
            </div>
            <div>
              <span className='text-3xl font-bold'>$100</span>
              <span className='text-sm text-gray-600'>
                {' '}
                for videos over 90s
              </span>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2 shrink-0' /> Creative
              professional editing with dynamic pacing
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2 shrink-0' /> Fully
              polished merging & sequencing
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2 shrink-0' /> Designed for
              high-impact videos
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2 shrink-0' /> Rhythm-based
              timing and transitions
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2 shrink-0' />{' '}
              Professional-grade color grading
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2 shrink-0' /> Detailed
              exposure, contrast, and tone control
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2 shrink-0' />{' '}
              Cinema-quality color enhancement
            </div>
          </div>
        </div>
      </div>

      <div className='mb-8 px-4 text-center text-lg md:text-xl'>
        All: Stabilization, Motion Blur, Speed Ramp
        <br />
        Up to 3 Full Revision Rounds Included
        <br />
        Add-ons (extra fee): Al, Effects, Graphics, VO...
        <br />
        📧: studio@liosmooth.com
        <br />
        Send me a DM on Instagram for a detailed quote
      </div>
    </div>
  )
}

export default Pricing
