'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { primaryNav } from '@/content/data/site';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-ground/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-header' : ''
      }`}
    >
      <div className="mx-auto flex h-[70px] max-w-wide items-center justify-between gap-5 px-5 md:px-8 lg:h-[82px] lg:px-10 xl:px-14">
        <Link href="#top" className="flex min-h-[44px] items-center gap-3" aria-label="HAI Fashion — về đầu trang">
          <Image
            src="/images/hai-fashion-veston-logo.webp"
            alt="Logo HAI Fashion Veston"
            width={52}
            height={52}
            priority
            className="h-11 w-11 object-cover lg:h-[52px] lg:w-[52px]"
          />
          <span className="hidden leading-none sm:block">
            <strong className="block text-[13px] font-medium uppercase tracking-[0.22em] text-espresso">HAI Fashion</strong>
            <small className="mt-1.5 block text-[8px] uppercase tracking-[0.25em] text-ink-muted">Veston may đo</small>
          </span>
        </Link>

        <nav className="hidden items-stretch self-stretch lg:flex" aria-label="Điều hướng chính">
          {primaryNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative inline-flex min-h-[44px] items-center px-4 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-soft transition-colors duration-300 hover:text-espresso xl:px-5"
            >
              {item.label}
              <span className="absolute inset-x-4 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 xl:inset-x-5" />
            </Link>
          ))}
        </nav>

        <Link
          href="#lien-he"
          className="hidden min-h-[46px] items-center justify-center border border-espresso bg-espresso px-6 text-[10px] font-medium uppercase tracking-[0.18em] text-ground transition-colors duration-300 hover:bg-accent lg:inline-flex"
        >
          Nhận tư vấn
        </Link>

        <MobileMenu />
      </div>
    </header>
  );
}
