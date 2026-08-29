# 03 — HOMEPAGE WIREFRAME (PHASE 3)

> **Trạng thái: ĐỀ XUẤT — chờ Product Owner chốt.**
> Mọi nội dung chữ dưới đây là **bản nháp có thể thay**, trừ các quy tắc được đánh dấu ⚠️.

---

## Luồng kể chuyện của homepage

```
Bạn muốn trông như thế nào?        → HERO
Bạn thuộc nhóm nào?                → 3 NHÓM KHÁCH HÀNG
Tại sao may đo ở đây khác?         → WHY HAI FASHION
Có thật không?                     → REAL CLIENTS  ★ quan trọng nhất
Nếu tôi là doanh nghiệp?           → CORPORATE TAILORING
Làm việc với HAI Fashion ra sao?   → QUY TRÌNH MAY ĐO
Chất lượng nằm ở đâu?              → FABRIC & CRAFT
Xem thêm mẫu                       → PORTFOLIO PREVIEW
Học thêm trước khi quyết định      → JOURNAL PREVIEW
Bắt đầu                            → CTA + LIÊN HỆ
```

⚠️ **Không thêm section nào ngoài danh sách này** nếu chưa được duyệt. Không lặp section. Không nhồi form.

---

## SECTION 1 — HERO

**Desktop**

- Chiều cao: 85–92vh (không ép 100vh — để lộ mép section sau, tạo tín hiệu cuộn).
- Ảnh nền lớn, người thật, chất thời trang. Overlay tối nhẹ (gradient từ dưới lên) đủ để chữ đọc được.
- Nội dung căn trái, đặt ở 1/3 dưới.

```
┌──────────────────────────────────────────────────────┐
│  [HAI FASHION]  Nữ Nam Doanh nghiệp …   [ Đặt lịch ] │  ← header trong suốt
│                                                      │
│                                                      │
│                                                      │
│   Phong thái được may đo riêng cho bạn.              │  H1
│   Vest và thời trang công sở thiết kế theo vóc dáng, │  sub
│   môi trường làm việc và hình ảnh bạn muốn thể hiện. │
│                                                      │
│   [ Đặt lịch tư vấn ]   Khám phá HAI Fashion →       │
│                                                      │
│   ● ○ ○                                     ↓ cuộn   │
└──────────────────────────────────────────────────────┘
```

**Carousel:** tối đa **3 slide**, tự chuyển sau 6–7 giây, chuyển bằng fade (không trượt mạnh), có thể tạm dừng. Slide gợi ý: (1) nữ executive, (2) nam executive, (3) đội ngũ doanh nghiệp — ⚠️ đúng thứ tự này để nữ không bị xếp sau.

**Mobile**

- Chiều cao **tối đa 70–75vh**. ⚠️ Không để hero chiếm hết màn hình.
- Ảnh dùng **crop dọc riêng**, `object-position` canh vào mặt người. ⚠️ Không được crop mất mặt.
- H1 xuống 2–3 dòng, không quá 8 chữ/dòng.
- CTA chính là nút full-width; CTA phụ là text link ngay dưới.
- Chỉ 1 CTA đặc — không 2 nút to cạnh nhau.

**Nội dung nháp**

| Trường | Nội dung |
|---|---|
| H1 | Phong thái được may đo riêng cho bạn |
| Sub | Vest và thời trang công sở được thiết kế theo vóc dáng, môi trường làm việc và hình ảnh bạn muốn thể hiện. |
| CTA chính | Đặt lịch tư vấn → `/dat-lich` |
| CTA phụ | Khám phá HAI Fashion → `#nhom-khach-hang` |

---

## SECTION 2 — BA NHÓM KHÁCH HÀNG

⚠️ Card **lớn**, không phải card nhỏ kiểu ecommerce. Ảnh chiếm ≥ 70% diện tích card.

**Desktop:** 3 cột bằng nhau, tỷ lệ ảnh 3:4, hover → ảnh zoom nhẹ 1.03 + hiện CTA.

```
┌────────────┐  ┌────────────┐  ┌────────────┐
│            │  │            │  │            │
│   ẢNH      │  │   ẢNH      │  │   ẢNH      │
│   3:4      │  │   3:4      │  │   3:4      │
│            │  │            │  │            │
├────────────┤  ├────────────┤  ├────────────┤
│ EXECUTIVE  │  │ EXECUTIVE  │  │ CORPORATE  │
│ WOMEN      │  │ MEN        │  │ TEAMS      │
│ mô tả 1 câu│  │ mô tả 1 câu│  │ mô tả 1 câu│
│ Khám phá → │  │ Khám phá → │  │ Khám phá → │
└────────────┘  └────────────┘  └────────────┘
```

**Mobile:** xếp dọc (không carousel — 3 cái thì cuộn dọc dễ hơn), ảnh 4:5, khoảng cách giữa card đủ thoáng.

| Card | Tiêu đề | Mô tả nháp | Link |
|---|---|---|---|
| 1 | Executive Women | Vest, blazer và thời trang công sở may đo cho nữ quản lý, doanh nhân và chuyên gia. | `/nu` |
| 2 | Executive Men | Vest và trang phục công sở may đo cho nam quản lý và doanh nhân. | `/nam` |
| 3 | Corporate Teams | Đồng phục công sở đồng bộ cho đội ngũ doanh nghiệp. | `/doanh-nghiep` |

---

## SECTION 3 — WHY HAI FASHION

⚠️ Cấm các từ: uy tín, chất lượng, tận tâm, chuyên nghiệp (dùng như một "giá trị").

**Layout:** 5 mục. Desktop: lưới 2 cột (ảnh trái – nội dung phải) hoặc 5 khối text có đánh số, nền sáng, nhiều khoảng thở. Mobile: xếp dọc, mỗi mục cách nhau rộng.

| # | Tiêu đề | Nội dung nháp |
|---|---|---|
| 01 | May theo vóc dáng | Mỗi bộ trang phục được điều chỉnh dựa trên hình thể thực tế, không theo bảng size chung. |
| 02 | Tư vấn theo môi trường sử dụng | Thiết kế cho CEO, sales, quản lý, sự kiện hay môi trường văn phòng không giống nhau. |
| 03 | Chú trọng form dáng | Đặc biệt ở phần vai, eo, chiều dài áo và tỷ lệ cơ thể. |
| 04 | Cá nhân hóa | Khách hàng chọn phong cách, chất liệu và các chi tiết hoàn thiện. |
| 05 | Dịch vụ doanh nghiệp | Triển khai đồng bộ hình ảnh cho cả đội ngũ. |

---

## SECTION 4 — ★ REAL CLIENTS ("HAI Fashion in Real Life")

⚠️ **Đây là section quan trọng nhất của trang.** Đây là tài sản mà website cũ chưa tận dụng.

**Tiêu đề nháp:** *Khách hàng của HAI Fashion* — hoặc giữ tiếng Anh *HAI Fashion in Real Life* làm eyebrow, tiêu đề tiếng Việt bên dưới.

**Desktop:** lưới masonry hoặc dải ngang cuộn được, ảnh lớn, tối thiểu 6 case hiển thị.
**Mobile:** carousel **swipe ngang**, snap từng card, ảnh 4:5.

Mỗi case gồm:

```
┌─────────────────┐
│                 │
│   ẢNH THẬT      │
│                 │
├─────────────────┤
│ Vest nữ 2 khuy  │  ← loại trang phục
│ Họp lãnh đạo    │  ← ngữ cảnh sử dụng
│ Mô tả rất ngắn  │  ← 1 câu, tối đa ~15 từ
└─────────────────┘
```

⚠️ **Cấm tuyệt đối:** bịa tên khách hàng, tên công ty, chức danh, testimonial, logo doanh nghiệp.

Chỉ hiển thị tên/chức danh/logo khi HAI Fashion **đã xin phép và xác nhận**. Chưa có → chỉ ghi loại trang phục + ngữ cảnh (ví dụ: *"Vest nữ — quản lý cấp trung"*, *"Đồng phục đội bán hàng — 24 người"* nếu con số là thật).

Cuối section: link `Xem thêm khách hàng →` `/khach-hang`.

---

## SECTION 5 — CORPORATE TAILORING

⚠️ Section riêng, có nền khác biệt (tối hoặc màu nền phụ) để tách khỏi phần cá nhân.

**Headline nháp:** *Một đội ngũ. Một hình ảnh chuyên nghiệp.*

**Layout:** ảnh đội ngũ thật rộng full-bleed bên trên hoặc bên trái + quy trình 8 bước dạng hàng ngang đánh số (desktop) / danh sách dọc gọn (mobile).

```
01 Tìm hiểu thương hiệu và nhu cầu
02 Đề xuất thiết kế
03 Chọn chất liệu
04 Lấy số đo
05 May mẫu
06 Sản xuất
07 Thử và điều chỉnh
08 Bàn giao
```

⚠️ **Không ghi thời gian cho bất kỳ bước nào** cho tới khi HAI Fashion xác nhận.

CTA: **Tư vấn đồng phục doanh nghiệp** → `/doanh-nghiep`

---

## SECTION 6 — QUY TRÌNH MAY ĐO (CÁ NHÂN)

7 bước, đánh số, trình bày nhẹ (icon đường nét mảnh hoặc chỉ số + chữ, không dùng icon màu mè).

```
01 Tư vấn phong cách
02 Chọn chất liệu
03 Lấy số đo
04 Thiết kế form
05 May và hoàn thiện
06 Thử & chỉnh sửa
07 Nhận sản phẩm
```

**Desktop:** timeline ngang hoặc lưới 4+3. **Mobile:** dọc, có đường nối dọc mảnh.

⚠️ Không có "10 phút", "14 ngày", "30 ngày".

---

## SECTION 7 — FABRIC & CRAFTSMANSHIP

**Mục đích:** để khách *cảm* được giá trị, không phải học kỹ thuật.

4 khối: **Fabric • Construction • Fit • Details** — mỗi khối 1 ảnh macro + 1 tiêu đề + 1–2 câu.

Ảnh macro gợi ý: vải, ve áo, đường chỉ, khuy, vai áo, lót áo.

⚠️ **Không nêu tên thương hiệu vải** (Vitale Barberis, Loro Piana…) nếu HAI Fashion chưa xác nhận đang dùng.

Link: `Tìm hiểu tay nghề →` `/tay-nghe`

---

## SECTION 8 — PORTFOLIO PREVIEW

Dải ảnh lớn cuộn ngang, 8–12 ảnh, ưu tiên **ảnh lớn hơn chữ**.

Bộ lọc nhẹ (tabs): `Nữ` · `Nam` · `Doanh nghiệp` — mặc định là `Nữ` hoặc `Tất cả`.

**Mobile:** swipe ngang, snap, không hiện thanh cuộn xấu.

Link: `Xem toàn bộ bộ sưu tập →` `/bo-suu-tap`

---

## SECTION 9 — JOURNAL PREVIEW

3 bài mới nhất. Card: ảnh 16:9 hoặc 3:2 + chuyên mục + tiêu đề. **Không hiện ngày** nếu bài chưa được cập nhật thường xuyên.

Link: `Đọc thêm →` `/journal`

---

## SECTION 10 — CTA CUỐI + LIÊN HỆ

Một khối lớn, nền tương phản, một thông điệp, tối đa **2 hành động**.

```
        Bắt đầu với một buổi tư vấn.

  Gặp trực tiếp tại 389B Cách Mạng Tháng Tám,
  Hòa Hưng, TP.HCM — hoặc nhắn trước qua Zalo.

     [ Đặt lịch tư vấn ]    [ Nhắn Zalo ]
```

⚠️ Không ném số điện thoại cỡ lớn giữa màn hình. Thông tin liên hệ phải được thiết kế thành trải nghiệm.

---

## Nút liên hệ nổi trên mobile (tuỳ chọn — cần duyệt)

Thanh cố định đáy màn hình, chỉ hiện sau khi cuộn qua hero: `Gọi` · `Zalo` · `Đặt lịch`. Chiều cao gọn, không che nội dung, có thể ẩn khi cuộn xuống.

---

## Checklist nghiệm thu homepage

- [ ] Số ảnh nữ ≈ số ảnh nam (không lệch quá 60/40)
- [ ] Có section Corporate riêng, không chìm
- [ ] Section Real Clients dùng **ảnh thật**, không có tên/chức danh bịa
- [ ] Không có: giá, số năm, số lượng khách, thời gian giao, tên vải — trừ khi đã xác nhận
- [ ] Không có từ: MUA NGAY / SALE / GIẢM GIÁ / uy tín – chất lượng – tận tâm
- [ ] Đúng 10 section, không lặp, không có khoảng trắng dài vô nghĩa
- [ ] Mobile: hero ≤ 75vh, không crop mất mặt, không scroll ngang, CTA ≥ 44px
- [ ] Chỉ **một** thẻ `<h1>` trên trang
- [ ] Lighthouse mobile: Performance ≥ 85, CLS < 0.1
