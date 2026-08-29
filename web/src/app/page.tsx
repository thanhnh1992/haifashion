import { EditorialHome } from '@/components/home/EditorialHome';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'HAI Fashion — May đo vest & thời trang công sở tại TP.HCM',
  description:
    'May đo vest và thời trang công sở cho nữ quản lý, nam doanh nhân và đội ngũ doanh nghiệp tại TP.HCM. Cắt theo vóc dáng thật và môi trường làm việc thật.',
  path: '/',
});

export default function HomePage() {
  return <EditorialHome />;
}
