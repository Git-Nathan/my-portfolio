'use client';

import { DocumentExportIcon } from '@/icons/DocumentExportIcon';
import { useThemeStore } from '@/stores/theme.store';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { ExternalLink } from '../common/button/ExternalLink';
import { LearnMoreButton } from '../common/button/LearnMoreButton';
import { Tag } from '../common/Tag';

interface MyWorkItemProps {
  reversed?: boolean;
}

export function MyWorkItem({ reversed = false }: MyWorkItemProps) {
  const { mainColor } = useThemeStore();

  return (
    <div
      className={cn(
        'relative mt-16 flex min-h-90 w-full items-center',
        reversed ? 'justify-start' : 'justify-end',
      )}
    >
      <div
        className={cn(
          'absolute aspect-16/14 h-full w-full overflow-hidden rounded-4xl opacity-30 lg:max-w-150 lg:opacity-100',
          reversed ? 'end-0' : 'start-0',
        )}
      >
        <Image
          className='project-img z-0 object-cover object-top grayscale lg:grayscale-0'
          src={'/images/thehelloapp.png'}
          alt={'The Hello App'}
          fill
        />
      </div>

      <div
        className={cn(
          'z-10 mx-4 my-4 flex flex-col gap-4 lg:mx-0',
          reversed ? 'items-start' : 'items-end',
        )}
      >
        <div className={cn('flex flex-col gap-1', reversed ? 'items-start' : 'items-end')}>
          <Tag className='text-text-gray w-fit text-sm!'>Featured Project</Tag>
          <h2 className='text-[28px] font-bold'>The Hello App</h2>
        </div>
        <p
          className={cn(
            'max-w-150 rounded-4xl px-6 py-4 text-base! text-white',
            reversed ? 'text-start' : 'text-end',
          )}
          style={{
            backgroundColor: mainColor,
          }}
        >
          I contributed to building and maintaining the service provider web and the admin panel web
          of The Hello App. A platform that connects service providers with customers.
        </p>
        <div
          className={cn('flex flex-wrap gap-2 text-sm', reversed ? 'justify-start' : 'justify-end')}
        >
          <Tag variant='solid' className='text-sm text-neutral-100 lg:text-base'>
            React
          </Tag>
          <Tag variant='solid' className='text-sm text-neutral-100 lg:text-base'>
            Tailwind CSS
          </Tag>
          <Tag variant='solid' className='text-sm text-neutral-100 lg:text-base'>
            TypeScript
          </Tag>
          <Tag variant='solid' className='text-sm text-neutral-100 lg:text-base'>
            Redux
          </Tag>
          <Tag variant='solid' className='text-sm text-neutral-100 lg:text-base'>
            Ant Design
          </Tag>
        </div>
        <div className={cn('flex items-center gap-4')}>
          <LearnMoreButton />

          <ExternalLink
            href='https://thehelloapp.com/'
            icon={<DocumentExportIcon />}
            variant='icon'
          />
        </div>
      </div>
    </div>
  );
}
