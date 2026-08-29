import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  /** `wide` cho khối ảnh tràn rộng (hero, dải portfolio) — docs/04 mục 4. */
  size?: 'default' | 'wide';
  className?: string;
};

export function Container({ children, size = 'default', className }: Props) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 md:px-8 lg:px-12',
        size === 'wide' ? 'max-w-wide' : 'max-w-container',
        className,
      )}
    >
      {children}
    </div>
  );
}
