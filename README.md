# HAI FASHION — WEBSITE PROJECT

Thư mục dự án website mới cho **HAI Fashion** — thương hiệu may đo thời trang công sở tại TP.HCM.

> Đây là thư mục **nguồn sự thật (source of truth)** của dự án. Mọi AI (Claude Code, Codex, ChatGPT…) và mọi người tham gia đều phải đọc tài liệu ở đây trước khi làm bất cứ việc gì.

---

## 1. Trạng thái dự án

| Hạng mục | Trạng thái |
|---|---|
| Tài liệu định hướng | ✅ Đã có — thư mục `docs/` |
| Sitemap | ✅ Đã đề xuất — **chờ chốt** |
| Trang chủ | ✅ Đã dựng xong. Thiết kế lại 29/08/2026 — xem `design-qa.md` |
| Design system | ✅ Đã chốt — nền kem ấm, espresso, nâu đồng, navy. Chữ Cormorant Garamond + Be Vietnam Pro |
| Logo | ✅ Đã có file thật — `web/public/images/hai-fashion-veston-logo.webp` |
| Source code | ✅ `web/` — Next.js 15 + TypeScript + Tailwind. Build pass, lint sạch |
| Ảnh | ✅ 16 ảnh thật đang dùng. Ảnh stock đã xoá sạch |
| Liên hệ | ✅ 0903 535 138 (điện thoại + Zalo) · [Facebook](https://www.facebook.com/haifashion.vn/) |
| Đang chạy | ✅ [hai-fashion-website.vercel.app](https://hai-fashion-website.vercel.app/) |
| Dữ liệu chưa xác nhận | ⚠️ Giờ mở cửa · tên/chức danh khách hàng · thời gian may · giá · thương hiệu vải. Xem `docs/06-data-rules.md` |

---

## 2. Cấu trúc thư mục

```
hai-fashion/
├── README.md                     ← file này: điểm vào dự án
├── CLAUDE.md                     ← luật riêng cho Claude Code
├── AGENTS.md                     ← luật chung cho MỌI AI worker (Codex, Claude, khác)
├── design-qa.md                  ← báo cáo QA đợt thiết kế lại 29/08/2026
├── demo-giao-dien.html           ← bản dựng tay đầu tiên, giữ làm mốc so sánh
├── docs/
│   ├── 00-master-brief.md        ← brief gốc đã chốt (KHÔNG tự sửa)
│   ├── 01-brand-positioning.md   ← định vị, tone, cảm xúc thiết kế
│   ├── 02-sitemap.md             ← cấu trúc trang + URL + metadata
│   ├── 03-homepage-wireframe.md  ← wireframe homepage desktop + mobile
│   ├── 04-design-system.md       ← typography, spacing, màu, component
│   ├── 05-content-seo.md         ← content pillar, local SEO, technical SEO
│   ├── 06-data-rules.md          ← nguyên tắc dữ liệu + bảng TODO dữ liệu thật
│   ├── 07-tech-stack.md          ← Next.js + Tailwind, quy ước code
│   ├── 08-workflow-ai.md         ← quy trình làm việc, git, prompt mẫu
│   └── 09-assets-checklist.md    ← danh sách ảnh cần chuẩn bị
├── assets/
│   └── incoming/                 ← ảnh gốc HAI Fashion cung cấp, chưa xử lý
├── audit/                        ← ảnh chụp màn hình QA theo từng đợt
└── web/                          ← source code Next.js
    ├── src/app/                  ← route, layout, robots, sitemap
    ├── src/components/           ← layout/ · ui/ · home/EditorialHome.tsx
    ├── src/content/data/         ← nội dung tách khỏi giao diện
    ├── src/lib/                  ← seo, schema, site-mode, utils
    ├── public/images/            ← 16 ảnh thật + logo
    └── tailwind.config.ts        ← NGUỒN DUY NHẤT của design token
```

---

## 3. Chạy dự án

```bash
cd web
npm install
npm run dev      # http://localhost:3000
```

Lệnh khác: `npm run build` (bắt buộc pass trước khi báo xong) · `npm run start` · `npm run lint`.

**Deploy:** Vercel, project `hai-fashion-website`, Root Directory là `web`.

---
## 4. Đọc theo thứ tự nào

**Nếu bạn là AI vừa được giao việc:**

1. `AGENTS.md` — luật bắt buộc, đọc hết.
2. `docs/00-master-brief.md` — hiểu dự án là gì.
3. `docs/06-data-rules.md` — hiểu cái gì **không được bịa**.
4. File `docs/` liên quan trực tiếp tới nhiệm vụ được giao.
5. Nếu là task code: thêm `docs/07-tech-stack.md` + `docs/04-design-system.md`.

**Nếu bạn là người mới tham gia dự án:** đọc `docs/00` → `docs/01` → `docs/02` → `docs/03`.

---

## 5. Ai quyết định

**Nguyễn Hoàng Thanh** là Product Owner và người duyệt cuối cùng.

AI là công nhân thi công. AI **không** được:

- tự đổi định hướng thương hiệu,
- tự đổi sitemap đã chốt,
- tự viết lại toàn bộ website,
- tự bịa dữ liệu về HAI Fashion.

Nếu AI thấy yêu cầu có vấn đề → **nói thẳng, giải thích, đề xuất**, rồi chờ duyệt.

---

## 6. North Star

> Mỗi quyết định thiết kế phải trả lời được: **Nó có giúp HAI Fashion thể hiện tốt hơn năng lực may đo phong thái cá nhân và hình ảnh doanh nghiệp hay không?**
>
> Nếu không → không thêm.
