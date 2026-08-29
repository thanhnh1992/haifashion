# 08 — QUY TRÌNH LÀM VIỆC VỚI AI

---

## 1. Sơ đồ vai trò

```
NGUYỄN HOÀNG THANH  ── Product Owner, giám sát, DUYỆT CUỐI CÙNG
        │
        ├── ChatGPT        → phân tích nghiệp vụ, nội dung, chiến lược
        ├── Claude Code    → code, review code, sửa bug, audit
        ├── Codex          → code
        ├── Figma          → thiết kế
        └── GitHub/repo    → NGUỒN SỰ THẬT của phần mềm
```

**Không AI nào là chủ dự án.** Nhiều AI worker, một người kiểm soát.

---

## 2. Năm phase — không nhảy bước

| Phase | Việc | Đầu ra | Trạng thái |
|---|---|---|---|
| 1 | Audit hiện trạng | Báo cáo: cấu trúc, phần tốt nên giữ, phần yếu, UX/visual/SEO/performance problem | ⬜ Chỉ làm nếu có website/code cũ |
| 2 | Sitemap | `docs/02-sitemap.md` | 🟡 Đã đề xuất — **chờ chốt** |
| 3 | Homepage wireframe | `docs/03-homepage-wireframe.md` | 🟡 Đã đề xuất — **chờ chốt** |
| 4 | Design direction | `docs/04-design-system.md` | 🟡 Đã đề xuất — **chờ chốt màu/font/logo** |
| 5 | Code | `web/` | 🔴 **Chưa được bắt đầu** |

⚠️ AI **không** được tự nhảy sang Phase 5. Muốn code → hỏi: *"Phase 2/3/4 đã được duyệt chưa?"*

---

## 3. Vòng đời một task

```
1. Giao task rõ phạm vi
2. AI đọc: AGENTS.md → docs liên quan → code liên quan → git status
3. AI trình bày: sẽ sửa file nào, cách làm, ảnh hưởng gì
4. Product Owner duyệt (task nhỏ có thể bỏ qua bước này)
5. AI làm — CHỈ trong phạm vi được giao
6. AI chạy build + lint + kiểm tra mobile
7. AI báo cáo: đã sửa gì / vì sao / ảnh hưởng đâu
8. Product Owner nghiệm thu
9. Commit
```

**Task nhỏ (đổi chữ, sửa spacing):** bỏ bước 3–4, làm luôn rồi báo cáo.
**Task lớn (thêm section, đổi cấu trúc, thêm dependency):** bắt buộc đủ 9 bước.

---

## 4. Git

- Nhánh: `main` là bản chạy được. Việc lớn → nhánh riêng `feat/ten-viec`.
- Commit nhỏ, mỗi commit một nhiệm vụ.
- Format: `<loại>(<phạm vi>): <việc đã làm>`

```
feat(homepage): thêm section Real Clients
fix(mobile): sửa hero bị crop mất mặt ở 390px
content(journal): thêm bài vest nữ chọn form
docs: cập nhật bảng TODO dữ liệu thật
```

- ⚠️ **Không** một commit sửa hàng chục vấn đề không liên quan.
- Trước khi bắt đầu: `git status` — có thể AI khác vừa sửa và chưa commit.

---

## 5. Khi hai AI cùng làm

- Trước khi sửa: **luôn** `git status` và `git log --oneline -10`.
- Thấy code lạ → **không mặc định nó sai**. Đọc hiểu trước.
- Muốn thay đổi lớn code của AI khác, bắt buộc trình bày: vấn đề → file → hậu quả → đề xuất → chờ duyệt.
- Không đổi convention giữa chừng chỉ vì mình quen kiểu khác.

---

## 6. PROMPT MẪU — copy dán cho AI mới

### 6.1. Mở đầu phiên làm việc

```
Dự án: website HAI Fashion (may đo thời trang công sở, TP.HCM).
Thư mục: E:\Projects\hai-fashion

Trước khi làm bất cứ việc gì, đọc theo thứ tự:
1. AGENTS.md          — luật bắt buộc
2. README.md          — trạng thái dự án
3. docs/00-master-brief.md
4. docs/06-data-rules.md — cái gì KHÔNG được bịa

Sau đó tóm tắt lại cho tôi trong 5 gạch đầu dòng:
- dự án là gì
- đang ở phase nào
- được phép làm gì
- không được làm gì
- cần dữ liệu gì mà chưa có

Chưa đọc xong đừng đề xuất giải pháp.
```

### 6.2. Giao một task code

```
NHIỆM VỤ: <mô tả 1–2 câu>
PHẠM VI: chỉ file/section <...>. Không đụng phần khác.

Trước khi sửa:
- đọc AGENTS.md và docs/07-tech-stack.md
- chạy git status
- đọc file sẽ sửa
- nói cho tôi biết: sửa file nào, cách làm, ảnh hưởng gì

Sau khi sửa:
- npm run build phải pass
- kiểm tra 390px / 768px / 1440px
- báo cáo: đã sửa gì / vì sao / ảnh hưởng đâu

Không refactor ngoài phạm vi. Không thêm package. Không bịa dữ liệu.
```

### 6.3. Giao một task viết nội dung

```
NHIỆM VỤ: viết bài Journal "<tiêu đề>"
Pillar: <Style Guide | Tailoring Knowledge | Corporate Uniform>

Đọc trước: docs/01-brand-positioning.md (giọng nói) và docs/05-content-seo.md (cách viết).

Yêu cầu:
- 900–1500 từ
- trả lời câu hỏi chính ngay trong 40–60 từ đầu
- cấu trúc: intent → answer → evidence → explanation → next action
- có mục FAQ 3–5 câu
- link về 1 hub + 1 CTA
- KHÔNG mở bài sáo rỗng
- KHÔNG số liệu chưa xác nhận (giá, thời gian, số năm, tên vải)
- KHÔNG bịa tên khách hàng / testimonial

Chỗ nào cần dữ liệu thật thì để TODO(HAI) và liệt kê ra cuối bài.
```

### 6.4. Yêu cầu review / audit

```
Review phần <...> theo docs/03-homepage-wireframe.md (checklist nghiệm thu)
và docs/06-data-rules.md.

Trả lời theo 4 nhóm, phân biệt rõ:
- dữ kiện đã xác minh
- suy luận
- giả định
- chưa chắc chắn

Chỉ ra: vấn đề → file/dòng → hậu quả → đề xuất.
Chưa được sửa gì cho tới khi tôi duyệt.
```

---

## 7. Cách Product Owner nghiệm thu nhanh

Với mỗi thay đổi giao diện, tự mở điện thoại và kiểm 6 điều:

1. Hero có chiếm hết màn hình gây mệt không?
2. Mặt người trong ảnh có bị cắt không?
3. Chữ có đủ lớn không?
4. Nút có dễ bấm bằng ngón cái không?
5. Có phải vuốt ngang mới xem hết trang không? (⚠️ lỗi)
6. Có chỗ nào trống dài vô nghĩa không?

Với mỗi thay đổi nội dung, kiểm 3 điều:

1. Có con số nào tôi chưa từng xác nhận không?
2. Có câu nào sáo rỗng không?
3. Có tên khách hàng / công ty nào chưa xin phép không?

---

## 8. Khi AI làm sai

Nói thẳng, chỉ rõ chỗ sai, yêu cầu:

```
Dừng lại. Việc vừa rồi sai ở: <...>
Rollback về trạng thái trước (git checkout / git revert).
Giải thích tại sao làm vậy, rồi đề xuất cách đúng. Chưa được sửa tiếp.
```

AI phải nhận sai gọn gàng, sửa, không xin lỗi dài dòng, không lặp lại lỗi.
