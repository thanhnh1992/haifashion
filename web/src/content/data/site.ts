/**
 * Thông tin thương hiệu & điều hướng.
 * ⚠️ Chỉ điền dữ liệu đã được HAI Fashion xác nhận. Chưa có → để null + TODO(HAI).
 */

export const site = {
  name: 'HAI Fashion',
  tagline: 'Executive Tailoring',
  positioning: 'May đo phong thái chuyên nghiệp cho cá nhân và doanh nghiệp.',
  address: {
    street: '389B Cách Mạng Tháng Tám',
    ward: 'Hòa Hưng',
    city: 'TP.HCM',
  },
  phone: '0903 535 138',
  zaloUrl: 'https://zalo.me/0903535138',
  openingHours: null as string | null,
  email: null as string | null,
  facebookUrl: 'https://www.facebook.com/haifashion.vn/',
  // TODO(HAI): thay bằng domain thật trước khi publish
  url: 'https://hai-fashion.vn',
} as const;

export type NavItem = { label: string; href: string };

/**
 * Hiện chỉ có trang chủ, nên điều hướng trỏ tới các section trong trang.
 * TODO(HAI): đổi sang /nu, /nam, /doanh-nghiep… khi các trang con được dựng (docs/02-sitemap.md).
 */
export const primaryNav: NavItem[] = [
  { label: 'Dịch vụ', href: '#dich-vu' },
  { label: 'Bộ sưu tập', href: '#bo-suu-tap' },
  { label: 'Quy trình', href: '#quy-trinh' },
  { label: 'Mẫu nổi bật', href: '#mau-noi-bat' },
  { label: 'Liên hệ', href: '#lien-he' },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: 'Dịch vụ',
    items: [
      { label: 'Vest & công sở nữ', href: '#dich-vu' },
      { label: 'Vest & công sở nam', href: '#bo-suu-tap' },
      { label: 'Đồng phục doanh nghiệp', href: '#doi-tuong' },
      { label: 'Bộ sưu tập', href: '#bo-suu-tap' },
    ],
  },
  {
    heading: 'Tìm hiểu',
    items: [
      { label: 'Chất liệu & tay nghề', href: '#chi-tiet' },
      { label: 'Quy trình may đo', href: '#quy-trinh' },
      { label: 'Journal', href: '#journal' },
    ],
  },
];
