import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
 * Nút chính = nền đen, chữ trắng; hover chuyển đỏ #C62828 (đúng cách monamie.vn
 * dùng --color_hover). Muốn nút đỏ ngay từ trạng thái mặc định như monamie:
 * đổi `bg-ink` -> `bg-accent` và `border-ink` -> `border-accent` ở biến `primary`.
 * Vùng bấm tối thiểu 44×44px — docs/04 mục 7.
 */
const base =
  'inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-md px-7 text-[15px] font-medium transition-colors duration-200 ease-out';

const variants = {
  primary: 'bg-ink text-ground border border-ink hover:bg-accent hover:border-accent',
  ghost: 'bg-transparent text-ink border border-line-strong hover:border-ink',
  onDark: 'bg-band-ink text-ink border border-band-ink hover:bg-accent-light hover:border-accent-light hover:text-ink',
  ghostOnDark: 'bg-transparent text-band-ink border border-white/40 hover:border-band-ink',
} as const;

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  /** Chỉ truyền từ client component (ví dụ đóng menu mobile sau khi bấm). */
  onClick?: () => void;
  className?: string;
};

export function Button({ href, children, variant = 'primary', className, onClick }: Props) {
  return (
    <Link href={href} onClick={onClick} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
