type Props = { children: React.ReactNode };

/**
 * Cờ đánh dấu dữ liệu chưa được HAI Fashion xác nhận — docs/06-data-rules.md.
 * ⚠️ Phải xoá hết trước khi website chạy thật. Tìm bằng: grep -r "TodoFlag" src/
 */
export function TodoFlag({ children }: Props) {
  return (
    <span className="inline-flex items-center gap-2 rounded-sm bg-flag-bg px-2.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-flag">
      {children}
    </span>
  );
}
