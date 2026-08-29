import Image from 'next/image';
import Link from 'next/link';
import { footerNav, site } from '@/content/data/site';

export function Footer() {
  return (
    <footer className="bg-espresso text-band-ink">
      <div className="mx-auto max-w-wide px-5 pb-8 pt-16 md:px-8 md:pt-20 lg:px-10 xl:px-14">
        <div className="grid gap-12 border-b border-band-line pb-14 md:grid-cols-[1.25fr_1fr_1fr] lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="#top" className="inline-flex items-center gap-4" aria-label="HAI Fashion">
              <Image src="/images/hai-fashion-veston-logo.webp" alt="Logo HAI Fashion Veston" width={72} height={72} className="h-[72px] w-[72px] object-cover" />
              <span>
                <strong className="block text-[13px] font-medium uppercase tracking-[0.24em]">HAI Fashion</strong>
                <small className="mt-2 block text-[9px] uppercase tracking-[0.2em] text-band-soft">Veston may đo</small>
              </span>
            </Link>
            <p className="mt-6 max-w-[40ch] text-sm leading-7 text-band-soft">{site.positioning}</p>
          </div>

          {footerNav.map((column) => (
            <div key={column.heading}>
              <h2 className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-bronze">{column.heading}</h2>
              <div className="mt-4 flex flex-col">
                {column.items.map((item) => (
                  <Link key={item.label} href={item.href} className="inline-flex min-h-[38px] items-center text-sm text-band-soft transition-colors hover:text-band-ink">{item.label}</Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h2 className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-bronze">Liên hệ</h2>
            <p className="mt-5 text-sm leading-7 text-band-soft">{site.address.street}<br />{site.address.ward}, {site.address.city}</p>
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="mt-4 block font-serif text-2xl text-band-ink transition-colors hover:text-bronze">{site.phone}</a>
            <a href={site.zaloUrl} target="_blank" rel="noreferrer" className="editorial-link mt-3 text-band-ink">Nhắn HAI Fashion qua Zalo</a>
            <a href={site.facebookUrl} target="_blank" rel="noreferrer" className="editorial-link mt-3 text-band-ink">Facebook HAI Fashion</a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[10px] uppercase tracking-[0.12em] text-band-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© HAI Fashion</p>
          <p>Executive tailoring &amp; corporate workwear</p>
        </div>
      </div>
    </footer>
  );
}
