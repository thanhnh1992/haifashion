import type { Metadata } from 'next';
import { Be_Vietnam_Pro, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SchemaJsonLd } from '@/components/shared/SchemaJsonLd';
import { organizationSchema } from '@/lib/schema';
import { site } from '@/content/data/site';

/** Be Vietnam Pro: do người Việt thiết kế, đủ dấu tiếng Việt — docs/04 mục 2. */
const beVietnam = Be_Vietnam_Pro({
  subsets: ['vietnamese', 'latin'],
  weight: ['200', '300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-be-vietnam',
});

/** Serif editorial cho headline thời trang, có đầy đủ dấu tiếng Việt. */
const cormorant = Cormorant_Garamond({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'HAI Fashion — May đo vest & thời trang công sở tại TP.HCM',
    template: '%s — HAI Fashion',
  },
  description: site.positioning,
  icons: {
    icon: '/images/hai-fashion-veston-logo.webp',
    apple: '/images/hai-fashion-veston-logo.webp',
  },
  openGraph: {
    title: 'HAI Fashion — May đo vest & thời trang công sở tại TP.HCM',
    description: site.positioning,
    type: 'website',
    locale: 'vi_VN',
    images: ['/images/hai-fashion-hero-may-do.webp'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${beVietnam.variable} ${cormorant.variable}`}>
      <body>
        {/* Không có JavaScript thì hiệu ứng fade sẽ không chạy — buộc mọi nội dung hiện ra,
            tránh trang trắng với người tắt JS và với trình thu thập dữ liệu không chạy JS. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: '.reveal{opacity:1 !important;transform:none !important}',
            }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <SchemaJsonLd schema={organizationSchema()} />
      </body>
    </html>
  );
}
