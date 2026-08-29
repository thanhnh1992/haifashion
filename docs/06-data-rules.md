# 06 — NGUYÊN TẮC DỮ LIỆU & BẢNG TODO

> ⚠️ **Đây là file quan trọng nhất về mặt rủi ro.** Sai ở đây = website nói dối khách hàng, và có thể bị Google phạt.

---

## 1. Nguyên tắc gốc

**Không bịa. Không suy diễn. Không "làm tròn cho đẹp".**

Nếu một con số hoặc một thông tin về HAI Fashion **không được HAI Fashion xác nhận bằng văn bản/tin nhắn**, thì nó **không được xuất hiện trên website** — kể cả khi nghe rất hợp lý.

---

## 2. Danh sách CẤM tự tạo ra

| Loại dữ liệu | Ví dụ AI hay tự bịa |
|---|---|
| Năm thành lập / số năm kinh nghiệm | "Hơn 10 năm kinh nghiệm", "Thành lập 2012" |
| Số lượng khách hàng | "Hơn 5.000 khách hàng tin tưởng" |
| Số lượng doanh nghiệp | "Đối tác của 200+ doanh nghiệp" |
| Số lượng sản phẩm | "Hơn 10.000 bộ vest đã hoàn thiện" |
| Thời gian may | "Hoàn thiện trong 7 ngày" |
| Thời gian giao hàng | "Giao trong 14 ngày", "Đo 10 phút" |
| Giá | "Từ 2.500.000đ", "Giá chỉ từ…" |
| Thương hiệu vải | "Vải Ý nhập khẩu", "Loro Piana", "Vitale Barberis" |
| Khách hàng nổi tiếng | Tên CEO, tên công ty, chức danh |
| Review / testimonial | "Chị Lan, Giám đốc ABC: rất hài lòng…" |
| Chứng nhận / giải thưởng | "Đạt chuẩn ISO", "Top 10 thương hiệu" |
| Bảo hành / chính sách | "Bảo hành trọn đời", "Chỉnh sửa miễn phí" |
| Số lượng thợ / xưởng | "Đội ngũ 30 thợ lành nghề" |

⚠️ Cấm cả ở: nội dung hiển thị, meta description, alt ảnh, schema JSON-LD, comment trong code.

---

## 3. Cách xử lý khi chưa có dữ liệu

### Trong code

```tsx
{/* TODO(HAI): xác nhận thời gian hoàn thiện trung bình 1 bộ vest may đo */}
```

### Trong nội dung hiển thị

Chọn **một** trong hai:

- **Bỏ hẳn** — viết câu không cần con số. Ví dụ: thay *"Hoàn thiện trong 14 ngày"* bằng *"Thời gian hoàn thiện được thống nhất khi lấy số đo."*
- **Placeholder rõ ràng** — `[TODO: số điện thoại]`, dễ thấy để không lỡ publish nhầm.

⚠️ **Không** dùng placeholder trông giống dữ liệu thật (`0900 000 000`, `contact@haifashion.vn`) — sẽ có ngày bị publish mà không ai phát hiện.

### Quy tắc trước khi publish

Chạy tìm kiếm toàn bộ repo với từ khóa `TODO(HAI)` và `[TODO`. Còn kết quả nào trong trang sắp publish → **chưa được publish**.

---

## 4. BẢNG TODO — DỮ LIỆU CẦN HAI FASHION XÁC NHẬN

> AI cập nhật bảng này mỗi khi phát hiện thêm một chỗ cần dữ liệu thật. Product Owner điền cột "Giá trị thật".

### 4.1. Thông tin liên hệ & doanh nghiệp — ⚠️ chặn Phase 5

| # | Cần xác nhận | Giá trị thật | Dùng ở đâu |
|---|---|---|---|
| 1 | Số điện thoại chính | | Header, footer, `/lien-he`, schema |
| 2 | Số Zalo / link Zalo OA | | CTA toàn site |
| 3 | Facebook / Messenger | | Footer, `/lien-he` |
| 4 | Email liên hệ | | Footer, form |
| 5 | Giờ mở cửa (từng ngày trong tuần) | | `/lien-he`, LocalBusiness schema |
| 6 | Địa chỉ đầy đủ + toạ độ Google Maps | 389B Cách Mạng Tháng Tám, Hòa Hưng, TP.HCM — *cần toạ độ chính xác* | `/lien-he`, schema, footer |
| 7 | Tên pháp nhân đầy đủ (nếu công bố) | | Footer, Organization schema |
| 8 | Có nhiều chi nhánh không? | | Sitemap, schema |

### 4.2. Nhận diện thương hiệu — ⚠️ chặn Phase 4/5

| # | Cần xác nhận | Giá trị thật | Ghi chú |
|---|---|---|---|
| 9 | File logo gốc (SVG/AI/PDF) | | ⚠️ **Không được tự vẽ lại logo** |
| 10 | Bảng màu chính thức (nếu có) | | Nếu không có → dùng đề xuất `docs/04` |
| 11 | Font chính thức (nếu có) | | |
| 12 | Có slogan/tagline chính thức chưa? | | |

### 4.3. Nghiệp vụ may đo

| # | Cần xác nhận | Giá trị thật |
|---|---|---|
| 13 | Quy trình may đo cá nhân đúng mấy bước, tên từng bước | |
| 14 | Thời gian hoàn thiện trung bình (nếu muốn công bố) | |
| 15 | Có nhận chỉnh sửa sau khi giao không? Điều kiện? | |
| 16 | Có bảng giá tham khảo muốn công bố không? | |
| 17 | Các loại chất liệu đang dùng (mô tả chung, không cần tên hãng) | |
| 18 | Có nhận may online / đo tại nhà không? | |

### 4.4. Doanh nghiệp

| # | Cần xác nhận | Giá trị thật |
|---|---|---|
| 19 | Số lượng tối thiểu nhận đơn đồng phục | |
| 20 | Quy trình doanh nghiệp đúng 8 bước như brief? | |
| 21 | Có nhận thêu/in logo lên đồng phục không? | |
| 22 | Doanh nghiệp nào **đã đồng ý** cho dùng tên/logo/ảnh? | |

### 4.5. Khách hàng thật (section Real Clients)

| # | Cần xác nhận | Trạng thái |
|---|---|---|
| 23 | Danh sách ảnh khách hàng **đã được phép** đăng | |
| 24 | Với từng ảnh: được ghi tên không? Được ghi chức danh không? Được ghi công ty không? | |
| 25 | Có testimonial thật nào (có chữ ký/đồng ý) không? | |

⚠️ **Mặc định là KHÔNG được dùng tên/chức danh/công ty** cho tới khi có xác nhận từng trường hợp.

### 4.6. Lịch sử thương hiệu

| # | Cần xác nhận | Giá trị thật |
|---|---|---|
| 26 | Năm bắt đầu hoạt động | ⚠️ Brief ghi "nhiều năm" — **không được tự suy ra con số** |
| 27 | Câu chuyện thành lập (cho `/ve-hai-fashion`) | |
| 28 | Có chứng nhận/giải thưởng thật nào không? | |

---

## 5. Quy tắc với file dữ liệu, hợp đồng, biểu mẫu

Nếu sau này dự án có file Excel/Word/Sheet (danh sách khách, đơn hàng, biểu mẫu đo):

**Preserve first. Modify only requested scope.**

Không tự ý: xóa dữ liệu · xóa mã · đổi cấu trúc · đổi header/footer · thay bảng · thay công thức · đổi tên trường · "chuẩn hóa" giá trị.

Mã ISO, mã đại lý, mã đơn — **giữ nguyên tuyệt đối** nếu không có yêu cầu thay đổi.

---

## 6. Redirect log (điền khi có URL thay đổi)

| URL cũ | URL mới | Loại | Ngày |
|---|---|---|---|
| | | 301 | |
