'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { primaryNav, site } from '@/content/data/site';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);
  const panel = (
    <div
      id="menu-mobile"
      aria-hidden={!open}
      className={`fixed inset-0 z-[80] flex flex-col bg-espresso text-band-ink transition-transform duration-500 ease-out motion-reduce:transition-none lg:hidden ${
        open ? 'translate-y-0' : 'pointer-events-none -translate-y-full'
      }`}
    >
      <div className="flex h-[70px] items-center justify-between border-b border-band-line px-5 md:px-8">
        <Link href="#top" onClick={close} className="flex items-center gap-3" aria-label="HAI Fashion">
          <Image src="/images/hai-fashion-veston-logo.webp" alt="Logo HAI Fashion Veston" width={44} height={44} className="h-11 w-11 object-cover" />
          <span className="text-[11px] font-medium uppercase tracking-[0.2em]">HAI Fashion</span>
        </Link>
        <button type="button" onClick={close} className="min-h-[44px] border-b border-band-ink text-[10px] uppercase tracking-[0.2em]">Đóng</button>
      </div>

      <nav className="flex flex-1 flex-col justify-center px-5 py-8 md:px-8" aria-label="Điều hướng mobile">
        {primaryNav.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={close}
            className="flex items-baseline gap-5 border-b border-band-line py-3.5 font-serif text-[clamp(30px,8vw,46px)] font-normal leading-none"
          >
            <span className="w-5 font-sans text-[9px] tracking-[0.16em] text-band-soft">0{index + 1}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="grid grid-cols-2 border-t border-band-line">
        <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="flex min-h-[64px] items-center justify-center border-r border-band-line text-[10px] uppercase tracking-[0.16em]">Gọi {site.phone}</a>
        <a href={site.zaloUrl} target="_blank" rel="noreferrer" className="flex min-h-[64px] items-center justify-center text-[10px] uppercase tracking-[0.16em]">Nhắn Zalo</a>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="menu-mobile"
        className="inline-flex min-h-[44px] items-center border-b border-espresso text-[10px] font-medium uppercase tracking-[0.18em] text-espresso lg:hidden"
      >
        Menu
      </button>
      {mounted ? createPortal(panel, document.body) : null}
    </>
  );
}
