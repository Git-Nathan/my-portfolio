import { AppLink } from '@/components/common/button/AppLink';
import { Logo } from '@/components/common/Logo';
import { LightDarkToggle } from '@/components/header/LightDarkToggle';
import { MobileSideBar } from './MobileSideBar';

export function Header() {
  return (
    <div className='fixed top-0 z-100 w-full gap-4'>
      <header className='sticky top-0 z-40 mx-auto w-full max-w-7xl py-2 pr-2 pl-2'>
        <div className='inset-0 flex h-15 items-center justify-between overflow-hidden rounded-full border border-white/30 bg-neutral-950/8 pr-2.5 pl-5 shadow-[inset_0_0_8px_1px_hsl(0,0%,100%,0.2)] backdrop-blur-lg dark:bg-gray-200/10'>
          <Logo />
          <nav className='absolute left-1/2 -translate-x-1/2'>
            <ul className='hidden items-center gap-5 font-medium text-neutral-900 lg:flex'>
              <li>
                <AppLink href='#home'>Home</AppLink>
              </li>
              <li>
                <AppLink href='#about-me'>About Me</AppLink>
              </li>
              <li>
                <AppLink href='#my-work'>My Work</AppLink>
              </li>
              <li>
                <AppLink href='#contact'>Contact</AppLink>
              </li>
            </ul>
          </nav>
          <div className='flex items-center gap-2'>
            <LightDarkToggle />
            <MobileSideBar />
          </div>
        </div>
      </header>
    </div>
  );
}
