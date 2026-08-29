import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = {
  href: string;
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
};

/**
 * Link chữ + mũi tên, gạch chân mảnh — docs/04 mục 7.
 * Chiều cao tối thiểu 44px để bấm được bằng ngón tay
 * — AGENTS.md mục 4 yêu cầu tối thiểu 44×44px trên điện thoại.
 */
export function TextLink({ href, children, onDark = false, className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex min-h-[44px] items-center gap-2.5 border-b py-[11px] text-[14.5px] font-medium transition-colors duration-200',
        onDark
          ? 'border-band-line text-band-ink hover:border-accent-light hover:text-accent-light'
          : 'border-line-strong text-ink hover:border-accent hover:text-accent',
        className,
      )}
    >
      {children}
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
