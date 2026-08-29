/**
 * Bài viết Journal — hiện là danh sách tiêu đề dự kiến theo docs/00 mục 11.
 * TODO(HAI): khi viết bài thật thì chuyển sang MDX trong src/content/journal/ (docs/07 mục 1).
 */

export type JournalPreviewItem = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
};

export const journalPreview: JournalPreviewItem[] = [
  {
    id: 'vest-nu-chon-form',
    category: 'Style Guide',
    title: 'Vest nữ công sở nên chọn form nào?',
    excerpt: 'Ba dáng phổ biến và ai hợp dáng nào.',
  },
  {
    id: 'may-do-khac-may-san',
    category: 'Kiến thức may đo',
    title: 'Suit may đo khác suit may sẵn như thế nào?',
    excerpt: 'Nhìn vào đâu để biết một bộ được cắt riêng.',
  },
  {
    id: 'dong-phuc-doi-sales',
    category: 'Đồng phục doanh nghiệp',
    title: 'Cách xây dựng đồng phục cho đội sales',
    excerpt: 'Bắt đầu từ nhận diện thương hiệu, không phải từ mẫu áo.',
  },
];
