# 05 — NỘI DUNG, SEO & AI SEARCH

---

## 1. Cách viết — nguyên tắc

Cấu trúc mọi bài viết và mọi section:

```
user intent → answer → evidence → explanation → next action
```

Nghĩa là: **trả lời trước, giải thích sau.** Người đọc hỏi "vest nữ nên chọn form nào" thì câu đầu tiên phải trả lời, không phải mở bài.

### ❌ Cấm

- Mở bài sáo rỗng: *"Trong cuộc sống hiện đại ngày nay, trang phục công sở đóng vai trò vô cùng quan trọng…"*
- Lặp ý để tăng số chữ
- Câu dài lê thê không mang thông tin
- Nhồi từ khóa
- Đưa số liệu chưa xác nhận để nghe cho "chắc"
- Viết bài rác để lấy số lượng

### ✅ Nên

- Viết như một người thợ may có nghề đang tư vấn trực tiếp
- Cụ thể: nói về vai, eo, ve áo, chất liệu, môi trường sử dụng
- Dùng ví dụ tình huống thật ("đi gặp khách hàng", "họp lãnh đạo", "sự kiện công ty")
- Trung thực về giới hạn ("tuỳ vóc dáng", "cần thử mới biết")

### Cấu trúc bài viết chuẩn

```
H1: câu hỏi hoặc chủ đề rõ ràng
   → Đoạn tóm tắt 2–3 câu TRẢ LỜI NGAY câu hỏi chính (40–60 từ)
H2: Ý chính 1
H2: Ý chính 2
H2: Ý chính 3
H2: Câu hỏi thường gặp (3–5 câu hỏi ngắn, mỗi câu 2–4 câu trả lời)
   → CTA: Đặt lịch tư vấn / Tư vấn doanh nghiệp
```

Độ dài: **900–1500 từ** cho bài kiến thức. Đủ sâu để trả lời trọn vẹn, không kéo dài.

---

## 2. Ba content pillar

### Pillar 1 — Style Guide (dẫn về `/nu` và `/nam`)

- Vest nữ công sở nên chọn form nào?
- CEO nữ nên chọn vest màu gì?
- Vest nam đi gặp khách hàng nên chọn thế nào?
- Nữ dáng người tròn nên chọn blazer form gì?
- Vest công sở nên chọn màu nào để mặc được nhiều dịp?
- Mặc vest sao cho không bị "cứng" trong môi trường văn phòng trẻ?

### Pillar 2 — Tailoring Knowledge (dẫn về `/tay-nghe`)

- Suit may đo khác suit may sẵn như thế nào?
- Cách chọn chất liệu vest tại TP.HCM (khí hậu nóng ẩm)
- Khi nào chọn single-breasted, khi nào double-breasted?
- Vai áo vest: các kiểu và ai hợp kiểu nào
- Số đo cần lấy khi may vest — và vì sao từng số đo quan trọng
- Bảo quản và giặt vest may đo

### Pillar 3 — Corporate Uniform (dẫn về `/doanh-nghiep`)

- Cách xây dựng đồng phục cho đội sales
- Chọn vest doanh nghiệp theo nhận diện thương hiệu
- Quy trình may đồng phục vest số lượng lớn
- Đồng phục cho đội ngũ nhiều vóc dáng khác nhau — xử lý thế nào
- Đồng phục lãnh đạo và đồng phục nhân viên nên khác nhau ở đâu

**Thứ tự viết đề xuất:** 2 bài Pillar 1 (1 nữ, 1 nam) → 1 bài Pillar 3 → 1 bài Pillar 2 → lặp lại.

⚠️ Mỗi bài phải link về **ít nhất 1 hub** và có **1 CTA**.

---

## 3. Local SEO

**Lợi thế:** địa chỉ rõ ràng tại 389B Cách Mạng Tháng Tám, Hòa Hưng, TP.HCM.

### Bản đồ intent → trang đích

| Intent | Trang đích |
|---|---|
| may vest TP.HCM · may đo vest · tailor HCMC | `/` |
| may vest nữ TP.HCM · vest nữ công sở may đo | `/nu` |
| may vest nam TP.HCM | `/nam` |
| may đồng phục vest công ty · may vest doanh nghiệp | `/doanh-nghiep` |
| may vest Cách Mạng Tháng Tám · tiệm may vest quận 10/quận 3 | `/lien-he` + `/` |
| may vest công sở | `/nu` + `/nam` |

⚠️ **Một intent — một trang đích.** Hai trang cùng nhắm một từ khóa = tự cạnh tranh (keyword cannibalization).

⚠️ **Không keyword stuffing.** Từ khóa chính xuất hiện tự nhiên ở: title, H1, đoạn mở đầu, 1–2 lần trong thân bài. Hết.

### Việc ngoài website (nhắc Product Owner)

- Google Business Profile: đúng tên – địa chỉ – số điện thoại – giờ mở cửa, ảnh thật, cập nhật đều.
- **NAP** (Name, Address, Phone) phải **giống hệt nhau** trên website, Google Business, Facebook, Zalo OA.

---

## 4. Technical SEO — checklist bắt buộc

- [ ] Semantic HTML: `<header> <nav> <main> <section> <article> <footer>`
- [ ] **Đúng một `<h1>`** mỗi trang; H2/H3 theo thứ bậc, không nhảy cấp
- [ ] Metadata riêng cho **từng** trang (Next.js `metadata` export / `generateMetadata`)
- [ ] Open Graph + Twitter Card, có ảnh OG riêng cho trang chính (1200×630)
- [ ] Canonical URL cho mọi trang
- [ ] `sitemap.xml` tự sinh (`app/sitemap.ts`)
- [ ] `robots.txt` (`app/robots.ts`) — chặn `/api`, không chặn nhầm ảnh
- [ ] Breadcrumb cho mọi trang cấp 2 trở xuống (giao diện + schema)
- [ ] `alt` mô tả thật cho mọi ảnh có nội dung (`alt=""` cho ảnh trang trí)
- [ ] `lang="vi"` trên `<html>`
- [ ] Không có trang trùng nội dung, không có URL vừa có vừa không có `/` cuối
- [ ] 404 page tử tế, có link về các hub

---

## 5. Schema (JSON-LD)

| Schema | Đặt ở | Điều kiện |
|---|---|---|
| `Organization` | Toàn site (layout) | ✅ Dùng được ngay |
| `LocalBusiness` (`ClothingStore`) | `/` và `/lien-he` | ⚠️ **Chỉ khi** đã có: số điện thoại, giờ mở cửa, toạ độ chính xác — xem `docs/06` |
| `BreadcrumbList` | Mọi trang con | ✅ |
| `Article` / `BlogPosting` | Bài Journal | ✅ — **không** bịa `author` nếu chưa có tác giả thật |
| `FAQPage` | Trang/bài có mục FAQ | ✅ — chỉ khi FAQ hiển thị thật trên trang |
| `Service` | `/doanh-nghiep`, `/nu`, `/nam` | ✅ — không kèm `offers`/giá nếu chưa có giá |
| `Review` / `AggregateRating` | — | ❌ **CẤM TUYỆT ĐỐI** nếu chưa có review thật đã được xác minh |

⚠️ Fake review schema có thể khiến website bị Google phạt. Không làm, trong mọi trường hợp.

---

## 6. Tối ưu cho AI Search (ChatGPT, Gemini, Perplexity, Google AI Overview)

AI trích dẫn nội dung **trả lời trực tiếp, có cấu trúc, có thể kiểm chứng**. Cách viết để được trích:

1. **Trả lời ngay trong 40–60 từ đầu tiên** dưới mỗi H2 câu hỏi.
2. Dùng **H2 dạng câu hỏi** đúng cách người ta hỏi ("Vest may đo khác vest may sẵn ở điểm nào?").
3. Dùng **bảng và danh sách** cho thông tin so sánh — AI đọc bảng rất tốt.
4. Có mục **FAQ** cuối bài, câu trả lời độc lập, không phụ thuộc ngữ cảnh phía trên.
5. Nêu rõ **phạm vi địa lý và đối tượng** ("tại TP.HCM", "cho nữ quản lý") — giúp AI khớp đúng truy vấn.
6. **Không giấu nội dung sau JavaScript** — nội dung chính phải có trong HTML server-render.
7. **Trung thực**: khẳng định sai một lần sẽ khiến nội dung mất giá trị trích dẫn.

---

## 7. Performance (ảnh hưởng trực tiếp SEO)

- Dùng `next/image` cho **mọi** ảnh nội dung — có `width`/`height` hoặc `fill` + container tỷ lệ cố định để CLS thấp.
- Định dạng: **AVIF → WebP → JPG** (Next tự lo nếu cấu hình đúng).
- `priority` **chỉ** cho ảnh hero; mọi ảnh dưới fold `loading="lazy"`.
- Ảnh nguồn: cạnh dài tối đa 2400px, dung lượng < 500KB trước khi đưa vào repo.
- Font tự host qua `next/font`, `display: swap`.
- Không thư viện animation nặng cho hiệu ứng đơn giản — CSS + IntersectionObserver là đủ.

**Mục tiêu Lighthouse (mobile, quan trọng hơn desktop):**

| Chỉ số | Ngưỡng |
|---|---|
| Performance | ≥ 85 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | 100 |
| LCP | < 2.5s |
| CLS | < 0.1 |

---

## 8. Quy trình xuất bản một bài Journal

1. Chọn đề tài từ 1 trong 3 pillar (ưu tiên câu hỏi khách thật sự hỏi).
2. Viết theo cấu trúc mục 1.
3. Kiểm tra: có số liệu nào chưa xác nhận không? → bỏ hoặc gắn `TODO(HAI)`.
4. Chuẩn bị ảnh thật (không stock nếu tránh được).
5. Viết title ≤ 60 ký tự, description 140–160 ký tự, slug ngắn có từ khóa.
6. Thêm internal link về hub + 1 CTA.
7. Product Owner duyệt nội dung nghiệp vụ → publish.
8. Khai báo trong Google Search Console.
