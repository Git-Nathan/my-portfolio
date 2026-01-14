'use client';

import { DocumentExportIcon } from '@/icons/DocumentExportIcon';
import { useThemeStore } from '@/stores/theme.store';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { ExternalLink } from '../common/button/ExternalLink';
import { Tag } from '../common/Tag';

interface MyWorkItemProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  projectUrl: string;
  externalUrl: string;
  reversed?: boolean;
}

export function MyWorkItem({
  title,
  description,
  image,
  tags,
  projectUrl,
  externalUrl,
  reversed = false,
}: MyWorkItemProps) {
  const { mainColor } = useThemeStore();

  const openExternalLink = () => {
    window.open(externalUrl, '_blank');
  };

  return (
    <button
      className={cn(
        'group relative flex min-h-90 w-full items-center',
        reversed ? 'justify-start' : 'justify-end',
      )}
      onClick={openExternalLink}
    >
      <div
        className={cn(
          'absolute aspect-16/14 h-full w-full overflow-hidden rounded-4xl opacity-30 lg:max-w-150 lg:opacity-100',
          reversed ? 'end-0' : 'start-0',
        )}
      >
        <Image
          className='project-img z-0 object-cover object-top grayscale transition-transform duration-500 ease-in-out group-hover:scale-125 lg:grayscale-0'
          src={image}
          alt={title}
          fill
          sizes='(max-width: 768px) 100vw, 60vw'
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
          <h2 className='text-[28px] font-bold'>{title}</h2>
        </div>
        <p
          className={cn(
            'max-w-150 rounded-4xl px-6 py-4 text-base! text-white shadow-lg',
            reversed ? 'text-start' : 'text-end',
          )}
          style={{
            backgroundColor: mainColor,
          }}
        >
          {description}
        </p>
        <div
          className={cn('flex flex-wrap gap-2 text-sm', reversed ? 'justify-start' : 'justify-end')}
        >
          {tags.map((tag) => (
            <Tag
              key={`Tag-${projectUrl}-${tag}`}
              variant='solid'
              className='text-sm text-neutral-100 shadow-lg lg:text-base'
            >
              {tag}
            </Tag>
          ))}
        </div>
        <div className={cn('flex items-center gap-4')}>
          <ExternalLink href={externalUrl} icon={<DocumentExportIcon />} variant='icon' />
        </div>
      </div>
    </button>
  );
}
