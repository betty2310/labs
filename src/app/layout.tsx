import '@/styles/globals.css';

import { Inter as FontSans } from 'next/font/google';

import MainFooter from '@/components/Footer';
import Header from '@/components/Header';
import type { ChildrenProps } from '@/types';
import { cn } from '@/lib/utils';

export const metadata = {
  description: 'All information about labs for student',
  keywords:
    'next, starter, typescript, tailwind css, prettier, eslint, husky, seo',
  title: 'Labs',
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default async function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          {/* Content section that grows to fill available space */}
          <section className="flex-1">{children}</section>
          <MainFooter />
        </div>
      </body>
    </html>
  );
}
