# 02 — SITEMAP ĐỀ XUẤT (PHASE 2)

> **Trạng thái: ĐỀ XUẤT — chờ Product Owner chốt.** Chưa được code theo sitemap này cho tới khi được duyệt.

---

## 1. Sơ đồ tổng

```
/                                   Trang chủ
│
├── /nu                             Executive Women (hub)
│   ├── /nu/vest-nu                 Vest nữ may đo
│   ├── /nu/blazer                  Blazer nữ
│   ├── /nu/dam-cong-so             Đầm công sở
│   └── /nu/quan-au-chan-vay        Quần âu & chân váy
│
├── /nam                            Executive Men (hub)
│   ├── /nam/vest-nam               Vest nam may đo
│   ├── /nam/blazer                 Blazer nam
│   ├── /nam/so-mi                  Sơ mi may đo
│   └── /nam/quan-au                Quần âu
│
├── /doanh-nghiep                   Corporate Teams (hub)
│   ├── /doanh-nghiep/dong-phuc-vest        Đồng phục vest doanh nghiệp
│   ├── /doanh-nghiep/doi-ngu-ban-hang      Đồng phục đội sales
│   └── /doanh-nghiep/quy-trinh             Quy trình triển khai 8 bước
│
├── /bo-suu-tap                     Collections / Portfolio (hub)
│   ├── /bo-suu-tap/nu
│   ├── /bo-suu-tap/nam
│   ├── /bo-suu-tap/doanh-nghiep
│   └── /bo-suu-tap/[slug]          Chi tiết một case (nếu có đủ dữ liệu thật)
│
├── /tay-nghe                       Our Craft (chất liệu, form dáng, chi tiết hoàn thiện)
│   └── /tay-nghe/quy-trinh-may-do  Quy trình may đo 7 bước
│
├── /khach-hang                     "HAI Fashion in Real Life" — khách hàng thật
│
├── /journal                        Journal / kiến thức
│   ├── /journal/style-guide
│   ├── /journal/kien-thuc-may-do
│   ├── /journal/dong-phuc-doanh-nghiep
│   └── /journal/[slug]             Bài viết
│
├── /ve-hai-fashion                 Câu chuyện thương hiệu + địa chỉ
├── /dat-lich                       Đặt lịch tư vấn / đặt lịch đo (form)
├── /lien-he                        Liên hệ + bản đồ + Zalo
│
├── /chinh-sach-bao-mat             (bắt buộc có nếu chạy quảng cáo / thu thập thông tin)
└── /dieu-khoan                     (tuỳ chọn)
```

---

## 2. Quy ước URL

- Tiếng Việt **không dấu**, chữ thường, phân cách bằng dấu `-`.
- Không dùng `_`, không dùng chữ hoa, không có đuôi `.html`.
- Không lồng quá 3 cấp.
- URL đã publish thì **không đổi**. Bắt buộc phải đổi → tạo redirect 301, ghi vào `docs/06-data-rules.md`.
- Trang chi tiết bài viết dùng slug ngắn, có từ khóa chính: `/journal/vest-nu-cong-so-chon-form-nao`.

---

## 3. Navigation

### Header desktop

```
HAI FASHION      Nữ   Nam   Doanh nghiệp   Bộ sưu tập   Tay nghề   Journal      [ Đặt lịch ]
```

- Sticky khi cuộn (nền chuyển từ trong suốt → nền đặc, có shadow rất nhẹ).
- CTA `Đặt lịch` là nút đặc, luôn hiển thị.
- Dropdown: chỉ mở cho **Nữ / Nam / Doanh nghiệp / Bộ sưu tập**. Dropdown phải có ảnh nhỏ, không phải danh sách text trần.

### Header mobile

```
[☰]        HAI FASHION        [Đặt lịch]
```

- Hamburger mở panel toàn màn hình, nền đặc, đóng dễ.
- Trong panel: 6 mục chính + 2 nút liên hệ (Gọi, Zalo).
- Menu **không** che nội dung khi đóng, **không** đẩy layout.

### Footer

4 cột (desktop) / accordion (mobile):

1. **HAI Fashion** — logo, một câu định vị, địa chỉ 389B Cách Mạng Tháng Tám, Hòa Hưng, TP.HCM.
2. **Dịch vụ** — Nữ, Nam, Doanh nghiệp, Bộ sưu tập.
3. **Tìm hiểu** — Tay nghề, Quy trình may đo, Journal, Về HAI Fashion.
4. **Liên hệ** — điện thoại `TODO(HAI)`, Zalo `TODO(HAI)`, giờ mở cửa `TODO(HAI)`, bản đồ.

---

## 4. Metadata đề xuất (title / description)

> Title ≤ 60 ký tự, description 140–160 ký tự. Mỗi trang **một title riêng** — cấm dùng chung.

| URL | Title | Description |
|---|---|---|
| `/` | HAI Fashion — May đo vest & thời trang công sở TP.HCM | May đo vest nam, vest nữ và đồng phục công sở tại TP.HCM. Thiết kế theo vóc dáng và môi trường làm việc của từng khách hàng. |
| `/nu` | Vest & thời trang công sở nữ may đo — HAI Fashion | Vest, blazer, đầm và quần âu may đo cho nữ quản lý, doanh nhân và chuyên gia. Chú trọng form vai, eo và tỷ lệ cơ thể. |
| `/nam` | Vest nam may đo — HAI Fashion TP.HCM | Vest, blazer, sơ mi và quần âu may đo cho nam quản lý và doanh nhân. Tư vấn form dáng theo môi trường làm việc. |
| `/doanh-nghiep` | May đồng phục vest doanh nghiệp — HAI Fashion | Thiết kế và may đồng phục công sở cho doanh nghiệp: đội ngũ bán hàng, quản lý và nhân viên. Quy trình triển khai rõ ràng. |
| `/bo-suu-tap` | Bộ sưu tập & thiết kế đã thực hiện — HAI Fashion | Các thiết kế may đo HAI Fashion đã thực hiện cho khách hàng cá nhân và doanh nghiệp. |
| `/tay-nghe` | Chất liệu & tay nghề may đo — HAI Fashion | Cách HAI Fashion xử lý chất liệu, form dáng và chi tiết hoàn thiện trong từng bộ trang phục may đo. |
| `/khach-hang` | Khách hàng của HAI Fashion | Hình ảnh thật của khách hàng cá nhân và đội ngũ doanh nghiệp trong trang phục may đo HAI Fashion. |
| `/journal` | Journal — Kiến thức may đo & thời trang công sở | Hướng dẫn chọn vest, kiến thức may đo và kinh nghiệm xây dựng đồng phục doanh nghiệp. |
| `/dat-lich` | Đặt lịch tư vấn & đo — HAI Fashion | Đặt lịch tư vấn phong cách hoặc lấy số đo tại HAI Fashion, 389B Cách Mạng Tháng Tám, TP.HCM. |
| `/lien-he` | Liên hệ HAI Fashion | Địa chỉ, bản đồ và các kênh liên hệ của HAI Fashion tại TP.HCM. |

> ⚠️ Description **không** được chứa số liệu chưa xác nhận (số năm kinh nghiệm, số khách hàng, thời gian giao hàng, giá).

---

## 5. Hệ thống internal link (bắt buộc)

- Homepage → 3 hub (Nữ / Nam / Doanh nghiệp) + Khách hàng + Journal.
- Mỗi hub → ít nhất 2 bài Journal liên quan.
- Mỗi bài Journal → 1 hub liên quan + 1 CTA (`Đặt lịch tư vấn` hoặc `Tư vấn doanh nghiệp`).
- Trang Khách hàng → hub tương ứng của từng case.
- Breadcrumb cho **mọi** trang cấp 2 trở xuống.

---

## 6. Ưu tiên xây dựng

| Đợt | Trang | Lý do |
|---|---|---|
| **1** | `/`, `/nu`, `/nam`, `/doanh-nghiep`, `/lien-he`, `/dat-lich` | Đủ để chạy: khách hiểu dịch vụ và liên hệ được |
| **2** | `/bo-suu-tap` (+3 trang con), `/khach-hang`, `/tay-nghe` | Tạo niềm tin, đây là lợi thế thật của HAI Fashion |
| **3** | `/journal` + 6–9 bài đầu tiên, `/ve-hai-fashion` | SEO dài hạn |
| **4** | Trang chi tiết case, các trang con còn lại | Mở rộng khi có đủ dữ liệu và ảnh |

---

## 7. Câu hỏi cần Product Owner chốt

1. Menu dùng **tiếng Việt** (Nữ / Nam / Doanh nghiệp) hay **tiếng Anh** (Women / Men / Corporate)? — *Đề xuất: tiếng Việt cho khách VN, giữ tên nhóm tiếng Anh trong tiêu đề section để tạo chất thời trang.*
2. Có làm phiên bản tiếng Anh (`/en`) không? — *Đề xuất: chưa, để sau.*
3. `/dat-lich` là form riêng hay chỉ mở Zalo? — *Đề xuất: form riêng + nút Zalo song song.*
4. Có bán/nhận đặt online không? — *Theo brief: không có giỏ hàng.*
