'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 w-full bg-slate-100 text-slate-600 shadow-md dark:bg-slate-900 dark:text-slate-400'>
      <div className='mx-auto max-w-screen-xl px-6 py-4 text-center'>
        <p className='flex items-center justify-center gap-2 text-sm'>
          © {new Date().getFullYear()}
          <Image src='/favicon.png' alt='TaskLite logo' width={20} height={20} priority />
          TaskLite.
        </p>
        <p className='mt-2 flex items-center justify-center gap-2 text-sm'>
          Desarrollo creado para el challenge de Oh! Gift Card
        </p>
      </div>
    </footer>
  );
}
