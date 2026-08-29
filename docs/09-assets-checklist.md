# 09 — CHECKLIST ẢNH & TÀI SẢN CẦN CHUẨN BỊ

> Website thời trang sống bằng hình ảnh. Code đẹp mà ảnh yếu thì website vẫn thất bại.
> **Đây là việc chỉ HAI Fashion làm được, AI không thay thế được.**

---

## 1. Nguyên tắc

- Ưu tiên **khách hàng thật, sản phẩm thật, đội ngũ thật**.
- Hạn chế tối đa stock photo.
- ⚠️ **Không dùng ảnh AI tạo ra để giả làm khách hàng thật.**
- ⚠️ **Không lấy ảnh của The Valet hay tailor khác.**
- Ảnh khách hàng: phải **xin phép trước khi đăng** (xem `docs/06` mục 4.5).

---

## 2. Danh sách ảnh cần có

### 2.1. Hero — ⚠️ ưu tiên cao nhất

| # | Nội dung | Số lượng | Ghi chú |
|---|---|---|---|
| H1 | Nữ executive trong vest may đo | 1 ngang + 1 dọc | Cùng một buổi chụp, 2 crop khác nhau |
| H2 | Nam executive trong vest may đo | 1 ngang + 1 dọc | |
| H3 | Đội ngũ doanh nghiệp mặc đồng phục | 1 ngang + 1 dọc | |

⚠️ Bản dọc là bắt buộc — không được crop bản ngang cho mobile vì sẽ mất mặt người.

### 2.2. Ba nhóm khách hàng (Section 2 homepage)

| # | Nội dung | Tỷ lệ |
|---|---|---|
| A1 | Nữ executive — ảnh toàn thân hoặc 3/4 | 3:4 và 4:5 |
| A2 | Nam executive | 3:4 và 4:5 |
| A3 | Nhóm nhân sự doanh nghiệp | 3:4 và 4:5 |

### 2.3. Khách hàng thật (Section 4 — quan trọng nhất)

**Tối thiểu 6 case, lý tưởng 10–12.** Cân bằng nam/nữ, có ít nhất 2 case doanh nghiệp.

Mỗi case cần:

- [ ] Ảnh (4:5, người mặc, trong ngữ cảnh thật nếu được)
- [ ] Loại trang phục (vd: "Vest nữ 2 khuy, ve nhọn")
- [ ] Ngữ cảnh sử dụng (vd: "Họp lãnh đạo", "Sự kiện công ty")
- [ ] **Đã xin phép đăng ảnh?** ☐ Có ☐ Chưa
- [ ] **Được ghi tên?** ☐ Có ☐ Không
- [ ] **Được ghi chức danh?** ☐ Có ☐ Không
- [ ] **Được ghi tên công ty / dùng logo?** ☐ Có ☐ Không

⚠️ Mặc định **KHÔNG** ghi tên/chức danh/công ty cho tới khi có xác nhận từng trường hợp.

### 2.4. Chi tiết tay nghề (macro) — Section 7

Tối thiểu 8 ảnh, tỷ lệ 1:1:

- [ ] Vải (cận cảnh bề mặt, thấy sợi)
- [ ] Ve áo
- [ ] Cổ áo
- [ ] Vai áo (phần khó nhất, thể hiện tay nghề)
- [ ] Khuy
- [ ] Đường chỉ / đường may
- [ ] Lót áo
- [ ] Túi / chi tiết hoàn thiện

### 2.5. Quy trình

- [ ] Lấy số đo (2–3 ảnh)
- [ ] Chọn vải / bảng vải
- [ ] Cắt vải, may
- [ ] Thử đồ / chỉnh sửa

### 2.6. Portfolio

Tối thiểu 12–18 ảnh, chia đều:

| Nhóm | Số lượng tối thiểu |
|---|---|
| Nữ (suit, blazer, đầm, quần âu) | 6 |
| Nam (suit, blazer, sơ mi, quần âu) | 6 |
| Doanh nghiệp (đồng phục lãnh đạo, sales, văn phòng) | 4 |

### 2.7. Cửa hàng & con người

- [ ] Mặt tiền 389B Cách Mạng Tháng Tám
- [ ] Không gian bên trong
- [ ] Bảng vải / khu vực tư vấn
- [ ] Người thợ đang làm việc (nếu được phép)

### 2.8. Thương hiệu

- [ ] **File logo gốc — SVG hoặc AI/PDF vector** ⚠️ bắt buộc
- [ ] Logo bản đen, bản trắng (dùng trên nền tối)
- [ ] Favicon
- [ ] Ảnh OG (1200×630) cho trang chủ

---

## 3. Yêu cầu kỹ thuật khi giao ảnh

| Tiêu chí | Yêu cầu |
|---|---|
| Định dạng gốc | JPG hoặc PNG chất lượng cao (giữ bản gốc, đừng gửi ảnh đã bị nén qua Zalo/Messenger) |
| Cạnh dài | 2000–3000px |
| Ảnh dọc | Bắt buộc có bản dọc riêng cho hero và card mobile |
| Đặt tên | kebab-case, mô tả nội dung: `vest-nu-hop-lanh-dao-01.jpg` |
| Không có | Watermark của bên khác, logo app chỉnh ảnh, khung viền, chữ chèn sẵn |

⚠️ **Đừng gửi ảnh qua Zalo/Messenger ở chế độ nén** — chất lượng sẽ hỏng. Gửi qua Google Drive dạng file gốc.

---

## 4. Nơi để ảnh

```
E:\Projects\hai-fashion\assets\        ← ảnh GỐC, chưa xử lý (không đưa lên web)
    ├── hero\
    ├── women\
    ├── men\
    ├── corporate\
    ├── clients\
    ├── craft\
    ├── process\
    ├── store\
    └── brand\

web\public\images\                     ← ảnh ĐÃ tối ưu, dùng trong code
```

Quy trình: ảnh gốc vào `assets/` → resize + nén (cạnh dài ≤ 2400px, < 500KB) → copy vào `web/public/images/`.

---

## 5. Bảng theo dõi tiến độ

| Nhóm ảnh | Cần | Đã có | Trạng thái |
|---|---|---|---|
| Hero (3 slide × 2 crop) | 6 | 0 | ⬜ |
| Ba nhóm khách hàng | 6 | 0 | ⬜ |
| Khách hàng thật | 6–12 | 0 | ⬜ |
| Chi tiết tay nghề (macro) | 8 | 0 | ⬜ |
| Quy trình | 5 | 0 | ⬜ |
| Portfolio | 16 | 0 | ⬜ |
| Cửa hàng | 4 | 0 | ⬜ |
| Logo & brand | 4 | 0 | ⬜ |

**Tổng tối thiểu để dựng được homepage tử tế: ~35–40 ảnh.**

⚠️ Chưa đủ ảnh mà vẫn code → website sẽ đầy placeholder xám và không thể đánh giá được thiết kế. Nên chuẩn bị ảnh **song song** với Phase 2–4.
