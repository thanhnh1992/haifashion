import { site } from '@/content/data/site';

/**
 * JSON-LD. ⚠️ docs/05 + docs/07: KHÔNG tạo Review / AggregateRating giả.
 * LocalBusiness chỉ khai báo trường đã có dữ liệu thật; thiếu thì bỏ hẳn trường đó,
 * không điền giá trị đoán.
 */
export function organizationSchema() {
  const address = {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.ward,
    addressRegion: site.address.city,
    addressCountry: 'VN',
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: site.name,
    description: site.positioning,
    url: site.url,
    address,
    ...(site.phone ? { telephone: site.phone } : {}),
    ...(site.openingHours ? { openingHours: site.openingHours } : {}),
    // Trang mạng xã hội chính thức đã được xác nhận
    ...(site.facebookUrl ? { sameAs: [site.facebookUrl] } : {}),
  };
}
