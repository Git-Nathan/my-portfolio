'use client';

import { useThemeStore } from '@/stores/theme.store';
import { flowerPath } from '@/utils/shapePaths';
import { useTheme } from 'next-themes';

export function LightDarkToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const { mainColor } = useThemeStore();

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className='mx-1 h-8 w-14 rounded-full p-0.75 transition-all duration-200'
      style={{
        backgroundColor: `${mainColor}63`,
      }}
      suppressHydrationWarning
    >
      <div
        className='size-6.5 rounded-full transition-all duration-200'
        style={{
          color: mainColor,
          backgroundColor: isDark ? '#ffffffb0' : 'white',
          transform: !isDark ? 'translateX(0)' : 'translateX(24px)',
        }}
        suppressHydrationWarning
      >
        <svg
          width='380'
          height='380'
          viewBox='0 0 380 380'
          className='size-full animate-[spin_70s_linear_infinite] transition-all duration-200'
          stroke='currentColor'
          fill='currentColor'
          style={{
            opacity: !isDark ? 1 : 0,
          }}
          suppressHydrationWarning
        >
          <path d={flowerPath} />
        </svg>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div
            className='absolute size-2 -translate-x-1.5 rounded-full transition-all duration-200'
            style={{
              backgroundColor: mainColor,
              opacity: !isDark ? 0 : 1,
            }}
            suppressHydrationWarning
          />
          <div
            className='absolute size-1 translate-x-1 -translate-y-1.5 rounded-full transition-all duration-200'
            style={{
              backgroundColor: mainColor,
              opacity: !isDark ? 0 : 1,
            }}
            suppressHydrationWarning
          />
          <div
            className='absolute size-1.5 translate-x-1 translate-y-1 rounded-full transition-all duration-200'
            style={{
              backgroundColor: mainColor,
              opacity: !isDark ? 0 : 1,
            }}
            suppressHydrationWarning
          />
        </div>
      </div>
    </button>
  );
}
