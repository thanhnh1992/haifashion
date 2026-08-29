# HAI FASHION — WEBSITE PROJECT

Thư mục dự án website mới cho **HAI Fashion** — thương hiệu may đo thời trang công sở tại TP.HCM.

> Đây là thư mục **nguồn sự thật (source of truth)** của dự án. Mọi AI (Claude Code, Codex, ChatGPT…) và mọi người tham gia đều phải đọc tài liệu ở đây trước khi làm bất cứ việc gì.

---

## 1. Trạng thái dự án

| Hạng mục | Trạng thái |
|---|---|
| Tài liệu định hướng | ✅ Đã có (thư mục `docs/`) |
| Sitemap | ✅ Đã đề xuất — **chờ chốt** |
| Homepage wireframe | ✅ Đã đề xuất — **chờ chốt** |
| Design system | ✅ Màu đã chốt 28/08/2026 (bảng màu monamie.vn) — font Be Vietnam Pro đề xuất, **chờ file logo gốc** |
| Source code | ✅ Đã khởi tạo — `web/` (Next.js + TypeScript + Tailwind), trang chủ 10 section, build pass |
| Assets (ảnh thật) | ⬜ Chưa có — mọi vị trí ảnh đang là khung chờ, xem `docs/09-assets-checklist.md` |
| Dữ liệu thật cần xác nhận | ⚠️ Xem `docs/06-data-rules.md` |

> Product Owner đã duyệt bắt đầu Phase 5 ngày 28/08/2026. Sitemap và wireframe vẫn ở trạng thái đề xuất — mọi trang con phải được chốt trước khi dựng thêm.

---

## 2. Cấu trúc thư mục

```
E:\Projects\hai-fashion\
├── README.md                     ← file này: điểm vào dự án
├── CLAUDE.md                     ← luật riêng cho Claude Code
├── AGENTS.md                     ← luật chung cho MỌI AI worker (Codex, Claude, khác)
├── docs\
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
├── assets\                       ← ảnh gốc chưa xử lý (chưa vào code)
└── web\                          ← source code Next.js (tạo ở Phase 5)
```

---

## 3. Đọc theo thứ tự nào

**Nếu bạn là AI vừa được giao việc:**

1. `AGENTS.md` — luật bắt buộc, đọc hết.
2. `docs/00-master-brief.md` — hiểu dự án là gì.
3. `docs/06-data-rules.md` — hiểu cái gì **không được bịa**.
4. File `docs/` liên quan trực tiếp tới nhiệm vụ được giao.
5. Nếu là task code: thêm `docs/07-tech-stack.md` + `docs/04-design-system.md`.

**Nếu bạn là người mới tham gia dự án:** đọc `docs/00` → `docs/01` → `docs/02` → `docs/03`.

---

## 4. Ai quyết định

**Nguyễn Hoàng Thanh** là Product Owner và người duyệt cuối cùng.

AI là công nhân thi công. AI **không** được:

- tự đổi định hướng thương hiệu,
- tự đổi sitemap đã chốt,
- tự viết lại toàn bộ website,
- tự bịa dữ liệu về HAI Fashion.

Nếu AI thấy yêu cầu có vấn đề → **nói thẳng, giải thích, đề xuất**, rồi chờ duyệt.

---

## 5. North Star

> Mỗi quyết định thiết kế phải trả lời được: **Nó có giúp HAI Fashion thể hiện tốt hơn năng lực may đo phong thái cá nhân và hình ảnh doanh nghiệp hay không?**
>
> Nếu không → không thêm.
