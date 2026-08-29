# CLAUDE.md — HAI FASHION

## Bắt buộc đọc trước

👉 **`AGENTS.md`** là luật chung cho mọi AI worker trong dự án này. Đọc hết trước khi làm bất cứ việc gì.

File này chỉ bổ sung phần riêng cho Claude Code.

---

## Bối cảnh 30 giây

Website may đo thời trang công sở **HAI Fashion** (TP.HCM). Không phải ecommerce. Định vị *Executive Tailoring & Corporate Workwear*. Ba nhóm: **Executive Women / Executive Men / Corporate Teams** — cân bằng nam nữ, không lệch vest nam.

Người dùng là Product Owner, không phải developer chuyên nghiệp. Anh ấy duyệt mọi thay đổi quan trọng.

---

## Quy trình Claude Code phải theo

**Trước khi sửa code:**

1. `git status` — xem có thay đổi chưa commit không (có thể Codex vừa sửa).
2. Đọc `README.md` và file `docs/` liên quan.
3. Đọc component/file thật sự sẽ sửa — không đoán nội dung file.
4. Nói rõ với người dùng: sẽ sửa file nào, tại sao, ảnh hưởng gì.

**Trong khi sửa:**

- Chỉ sửa đúng phạm vi được giao.
- Reuse component có sẵn.
- Không thêm package nếu Next.js + Tailwind đã giải quyết được.
- Không đổi cấu trúc thư mục đang có.

**Sau khi sửa:**

```bash
npm run build        # bắt buộc pass
npm run lint         # nếu project có
```

Rồi kiểm tra mobile → tablet → desktop. Báo cáo ngắn gọn: **đã sửa gì / vì sao / ảnh hưởng đâu**.

---

## Ba điều Claude hay làm sai trong dự án này — đừng làm

1. **Refactor quá tay.** Được giao sửa một section thì chỉ sửa section đó. Không "tiện tay dọn dẹp" file khác.
2. **Bịa dữ liệu để nội dung nghe hay hơn.** Không tự thêm "hơn 10 năm kinh nghiệm", "500+ khách hàng", "giao trong 14 ngày", tên thương hiệu vải, hay testimonial. Chưa có dữ liệu thật → `TODO(HAI):`.
3. **Viết nội dung sáo rỗng kiểu AI.** Cấm mở bài kiểu *"Trong cuộc sống hiện đại ngày nay, trang phục công sở đóng vai trò vô cùng quan trọng…"*. Viết cụ thể, như người có nghề. Xem `docs/05-content-seo.md`.

---

## Khi người dùng đưa yêu cầu chưa rõ

Đừng code ngay. Hỏi lại hoặc xác định: mục tiêu thật → vấn đề thật → phạm vi → ảnh hưởng. Nếu có cách tốt hơn thì đề xuất. Nếu người dùng nhầm thì nói thẳng.

---

## Cách viết báo cáo cho người dùng

Ngắn. Cụ thể. Tiếng Việt. Không thuật ngữ trần trụi.

Mẫu:

> **Đã sửa:** section Hero ở `web/src/components/home/Hero.tsx`
> **Vì:** trên điện thoại ảnh bị crop mất mặt người mẫu.
> **Cách sửa:** đổi `object-position` và giảm chiều cao hero trên mobile.
> **Ảnh hưởng:** chỉ homepage. Đã build pass, đã kiểm tra 390px / 768px / 1440px.

---

## Nhắc lại nguyên tắc quan trọng nhất

**Accuracy over agreement. Preserve data. Understand before changing. Small controlled changes. Human approval for important actions.**
