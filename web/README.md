# web/ — Source code website HAI Fashion

Next.js (App Router) + TypeScript + Tailwind. Quy ước code: xem `../docs/07-tech-stack.md`.

## Chạy trên máy

```bash
cd web
npm install
npm run dev      # mở http://localhost:3000
```

Lệnh khác: `npm run build` (bắt buộc pass trước khi báo xong) · `npm run start` · `npm run lint`.

## Đang có gì

- Trang chủ đầy đủ 10 section theo `../docs/03-homepage-wireframe.md`
- Header sticky + menu mobile toàn màn hình
- Footer, trang 404, `robots.txt`, `sitemap.xml`, schema JSON-LD (ClothingStore)

## Chưa có

- Các trang con: `/nu`, `/nam`, `/doanh-nghiep`, `/bo-suu-tap`, `/tay-nghe`, `/journal`, `/dat-lich`, `/lien-he`
- Form đặt lịch (`docs/07` mục 7) — chưa biết dữ liệu gửi về đâu
- **Ảnh thật.** Mọi vị trí ảnh đang là khung gạch chéo `ShotFrame` ghi rõ cần chụp gì.

## Hai chỗ phải sửa khi có tài sản thương hiệu

| Cần gì | Sửa ở đâu |
|---|---|
| File logo gốc (SVG) | `src/components/layout/Wordmark.tsx` — hiện là wordmark chữ tạm |
| Ảnh thật | thay `<ShotFrame />` bằng `<Image />` theo `docs/07` mục 5 |

## Dữ liệu chưa xác nhận

Mọi chỗ chưa có dữ liệu thật đều hiện một ô vàng `TodoFlag` ngay trên giao diện, cố ý để
không ai quên. Liệt kê toàn bộ:

```bash
grep -rn "TODO(HAI)" src/
```

⚠️ Không được xoá ô TODO bằng cách điền số liệu tự nghĩ ra — xem `../docs/06-data-rules.md`.

## Design token

`tailwind.config.ts` là **nguồn duy nhất**. Bảng màu lấy từ monamie.vn theo yêu cầu
Product Owner: đen `#000000` · nền `#EDF1F5` · đỏ nhấn `#C62828` · chữ phụ `#303030`.

Đỏ chỉ dùng làm màu nhấn (eyebrow, số thứ tự, hover) ≤ 5% diện tích. Nút chính nền đen,
hover chuyển đỏ. Muốn nút đỏ ngay từ đầu như monamie: đổi `bg-ink` → `bg-accent` trong
`src/components/ui/Button.tsx`.

Không hard-code màu trong component. Thấy `text-[#303030]` là sai.
