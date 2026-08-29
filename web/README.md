# web/ — Source code website HAI Fashion

Next.js 15 (App Router) + TypeScript + Tailwind. Quy ước code: xem `../docs/07-tech-stack.md`.

## Chạy trên máy

```bash
npm install
npm run dev      # http://localhost:3000
```

Lệnh khác: `npm run build` (bắt buộc pass trước khi báo xong) · `npm run start` · `npm run lint`.

## Đang có gì

- Trang chủ editorial 10 section trong `src/components/home/EditorialHome.tsx`
- Header sticky có logo thật, menu mobile toàn màn hình, footer
- Ảnh thật của HAI Fashion (16 file) qua `next/image`, tự sinh WebP/AVIF theo kích thước màn hình
- Trang 404, `robots.txt`, `sitemap.xml`, schema JSON-LD (ClothingStore + sameAs Facebook)
- Form liên hệ dẫn về Zalo

## Chưa có

- Các trang con: `/nu`, `/nam`, `/doanh-nghiep`, `/bo-suu-tap`, `/tay-nghe`, `/journal`
- Bài viết Journal thật (hiện là tiêu đề dự kiến)
- Giờ mở cửa — chưa được xác nhận nên cố ý để trống

## Bản demo và bản chạy thật

`src/lib/site-mode.ts` quyết định bằng biến `NEXT_PUBLIC_SITE_MODE`:

| Giá trị | Kết quả |
|---|---|
| không đặt (mặc định) | **Bản demo** — `robots.txt` trả `Disallow: /`, metadata `noindex` |
| `production` | Bản thật — cho Google index bình thường |

Mặc định nghiêng về an toàn: quên cấu hình thì cùng lắm không được index, chứ không lỡ
để một bản chưa hoàn thiện nằm công khai trên Google.

⚠️ **Website hiện đang ở chế độ demo** nên Google chưa index. Muốn mở thì đặt biến đó
trong Vercel → Settings → Environment Variables.

## Dữ liệu chưa xác nhận

Mọi dữ liệu chưa được HAI Fashion xác nhận đều để trống hoặc đánh dấu. Liệt kê toàn bộ:

```bash
grep -rn "TODO(HAI)" src/
```

⚠️ Không được xoá dấu TODO bằng cách điền số liệu tự nghĩ ra — xem `../docs/06-data-rules.md`.

## Design token

`tailwind.config.ts` là **nguồn duy nhất**. Bảng màu editorial: nền kem ấm `#F2EEE7`,
chữ `#242827`, nhấn nâu đồng `#866442`, espresso `#241A10`, navy `#102B35`.

Chữ: **Cormorant Garamond** cho tiêu đề, **Be Vietnam Pro** cho nội dung (đủ dấu tiếng Việt).

Không hard-code màu trong component. Thấy `text-[#242827]` là sai.
