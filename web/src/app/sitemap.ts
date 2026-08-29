import type { MetadataRoute } from 'next';
import { site } from '@/content/data/site';

/** TODO(HAI): bổ sung /nu, /nam, /doanh-nghiep… khi các trang con được dựng (docs/02-sitemap.md). */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
