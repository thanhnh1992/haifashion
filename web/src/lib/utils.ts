/** Ghép class có điều kiện. Đủ dùng cho dự án này — không cần cài clsx (docs/07 mục 4.6). */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
