import '@/styles/globals.css';

import { Inter } from 'next/font/google';

import MainFooter from '@/components/Footer';
import Header from '@/components/Header';
import type { ChildrenProps } from '@/types';

export const metadata = {
  description: 'All information about labs for student',
  keywords:
    'next, starter, typescript, tailwind css, prettier, eslint, husky, seo',
  title: 'Labs',
};
const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" />
      </head>
      <body className={inter.className}>
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
