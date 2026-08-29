import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center gap-6 py-section">
      <h1 className="text-h1 font-extralight">Không tìm thấy trang này.</h1>
      <p className="max-w-prose text-body text-ink-soft">
        Đường dẫn có thể đã thay đổi. Quay lại trang chủ để xem các dịch vụ may đo của HAI Fashion.
      </p>
      <Button href="/">Về trang chủ</Button>
    </Container>
  );
}
