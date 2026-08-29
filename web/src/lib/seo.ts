import type { Metadata } from 'next';
import { site } from '@/content/data/site';
import { isDemo } from '@/lib/site-mode';

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
};

/** Helper tạo metadata cho từng trang. Mỗi page.tsx phải có metadata riêng — docs/07 mục 6. */
export function pageMetadata({ title, description, path = '/' }: PageMetaInput): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: 'vi_VN',
      type: 'website',
      // TODO(HAI): bổ sung ảnh Open Graph 1200×630 khi có ảnh thật
    },
    // Bản demo không cho index — xem src/lib/site-mode.ts
    robots: isDemo ? { index: false, follow: false } : { index: true, follow: true },
  };
}
