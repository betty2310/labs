import Link from 'next/link';
import Image from 'next/image';
import type { FC } from 'react';

import AppIcon from '@/public/icon.svg';
import type { CurrentUserProps } from '@/types';

const Header: FC<CurrentUserProps> = () => {
  return (
    <header className="sticky z-10 top-0 flex h-16 items-center gap-4 border-b bg-secondary px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <div className="rounded-lg overflow-hidden">
          <Image
            src={AppIcon}
            alt="Acme Inc"
            width={45}
            height={45}
            className="rounded-lg"
          />
        </div>
        <Link
          href="/"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </Link>
      </nav>
    </header>
  );
};

export default Header;
