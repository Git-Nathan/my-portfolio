import { BlurOverlay } from '@/components/common/BlurOverlay';
import { FloatingShape } from '@/components/common/FloatingShape';
import { InverseMouseParallax } from '@/components/common/InverseMouseParallax';
import { Shape } from '@/components/common/Shape';
import {
  bunPath,
  fourSidedCookiePath,
  gemPath,
  pentagonPath,
  pillPath,
  pixelCirclePath,
  puffyDiamondPath,
  slantedPath,
  softBurstPath,
} from '@/utils/shapePaths';

export function Background() {
  return (
    <div className='fixed inset-0 overflow-x-clip'>
      <InverseMouseParallax className='left-1/2 -z-1'>
        <div className='translate-y-40 -rotate-12'>
          <FloatingShape className='-rotate-12' delay='-28s'>
            <Shape
              className='fill-purple bottom-[10vw] left-0 size-[16vw] -translate-x-1/2 translate-y-1/2'
              path={softBurstPath}
            />
            <Shape
              className='fill-red bottom-[2vw] left-[-8vw] size-[20vw] -translate-x-1/2 translate-y-1/2'
              path={fourSidedCookiePath}
            />
            <Shape
              className='fill-blue bottom-[2vw] left-[8vw] size-[20vw] -translate-x-1/2 translate-y-1/2'
              path={pentagonPath}
            />
            <Shape
              className='fill-cyan top-[8vw] size-[25vw] -translate-x-1/2 -translate-y-1/2 -rotate-45'
              path={slantedPath}
            />
          </FloatingShape>
        </div>
        <div className='translate-y-350 -rotate-12'>
          <FloatingShape delay='-34s' reverseRotation>
            <Shape
              className='fill-purple bottom-[10vw] left-0 size-[16vw] -translate-x-1/2 translate-y-1/2'
              path={softBurstPath}
            />
            <Shape
              className='fill-red bottom-[2vw] left-[-8vw] size-[20vw] -translate-x-1/2 translate-y-1/2'
              path={puffyDiamondPath}
            />
            <Shape
              className='fill-cyan top-[8vw] size-[25vw] -translate-x-1/2 -translate-y-1/2 -rotate-45'
              path={pixelCirclePath}
            />
          </FloatingShape>
        </div>
        <div className='translate-y-200'>
          <FloatingShape delay='-4s'>
            <Shape
              className='fill-cyan bottom-[5vw] left-[6vw] size-[18vw] -translate-x-1/2 translate-y-1/2 rotate-40'
              path={fourSidedCookiePath}
            />
            <Shape
              className='fill-purple top-[5vw] size-[16vw] -translate-x-1/2 -translate-y-1/2 rotate-12'
              path={slantedPath}
            />
          </FloatingShape>
        </div>
        <div className='translate-y-10'>
          <FloatingShape delay='-45s' reverseRotation>
            <Shape
              className='fill-blue bottom-[8vw] left-[6vw] size-[12vw] -translate-x-1/2 translate-y-1/2 rotate-40'
              path={pixelCirclePath}
            />
            <Shape
              className='fill-red -top-[3vw] size-[8vw] -translate-x-1/2 -translate-y-1/2 rotate-12'
              path={gemPath}
            />
          </FloatingShape>
        </div>
        <div className='translate-y-30'>
          <FloatingShape reverseRotation className='-rotate-4'>
            <Shape
              className='fill-cyan top-[-1vw] left-[6vw] size-[10vw] -translate-x-1/2 -translate-y-1/2 rotate-6'
              path={pillPath}
            />
            <Shape
              className='fill-blue bottom-[8vw] left-[6vw] size-[12vw] -translate-x-1/2 translate-y-1/2 rotate-40'
              path={pixelCirclePath}
            />
            <Shape
              className='fill-red -top-[3vw] size-[8vw] -translate-x-1/2 -translate-y-1/2 rotate-12'
              path={gemPath}
            />
          </FloatingShape>
        </div>
        <div className='translate-y-120'>
          <FloatingShape reverseRotation className='-rotate-4' delay='-19s'>
            <Shape
              className='fill-cyan top-[2vw] left-[-6vw] size-[10vw] -translate-x-1/2 -translate-y-1/2 rotate-6'
              path={pillPath}
            />
            <Shape
              className='fill-blue bottom-[8vw] left-[6vw] size-[12vw] -translate-x-1/2 translate-y-1/2 rotate-40'
              path={bunPath}
            />
            <Shape
              className='fill-red -top-[3vw] size-[8vw] -translate-x-1/2 -translate-y-1/2 rotate-12'
              path={gemPath}
            />
          </FloatingShape>
        </div>
        <div className='translate-y-290'>
          <FloatingShape delay='-53s'>
            <Shape
              className='fill-red bottom-[5vw] left-[6vw] size-[18vw] -translate-x-1/2 translate-y-1/2 rotate-40'
              path={fourSidedCookiePath}
            />
            <Shape
              className='fill-purple top-[5vw] size-[16vw] -translate-x-1/2 -translate-y-1/2 rotate-12'
              path={pixelCirclePath}
            />
          </FloatingShape>
        </div>
      </InverseMouseParallax>

      <BlurOverlay />
    </div>
  );
}
