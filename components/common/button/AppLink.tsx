'use client';

import { useThemeStore } from '@/stores/theme.store';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface IAppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
  href: string;
  children?: ReactNode;
  variant?: 'default';
  scrollOffset?: number;
}

export function AppLink({
  icon,
  href,
  children,
  className,
  scrollOffset = 0,
  ...restProps
}: IAppLinkProps) {
  const { mainColor } = useThemeStore();

  const getClassesByVariant = () => {
    return 'rounded-full text-white bg-purple px-4 py-2';
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      const element = document.querySelector<HTMLElement>(href);
      if (element) {
        e.preventDefault();
        const top = element.getBoundingClientRect().top + window.scrollY - scrollOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
    if (restProps.onClick) {
      restProps.onClick(e);
    }
  };

  return (
    <Link href={href} {...restProps} onClick={handleClick}>
      <div
        className={cn(
          'cursor-pointer rounded-full font-medium shadow-lg transition-all duration-200 ease-in-out hover:scale-105',
          getClassesByVariant(),
          className,
        )}
        style={{ backgroundColor: mainColor }}
      >
        {icon}
        {children}
      </div>
    </Link>
  );
}
