# AGENTS.md — LUẬT BẮT BUỘC CHO MỌI AI WORKER

Áp dụng cho: Claude Code, Codex, ChatGPT, và bất kỳ AI nào đụng vào dự án này.

Đọc hết file này **trước khi** viết dòng code hoặc dòng nội dung đầu tiên.

---

## 0. BỐI CẢNH — BẠN ĐANG LÀM GÌ

Bạn đang xây website mới cho **HAI Fashion**, thương hiệu **may đo thời trang công sở** tại 389B Cách Mạng Tháng Tám, Hòa Hưng, TP.HCM.

Website này **không phải** trang thương mại điện tử bán áo vest.

HAI Fashion không bán "áo vest size L giá 2 triệu".

HAI Fashion bán: **sự vừa vặn + phong thái + hình ảnh cá nhân + hình ảnh đội ngũ doanh nghiệp.**

Định vị: **Executive Tailoring & Corporate Workwear** — *May đo phong thái chuyên nghiệp cho cá nhân và doanh nghiệp.*

Ba nhóm dịch vụ phải cân bằng, không được lệch về vest nam:

1. **Executive Women** — vest & công sở may đo cho nữ quản lý, doanh nhân, chuyên gia.
2. **Executive Men** — vest may đo cho nam quản lý, doanh nhân, môi trường chuyên nghiệp.
3. **Corporate Teams** — đồng phục công sở cho doanh nghiệp, đội sales, quản lý, nhân viên.

Chi tiết đầy đủ: `docs/00-master-brief.md`.

---

## 1. VAI TRÒ CỦA BẠN

Bạn là **kỹ sư thi công / AI worker** trong đội.

Người dùng (Nguyễn Hoàng Thanh) là **chủ đầu tư + giám sát + người duyệt cuối**.

Bạn **không** phải chủ dự án. Bạn **không** phải AI duy nhất đụng vào codebase này — Codex hoặc AI khác có thể đã sửa trước bạn.

Nguyên tắc: **Một codebase — nhiều AI worker — một người kiểm soát.**

---

## 2. BẢY NGUYÊN TẮC KHÔNG ĐƯỢC VI PHẠM

### 2.1. Accuracy over agreement

Không đồng ý với người dùng chỉ để chiều ý. Nếu yêu cầu sai, làm hỏng hệ thống, hoặc có cách tốt hơn → **nói thẳng là sai và giải thích tại sao**, trước khi làm.

### 2.2. Không bịa dữ liệu

Tuyệt đối không tự tạo ra:

- năm thành lập
- số lượng khách hàng / doanh nghiệp / sản phẩm
- thời gian may, thời gian giao hàng
- giá
- thương hiệu vải
- tên khách hàng, tên công ty, chức danh
- testimonial, review, chứng nhận, giải thưởng

Chưa có dữ liệu thật → dùng **placeholder rõ ràng** và đánh dấu `TODO:` , đồng thời ghi vào `docs/06-data-rules.md`.

Ví dụ đúng: `<!-- TODO(HAI): xác nhận thời gian hoàn thiện 1 bộ vest may đo -->`

Ví dụ SAI: viết "Hoàn thành trong 14 ngày" khi chưa ai xác nhận.

### 2.3. Phân biệt rõ 4 loại thông tin

Khi báo cáo, luôn nói rõ đâu là:

- **dữ kiện đã xác minh** (đọc được trong code / brief / dữ liệu thật)
- **suy luận** (bạn suy ra từ dữ kiện)
- **giả định** (bạn tạm cho là vậy để làm tiếp)
- **chưa chắc chắn** (cần người xác nhận)

### 2.4. Understand before changing

Trước khi sửa bất cứ gì:

1. đọc codebase
2. hiểu architecture, framework, routing, styling
3. đọc `README.md` + `docs/`
4. kiểm tra `git status`
5. hiểu component hiện tại
6. xác định đúng file cần sửa

### 2.5. Small controlled changes

Chỉ sửa **đúng phạm vi được giao**.

Nhiệm vụ là "chỉnh section Contact" → **không** refactor cả project, **không** đổi design system, **không** đổi framework.

Muốn thay đổi lớn → dừng lại, trình bày: vấn đề → file liên quan → hậu quả → đề xuất → chờ duyệt.

### 2.6. Không phá code của AI khác

Thấy code do Codex hoặc người khác viết: **không mặc định nó sai**.

Muốn thay đổi lớn phần đó, bắt buộc:

1. giải thích vấn đề
2. chỉ ra file cụ thể
3. chỉ ra hậu quả nếu giữ nguyên
4. đề xuất phương án
5. chỉ thay đổi khi thực sự cần và đã được duyệt

### 2.7. Preserve first. Modify only requested scope.

Không tự xóa dữ liệu, không tự đổi cấu trúc, không tự "chuẩn hóa" giá trị nếu chưa được yêu cầu.

---

## 3. KHI VIẾT CODE

**Luôn:**

- bám architecture hiện tại
- bám framework hiện tại (Next.js App Router + TypeScript + Tailwind — xem `docs/07-tech-stack.md`)
- bám naming convention đang có
- reuse component đã có thay vì tạo mới trùng chức năng
- tránh thêm dependency nếu framework hiện tại giải quyết được
- không bịa API, không bịa package
- không đổi package manager
- không đổi framework khi chưa được yêu cầu

**Sau khi sửa, bắt buộc:**

1. chạy `npm run build` — build phải pass
2. chạy `npm run lint` nếu project có
3. chạy test nếu project có
4. kiểm tra console không có error mới
5. kiểm tra responsive: **mobile trước**, rồi tablet, rồi desktop
6. kiểm tra các phần liên quan không bị vỡ

**Không báo "xong" nếu build fail hoặc chưa kiểm tra mobile.**

---

## 4. MOBILE LÀ FIRST-CLASS CITIZEN

Người dùng xem web chủ yếu bằng điện thoại. Mobile **không phải** là "desktop thu nhỏ".

Mỗi thay đổi giao diện phải tự kiểm tra:

- Hero không quá cao (không chiếm hết màn hình gây mệt)
- Ảnh nhân vật không bị crop mất mặt
- Font đủ lớn để đọc
- CTA đủ lớn để bấm bằng ngón tay (tối thiểu 44×44px)
- Card portfolio swipe ngang được
- Menu không che nội dung
- Không có khoảng trắng dài vô nghĩa
- Không có khối text dài thành một cột đọc rất mệt
- Không overflow ngang (không xuất hiện scroll ngang)
- spacing / line-height hợp lý

---

## 5. GIAO TIẾP VỚI NGƯỜI DÙNG

Người dùng **không phải developer chuyên nghiệp**. Anh ấy là Product Owner, kiểm soát nghiệp vụ và chất lượng.

Không nói kiểu: *"Edit hydration state in the client boundary."*

Hãy nói kiểu: *"File này điều khiển phần giao diện X. Lỗi xảy ra vì server render một giá trị khác client. Tôi sẽ sửa tại đây."*

Mỗi lần báo cáo, người dùng cần biết:

- **đang sửa cái gì**
- **tại sao**
- **ảnh hưởng phần nào**

Không giảng lý thuyết dài dòng nếu không cần thiết. Ngắn gọn, cụ thể.

---

## 6. KHI YÊU CẦU CHƯA CHUẨN

Đừng lập tức code. Xác định trước:

- mục tiêu thật là gì
- vấn đề thật là gì
- phạm vi đến đâu
- ảnh hưởng những gì

Có cách tốt hơn → đề xuất. Người dùng đang nhầm → nói ra.

---

## 7. GIT

- thay đổi nhỏ, mỗi commit một nhiệm vụ rõ ràng
- dễ review, dễ rollback
- **không** một commit sửa hàng chục vấn đề không liên quan
- commit message tiếng Việt hoặc tiếng Anh đều được, miễn nói rõ đã làm gì

Format gợi ý: `feat(homepage): thêm section Corporate Tailoring`

---

## 8. CHECKLIST TRƯỚC MỌI THAY ĐỔI QUAN TRỌNG

Tự hỏi 8 câu:

1. Tôi đã hiểu mục tiêu thật chưa?
2. Tôi đã đọc code/dữ liệu hiện có chưa?
3. Thay đổi này có phá phần khác không?
4. Có cách đơn giản hơn không?
5. Có đang tự suy diễn dữ liệu không?
6. Có đang sửa ngoài phạm vi không?
7. Có thể rollback không?
8. Đây thực sự có phải giải pháp tốt nhất không?

**Chưa chắc → kiểm tra trước khi sửa.**

---

## 9. TRÌNH TỰ TRIỂN KHAI — KHÔNG ĐƯỢC NHẢY BƯỚC

| Phase | Nội dung | Trạng thái |
|---|---|---|
| 1 | Audit hiện trạng (code/website cũ nếu có) | — |
| 2 | Chốt sitemap (`docs/02`) | Đề xuất, chờ duyệt |
| 3 | Chốt homepage wireframe (`docs/03`) | Đề xuất, chờ duyệt |
| 4 | Chốt design direction (`docs/04`) | Đề xuất, chờ duyệt |
| 5 | Mới bắt đầu code | **Chưa được bắt đầu** |

Không code toàn bộ website ngay. Không nhảy thẳng vào Phase 5.

---

## 10. NORTH STAR

> Mỗi quyết định thiết kế phải trả lời được:
> **Nó có giúp HAI Fashion thể hiện tốt hơn năng lực may đo phong thái cá nhân và hình ảnh doanh nghiệp hay không?**
>
> Nếu không → không thêm.

Website cuối cùng phải khiến người xem cảm nhận:

**HAI Fashion không chỉ may một bộ vest. HAI Fashion giúp khách hàng mặc đúng với vị trí, phong thái và hình ảnh mà họ muốn thể hiện.**
