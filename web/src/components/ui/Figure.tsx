import { getImageProps } from 'next/image';
import { cn } from '@/lib/utils';

const ratios = {
  '1:1': 'aspect-square',
  '3:2': 'aspect-[3/2]',
  '3:4': 'aspect-[3/4]',
  '4:5': 'aspect-[4/5]',
  hero: 'aspect-[4/5] md:aspect-video',
} as const;

export type FigureImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Canh khung ảnh vào mặt người — bắt buộc với ảnh có người (AGENTS.md mục 4). */
  position?: string;
};

type Props = {
  image: FigureImage;
  mobileImage?: FigureImage;
  ratio?: keyof typeof ratios;
  /** Chỉ bật cho ảnh hero. Mọi ảnh khác lazy-load. */
  priority?: boolean;
  sizes: string;
  onDark?: boolean;
  className?: string;
};

/**
 * Khung ảnh của trang. Dùng next/image để tự sinh WebP/AVIF theo đúng kích thước
 * màn hình — xem docs/07 mục 5.
 *
 * ⚠️ TODO(HAI): toàn bộ ảnh đang trỏ vào /images/placeholder/ là ảnh stock dùng tạm
 * để duyệt bố cục, KHÔNG phải ảnh HAI Fashion. Khi có ảnh thật: đổi src sang
 * /images/<nhóm>/, xoá thư mục placeholder, và bỏ dòng TODO này.
 * Nguồn & tình trạng quyền: assets/CREDITS.md
 */
export function Figure({
  image,
  mobileImage,
  ratio = '3:4',
  priority = false,
  sizes,
  onDark,
  className,
}: Props) {
  const desktopProps = getImageProps({
    src: image.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
    sizes,
    priority,
    className: 'h-full w-full object-cover',
    style: { objectPosition: image.position ?? '50% 50%' },
  });
  const mobileProps = mobileImage
    ? getImageProps({
        src: mobileImage.src,
        alt: mobileImage.alt,
        width: mobileImage.width,
        height: mobileImage.height,
        sizes,
        priority,
        className: 'h-full w-full object-cover',
        style: { objectPosition: mobileImage.position ?? '50% 50%' },
      })
    : null;

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-sm',
        onDark ? 'bg-band-surface' : 'bg-surface-2',
        ratios[ratio],
        className,
      )}
    >
      <picture className="block h-full w-full">
        {mobileProps ? (
          <source
            media="(max-width: 767px)"
            srcSet={mobileProps.props.srcSet}
            sizes={mobileProps.props.sizes}
          />
        ) : null}
        <img {...desktopProps.props} alt={image.alt} />
      </picture>
    </div>
  );
}
