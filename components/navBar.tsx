'use client';

import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';
import ThemeToggle from './theme';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='fixed left-0 top-0 z-50 w-full bg-slate-100 shadow-md dark:bg-slate-900'>
      <div className='mx-auto flex max-w-screen-xl items-center justify-between px-6 py-6'>
        <Image src='/oh.gif' alt='TaskLite logo' width={60} height={60} priority unoptimized />
        <h1 className='text-2xl font-bold text-slate-900 dark:text-slate-100'>TaskLite</h1>
        <div className='ml-auto flex items-center gap-4'>
          <Button className='flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 p-0 hover:bg-gray-700'>
            <a href='https://github.com/lucprz/oh-tasklite'>
              <GitHubLogoIcon />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
