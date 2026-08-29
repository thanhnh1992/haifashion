import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  /** Dùng trong section nền đen — đỏ nhạt hơn để đạt tương phản AA. */
  onDark?: boolean;
  className?: string;
};

export function Eyebrow({ children, onDark = false, className }: Props) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 text-eyebrow font-medium uppercase',
        onDark ? 'text-accent-light' : 'text-accent',
        className,
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className={cn('h-px max-w-[120px] flex-1', onDark ? 'bg-band-line' : 'bg-line')}
      />
    </p>
  );
}
