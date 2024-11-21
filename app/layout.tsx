'use client';

import './styles/globals.css';
import { BoardProvider } from '@/app/context/board/boardContext';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/png' href='/favicon.png' />
      </head>
      <body className={`h-screen w-full`}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          <div className='mx-auto mt-24 p-6 md:max-w-screen-xl lg:p-16'>
            <BoardProvider>{children}</BoardProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
