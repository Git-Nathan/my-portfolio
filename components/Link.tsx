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
}

export function AppLink({ icon, href, children, className, ...restProps }: IAppLinkProps) {
  const { mainColor } = useThemeStore();

  const getClassesByVariant = () => {
    return 'rounded-full text-white bg-purple px-4 py-2';
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
