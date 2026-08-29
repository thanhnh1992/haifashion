import { Eyebrow } from '@/components/ui/Eyebrow';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow: string;
  title: string;
  body?: string;
  /** Link phụ nằm bên phải tiêu đề trên desktop (ví dụ "Xem toàn bộ →"). */
  aside?: React.ReactNode;
  onDark?: boolean;
  className?: string;
};

export function SectionHeading({ eyebrow, title, body, aside, onDark = false, className }: Props) {
  const head = (
    <div className="flex max-w-[62ch] flex-col gap-4">
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <h2 className={cn('text-h2 font-extralight', onDark && 'text-band-ink')}>{title}</h2>
      {body ? (
        <p className={cn('max-w-prose text-body', onDark ? 'text-band-soft' : 'text-ink-soft')}>
          {body}
        </p>
      ) : null}
    </div>
  );

  if (!aside) {
    return <div className={cn('mb-10', className)}>{head}</div>;
  }

  return (
    <div className={cn('mb-10 flex flex-wrap items-end justify-between gap-6', className)}>
      {head}
      {aside}
    </div>
  );
}
