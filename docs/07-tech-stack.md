# 07 — TECH STACK & QUY ƯỚC CODE

---

## 1. Stack đã chốt

| Thành phần | Lựa chọn | Lý do |
|---|---|---|
| Framework | **Next.js (App Router)** | Server render tốt cho SEO + AI Search, tối ưu ảnh sẵn có, mở rộng blog dễ |
| Ngôn ngữ | **TypeScript** | Bắt lỗi sớm, AI khác đọc code dễ hiểu hơn |
| Styling | **Tailwind CSS** | Design token tập trung, không rải style rời rạc |
| Ảnh | **next/image** | AVIF/WebP, responsive, lazy-load, CLS thấp |
| Font | **next/font** (tự host) | Không phụ thuộc Google Fonts, không nhấp nháy font |
| Nội dung Journal | **MDX** (file trong repo) — giai đoạn đầu | Không cần CMS ngay; chuyển sang CMS sau nếu cần |
| Deploy | **Vercel** (đề xuất) | Phù hợp Next.js nhất |
| Package manager | **npm** | ⚠️ Đã chọn thì **không đổi** sang pnpm/yarn giữa chừng |

⚠️ **Không đổi framework, không đổi package manager, không thêm CMS/thư viện UI** nếu chưa được Product Owner duyệt.

---

## 2. Cấu trúc thư mục code

```
web/
├── src/
│   ├── app/
│   │   ├── layout.tsx              root layout: font, header, footer, Organization schema
│   │   ├── page.tsx                trang chủ
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── nu/page.tsx
│   │   ├── nam/page.tsx
│   │   ├── doanh-nghiep/
│   │   ├── bo-suu-tap/
│   │   ├── tay-nghe/
│   │   ├── khach-hang/
│   │   ├── journal/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── dat-lich/
│   │   ├── lien-he/
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── layout/                 Header, Footer, MobileMenu, Container
│   │   ├── ui/                     Button, Card, Eyebrow, SectionHeading, Reveal
│   │   ├── home/                   Hero, AudienceCards, WhyHai, RealClients,
│   │   │                           CorporateTailoring, Process, FabricCraft,
│   │   │                           PortfolioPreview, JournalPreview, ContactCTA
│   │   └── shared/                 ImageCard, Carousel, Breadcrumb, SchemaJsonLd
│   │
│   ├── content/
│   │   ├── journal/                *.mdx
│   │   └── data/                   collections.ts, clients.ts, services.ts
│   │
│   └── lib/
│       ├── seo.ts                  helper tạo metadata
│       ├── schema.ts               helper JSON-LD
│       └── utils.ts
│
├── public/
│   └── images/
│       ├── hero/
│       ├── women/
│       ├── men/
│       ├── corporate/
│       ├── clients/
│       ├── craft/
│       ├── journal/
│       └── placeholder/            ⚠️ ảnh tạm, phải thay hết trước khi publish
│
├── tailwind.config.ts              ← nguồn duy nhất của design token
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 3. Quy ước đặt tên

| Loại | Quy ước | Ví dụ |
|---|---|---|
| Component file | PascalCase | `RealClients.tsx` |
| Component | PascalCase | `export function RealClients()` |
| Hàm / biến | camelCase | `getJournalPosts` |
| File nội dung MDX | kebab-case | `vest-nu-cong-so-chon-form-nao.mdx` |
| File ảnh | kebab-case, mô tả nội dung | `vest-nu-hop-lanh-dao-01.jpg` |
| Route | kebab-case, tiếng Việt không dấu | `/doanh-nghiep/dong-phuc-vest` |
| CSS class | Tailwind utility + token | `bg-paper-warm text-ink-soft` |

⚠️ Không đặt tên ảnh kiểu `IMG_2841.jpg`, `anh1.jpg`, `final_final_v2.jpg`.

---

## 4. Luật viết component

1. **Server Component là mặc định.** Chỉ thêm `"use client"` khi thực sự cần state, event handler, hoặc API trình duyệt. Carousel và mobile menu là client; các section tĩnh thì không.
2. **Một section = một component**, đặt trong `components/home/`. Không viết cả homepage trong `page.tsx`.
3. **Nội dung tách khỏi giao diện.** Danh sách card, danh sách case, danh sách bước quy trình → để trong `content/data/*.ts`, không hard-code giữa JSX. Sửa nội dung không phải sửa layout.
4. **Không hard-code style.** Dùng token Tailwind (xem `docs/04`). Thấy `text-[#4A4A4A]` hay `mt-[87px]` là sai.
5. **Reuse trước khi tạo mới.** Cần một card ảnh → dùng `ImageCard` có sẵn, không tạo `ImageCard2`.
6. **Không thêm dependency** nếu Next.js + Tailwind + CSS thuần làm được. Reveal on scroll → IntersectionObserver, không cần framer-motion. Carousel → CSS scroll-snap, không cần swiper.

---

## 5. Ảnh — quy tắc bắt buộc

```tsx
// Ảnh hero (above the fold)
<Image src="/images/hero/hero-women-01.jpg" alt="Khách hàng nữ trong bộ vest may đo HAI Fashion"
       fill priority sizes="100vw" className="object-cover object-[50%_30%]" />

// Ảnh dưới fold
<Image src="/images/clients/client-01.jpg" alt="..." width={800} height={1000}
       sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
```

- `priority` **chỉ** cho ảnh hero. Mọi ảnh khác lazy (mặc định).
- Luôn có `sizes` khi dùng `fill` hoặc ảnh responsive.
- ⚠️ Ảnh có người: khai báo `object-position` canh vào mặt, kiểm tra ở 390px.
- `alt` mô tả nội dung thật, tiếng Việt. Ảnh trang trí thuần → `alt=""`.
- Ảnh nguồn: cạnh dài ≤ 2400px, < 500KB trước khi commit.

---

## 6. Metadata & schema

Mỗi `page.tsx` phải export `metadata` (hoặc `generateMetadata`) riêng — **không dùng chung**.

```tsx
export const metadata: Metadata = {
  title: 'Vest & thời trang công sở nữ may đo — HAI Fashion',
  description: '…140–160 ký tự…',
  alternates: { canonical: 'https://<domain>/nu' },
  openGraph: { /* … */ },
};
```

Schema JSON-LD qua helper `lib/schema.ts`. Xem điều kiện dùng từng loại schema ở `docs/05` mục 5.

⚠️ **Không** `Review` / `AggregateRating` giả.

---

## 7. Form (`/dat-lich`, `/lien-he`, form doanh nghiệp)

- Trường tối thiểu: Họ tên · Số điện thoại · Nhóm dịch vụ (Nữ/Nam/Doanh nghiệp) · Nội dung. **Không hỏi quá nhiều** — càng nhiều trường càng ít người gửi.
- Validate phía client **và** phía server.
- Có trạng thái rõ: đang gửi / thành công / lỗi. Không để người dùng bấm mà không biết gì xảy ra.
- Chống spam bằng honeypot hoặc rate limit — **không** dùng captcha nặng làm hỏng trải nghiệm.
- ⚠️ Nơi nhận dữ liệu form (email? Google Sheets? Zalo?) — `TODO(HAI)`, xem `docs/06`.
- Có form thu thập thông tin → phải có trang **Chính sách bảo mật**.

---

## 8. Lệnh chuẩn

```bash
npm install          # cài dependency
npm run dev          # chạy local
npm run build        # ⚠️ BẮT BUỘC pass trước khi báo xong
npm run start        # chạy bản build
npm run lint         # kiểm tra lint
```

---

## 9. Definition of Done cho một task code

- [ ] `npm run build` pass, không warning mới đáng kể
- [ ] `npm run lint` pass
- [ ] Console không có error mới
- [ ] Kiểm tra ở **390px · 768px · 1440px**
- [ ] Không có scroll ngang ở mọi breakpoint
- [ ] Không có dữ liệu bịa (đã tìm `TODO(HAI)` trong phần vừa sửa)
- [ ] Chỉ sửa đúng phạm vi được giao (`git diff` gọn, không file lạ)
- [ ] Báo cáo: **đã sửa gì / vì sao / ảnh hưởng đâu**

---

## 10. Những thứ KHÔNG được tự làm

- Đổi Next.js sang framework khác
- Đổi npm sang pnpm/yarn
- Thêm UI library (MUI, shadcn, Chakra…) mà không được duyệt
- Thêm CMS
- Đổi cấu trúc thư mục đã chốt
- Đổi URL đã publish (nếu buộc phải đổi → 301 + ghi log ở `docs/06`)
- Xóa hoặc rewrite component do AI/người khác viết mà không giải trình
- Chạy `npm audit fix --force` (có thể tự nâng major version và làm vỡ project)
