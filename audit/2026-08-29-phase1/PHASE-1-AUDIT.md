# HAI Fashion — Phase 1 Audit

Ngày audit: 29/08/2026  
Phạm vi: codebase hiện tại, homepage đang triển khai trên Vercel, desktop 1440×1000 và mobile 390×844.  
Trạng thái: chỉ audit; chưa thay đổi giao diện hoặc nội dung website.

## Kết luận điều hành

Website có nền tảng kỹ thuật tốt để phát triển tiếp: Next.js App Router, component tách tương đối rõ, token giao diện tập trung, dùng `next/image`, có metadata, canonical, sitemap, robots và schema cơ bản. Tuy nhiên sản phẩm hiện tại vẫn giống một bản prototype dùng ảnh stock hơn là website của một thương hiệu may đo cao cấp.

Vấn đề lớn nhất không phải là thiếu hiệu ứng. Đó là khoảng cách giữa lời hứa “khách hàng thật, sản phẩm thật, phong thái được may đo” và bằng chứng thị giác hiện có. Section Real Clients đang tự ghi cảnh báo ảnh stock; CTA chưa dẫn tới kênh liên hệ thật; toàn bộ site mới chỉ có một route; mobile hero bị banner demo và ảnh chiếm gần hết vùng đầu màn hình.

## 1. Cấu trúc hiện tại

- Framework: Next.js App Router, TypeScript, Tailwind CSS.
- Route thực tế: chỉ có `/`.
- Homepage gồm 10 section: Hero, Audience Cards, Why HAI, Real Clients, Corporate Tailoring, Process, Fabric & Craft, Portfolio, Journal, Contact CTA.
- Nội dung được tách khỏi component trong `src/content/data`.
- Thành phần dùng lại: Header, Mobile Menu, Footer, Button, Figure, Reveal.
- SEO kỹ thuật hiện có: metadata, canonical, Open Graph cơ bản, robots, sitemap, Organization/ClothingStore JSON-LD.
- Kho ảnh placeholder hiện có: 29 file, tổng khoảng 6.33 MB; file lớn nhất khoảng 1.03 MB.

## 2. Phần tốt nên giữ

### Kiến trúc code

- Section và dữ liệu được tách tương đối sạch, thuận lợi khi thay nội dung và hình ảnh mà không cần rewrite toàn bộ.
- Design token đã được tập trung trong Tailwind config; có thể nâng cấp thành hệ thống editorial thống nhất.
- `next/image` đã được dùng với responsive sizes và cấu hình WebP/AVIF.
- Cấu trúc heading nhìn chung đúng: một H1 và các H2/H3 theo section.
- Dữ liệu chưa xác nhận được đánh dấu TODO, phù hợp nguyên tắc không tự bịa thông tin.

### Trải nghiệm và accessibility cơ bản

- Header sticky, menu mobile rõ, nút đủ lớn và có focus state.
- Menu mobile có `aria-expanded`, `aria-controls`, khóa scroll và đóng bằng Escape.
- Motion có xử lý `prefers-reduced-motion`.
- Section Corporate Tailoring có phân cấp nội dung tốt nhất hiện tại: headline rõ, quy trình dễ quét, CTA đúng mục tiêu doanh nghiệp.

## 3. UX problems

### Critical

1. **Lời hứa “Real Clients” mâu thuẫn với bằng chứng hiện có.** Section này dùng ảnh stock và còn hiển thị cảnh báo màu vàng. Đây là điểm làm giảm niềm tin mạnh nhất.
2. **CTA chưa tạo chuyển đổi thật.** Các nút đặt lịch, Zalo và tư vấn hiện chủ yếu quay về `#lien-he`; số điện thoại/Zalo chưa được nối vào website.
3. **Điều hướng chỉ là anchor trên một trang.** Women, Men, Corporate, Portfolio, Craft và Journal chưa có landing page riêng nên khó kể câu chuyện, khó SEO và khó mở rộng nội dung.
4. **Đi thẳng tới anchor Real Clients trên mobile tạo một viewport gần như trống.** Nội dung chỉ xuất hiện sau khi cuộn; khả năng liên quan tới Reveal/IntersectionObserver kết hợp sticky header và khoảng đệm section.

### High

- Banner demo chiếm quá nhiều vùng đầu màn hình, đặc biệt trên mobile, đẩy headline và CTA quan trọng xuống dưới fold.
- Hero mobile ưu tiên ảnh trước thông điệp; người dùng chưa thấy rõ định vị và hành động chính khi vừa vào trang.
- Portfolio filter hiện mang cảm giác tương tác nhưng chưa tạo route hoặc ngữ cảnh sâu cho từng nhóm.
- Journal card không dẫn đến bài viết; người dùng quay lại chính anchor hiện tại.
- Mobile menu chưa có focus trap hoặc quản lý focus hoàn chỉnh; cần kiểm thử bằng bàn phím và screen reader.

## 4. Visual problems

- Art direction chủ đạo đang là xám tối giản và ảnh stock rời rạc, tạo cảm giác template/corporate hơn là editorial fashion.
- Hero dùng hình retouch mạnh và không cho thấy tay nghề, chất liệu hoặc bối cảnh thật của HAI Fashion.
- Hình trong Portfolio không đồng nhất về ánh sáng, nguồn, tỷ lệ và ngôn ngữ hình ảnh; một số nhãn không khớp trực quan với ảnh.
- Nhịp trang có nhiều khoảng trắng dọc quá lớn nhưng chưa tạo chủ đích biên tập; nội dung bị rời rạc thay vì sang trọng.
- Cân bằng nam/nữ chưa thuyết phục: có phân nhóm nội dung nhưng hình ảnh thương hiệu chưa tạo một hệ thống cân bằng và nhất quán.
- Thiếu ảnh macro của cổ áo, vai, ve áo, khuy, đường chỉ, chất liệu và fitting — những bằng chứng trực tiếp nhất cho giá trị may đo.

## 5. SEO problems

- Sitemap chỉ có homepage; chưa có trang cho các intent chính như vest nữ, vest nam, may đo, đồng phục doanh nghiệp, portfolio và journal.
- Canonical đang hard-code `https://hai-fashion.vn`, trong khi domain này chưa được xác nhận là domain production đang kết nối.
- Website đang ở demo mode; code robots chặn toàn bộ index. Điều này đúng cho staging nhưng phải chuyển có chủ đích khi gắn domain chính thức.
- Open Graph image vẫn là TODO.
- Chưa có metadata riêng theo dịch vụ vì chưa có trang con.
- Số điện thoại trong schema hiện chưa có dù dữ liệu đã được người dùng cung cấp.
- Không có breadcrumb vì chưa có kiến trúc trang con.

## 6. Performance risks

- Kho placeholder gồm 29 ảnh, tổng khoảng 6.33 MB; nhiều file nguồn 300–1,028 KB. `next/image` giảm chi phí truyền tải nhưng chưa thay thế việc chuẩn hóa asset gốc.
- Nhiều ảnh có phong cách và kích thước khác nhau làm tăng chi phí quản lý biến thể/crop và nguy cơ CLS nếu không khóa tỷ lệ nhất quán.
- `next/font/google` phụ thuộc kết nối Google Fonts khi build; nên xác định chiến lược font production ổn định.
- Reveal/animation cần được kiểm tra lại vì trạng thái direct-anchor mobile có thể làm nội dung chưa xuất hiện đúng lúc.
- Chưa có dữ liệu Lighthouse hoặc Core Web Vitals thực tế; chưa nên khẳng định điểm hiệu năng.

## 7. Đánh giá 10 ảnh mới nhận

Ảnh đã được sao chép vào `assets/incoming/2026-08-29-user-upload` và giữ nguyên bản gốc. Chúng có thể hỗ trợ các nhóm Men, Women và Portfolio, nhưng chất lượng/nguồn ảnh không đồng nhất và một số ảnh có dấu hiệu là ảnh catalog/stock.

Trước khi đưa lên production cần xác nhận:

- HAI Fashion có quyền sử dụng công khai từng ảnh hay không.
- Trang phục trong ảnh có thực sự do HAI Fashion thực hiện hay chỉ là hình tham khảo.
- Có được phép gọi người trong ảnh là khách hàng HAI Fashion hay không.

Cho tới khi xác nhận, không dùng các ảnh này cho section Real Clients và không gắn tên khách hàng, công ty hoặc chức danh.

Số điện thoại/Zalo đã nhận: **0903 535 138**. Chưa đưa vào code vì Phase 1 chỉ audit.

## 8. Ưu tiên xử lý đề xuất

### P0 — Niềm tin và chuyển đổi

- Thay toàn bộ nội dung stock trong Real Clients bằng case thật, hoặc đổi section thành Selected Work cho tới khi có đủ dữ liệu thật.
- Kết nối điện thoại/Zalo/đặt lịch thật và thống nhất CTA.
- Xác nhận domain production, site mode, canonical, robots và schema.
- Sửa lỗi direct-anchor/reveal trên mobile.

### P1 — Định vị và kiến trúc

- Xây art direction editorial riêng cho HAI Fashion dựa trên người thật, fitting, vật liệu và chi tiết thủ công.
- Tạo landing page riêng cho Women, Men và Corporate.
- Thiết kế lại homepage theo nhịp kể chuyện: Positioning → Audience → Proof → Craft → Corporate → Portfolio → Journal → Contact.
- Chuẩn hóa grid, spacing, image ratios, typography và crop rule cho mobile.

### P2 — SEO và nội dung dài hạn

- Tạo Portfolio và Journal có route thật.
- Mở rộng sitemap, metadata, breadcrumb và schema theo nội dung đã xác minh.
- Xây content cluster theo intent vest nữ, vest nam, may đo và đồng phục doanh nghiệp tại TP.HCM.
- Chuẩn hóa asset pipeline: quyền sử dụng, tên file, alt text, crop, kích thước và định dạng.

## 9. Bằng chứng hình ảnh

1. `01-desktop-hero.png` — Desktop entry/hero.
2. `02-desktop-real-clients.png` — Real Clients và cảnh báo ảnh stock.
3. `03-desktop-corporate.png` — Corporate Tailoring.
4. `04-desktop-portfolio.png` — Portfolio và nhịp khoảng trắng.
5. `05-mobile-hero.png` — Mobile entry/hero.
6. `06-mobile-menu.png` — Mobile navigation.
7. `07-mobile-real-clients.png` — Trạng thái gần trống khi mở direct anchor.
8. `07-mobile-anchor-blank.png` — Nội dung xuất hiện sau khi cuộn.

## 10. Giới hạn của audit

- Screenshot không thể tự xác nhận toàn bộ WCAG, screen-reader behavior hoặc Core Web Vitals.
- Không có dữ liệu analytics, Search Console, CRM hoặc hành vi người dùng thực tế.
- Quyền sử dụng và nguồn gốc của ảnh mới chưa được xác minh.
- Không tự suy diễn năm thành lập, số khách hàng, giá, thời gian may, thương hiệu vải, testimonial hoặc dự án doanh nghiệp.
