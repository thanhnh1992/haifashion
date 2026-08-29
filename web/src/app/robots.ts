import type { MetadataRoute } from 'next';
import { site } from '@/content/data/site';
import { isDemo } from '@/lib/site-mode';

export default function robots(): MetadataRoute.Robots {
  // Bản demo: chặn toàn bộ máy tìm kiếm. Để Google index một bản đầy ảnh stock và
  // dữ liệu chưa xác nhận sẽ phá SEO của tên miền thật về sau.
  if (isDemo) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
