# 04 — DESIGN SYSTEM (PHASE 4)

> **Trạng thái: bảng màu ĐÃ CHỐT 28/08/2026 (mục 1). Font vẫn là đề xuất — chờ file logo gốc.**
> ⚠️ Nếu HAI Fashion có brand guideline chính thức → dùng brand guideline, bỏ phần đề xuất.

**Nguyên tắc số 1: không hard-code style rời rạc từng section.** Mọi giá trị phải là token trong `tailwind.config.ts` hoặc CSS variable. Thấy `#1a1a1a` hay `padding: 87px` viết thẳng trong component → là sai.

---

## 0. Hướng thiết kế: "Chalk & Cloth"

Ý tưởng lấy từ chính nghề may: **vạch phấn trắng của người thợ trên mặt vải sẫm**.

- Cấu trúc trang được chia bằng **kẻ chỉ mảnh 1px** — như vạch phấn đánh dấu trên vải, không phải bằng khung viền hay đổ bóng.
- Nền trung tính **lạnh** (không phải kem/be ấm), để ảnh thời trang nổi lên.
- Chỉ có **một màu nhấn duy nhất** — đỏ `#C62828` lấy từ bảng màu monamie.vn — dùng cực ít: eyebrow, số thứ tự, hover, gạch chân. Nền và chữ giữ trung tính đen–trắng–xám lạnh.

⚠️ **Vì sao không dùng hướng nền kem + serif + nâu đồng:** đó là combo mặc định mà mọi AI đều sinh ra, và nó tạo cảm giác "tailor Anh quốc cổ điển" — đúng thứ brief đã loại trừ ở mục 4.

---

## 1. Color tokens (ĐÃ CHỐT 28/08/2026)

> Product Owner chọn **bảng màu của monamie.vn**. Các giá trị dưới đây đọc trực tiếp từ
> CSS variable của trang đó: `--color #000000` · `--color_hover #C62828` · `--btn-button #C62828`
> · `--btn-hover #FFC107` · `--background-body #edf1f5` · chữ phụ `#303030`, `#656260`.
>
> ⚠️ **Cảnh báo đã nêu với Product Owner:** đỏ dùng nhiều sẽ rơi vào đúng thứ `docs/01` mục 6
> loại trừ ("xưởng may đồng phục giá rẻ — số điện thoại đỏ, nhiều banner"). Vì vậy đỏ chỉ được
> dùng làm **màu nhấn ≤ 5% diện tích**, đen vẫn là màu chính. Đây là cách chính monamie dùng
> đỏ ở `--color_hover`.

Nguồn duy nhất trong code: `web/tailwind.config.ts`.

### Light — nền chính của website

| Token | Giá trị | Dùng ở đâu |
|---|---|---|
| `ground` | `#EDF1F5` | Nền chính (xám lạnh, lấy từ `--background-body`) |
| `surface` | `#FFFFFF` | Nền card khi cần tách khỏi nền |
| `surface-2` | `#E1E7ED` | Nền khung ảnh, vùng trung tính |
| `ink` | `#000000` | Chữ chính, nền nút chính |
| `ink-soft` | `#303030` | Chữ phụ, mô tả |
| `ink-muted` | `#656260` | Caption, label |
| `line` | `#D4DBE2` | Kẻ chỉ mảnh, viền |
| `line-strong` | `#B6BFC8` | Viền nút phụ |
| `accent` | `#C62828` | Đỏ nhấn. Eyebrow, số thứ tự, hover, gạch chân. **≤ 5% diện tích** |
| `accent-deep` | `#A31F1F` | Trạng thái nhấn sâu hơn |
| `accent-light` | `#F26364` | Đỏ dùng **trên nền đen** — đỏ `#C62828` trên nền đen chỉ đạt 3.7:1, không đạt AA |

### Band tối (section Doanh nghiệp, CTA cuối)

| Token | Giá trị |
|---|---|
| `band` | `#000000` |
| `band-ink` | `#EDF1F5` |
| `band-soft` | `#A8ACAD` |
| `band-line` | `#2A2F31` |
| `band-surface` | `#121416` |

### Cờ dữ liệu chưa xác nhận

| Token | Giá trị |
|---|---|
| `flag` | `#7A5300` |
| `flag-bg` | `#FFF3CD` |


**Quy tắc dùng màu:**

- Tối đa **2 màu chữ** trên một section.
- `accent` không quá **5%** diện tích màn hình. Không dùng accent cho nút chính.
- Nút chính = nền `ink`, chữ trắng. Nút phụ = viền `line`, chữ `ink`.
- Không gradient màu, không màu neon, không đỏ "sale".
- **Không làm dark mode** ở giai đoạn này (không có trong brief).

**Tương phản:** mọi cặp chữ/nền phải đạt WCAG AA (≥ 4.5:1 cho chữ thường). Chữ trên ảnh bắt buộc có overlay hoặc gradient bảo vệ.

---

## 2. Typography (đề xuất)

**Hướng: sans-only.** Nhà mốt hiện đại (Celine, Balenciaga, Jil Sander) đã bỏ serif từ lâu; serif display kéo thương hiệu về phía "tiệm may cổ điển" mà brief đã loại. Sức mạnh đến từ **độ tương phản trong cùng một họ chữ**, không phải từ việc ghép hai họ khác nhau.

| Vai trò | Font | Cách dùng |
|---|---|---|
| Display (H1/H2) | **Be Vietnam Pro** 200–250 | Cỡ rất lớn, tracking âm `-0.02em`, line-height 1.05. Mảnh và rộng — đây là "chất thời trang" |
| Body | **Be Vietnam Pro** 400 | Line-height 1.65 |
| Label / eyebrow | **Be Vietnam Pro** 500 | Uppercase, tracking `+0.16em`, 13px |
| Số thứ tự | **Be Vietnam Pro** 300, `tabular-nums` | Quy trình, đánh số |
| Trích dẫn (rất ít) | **Lora** italic | Chỉ dùng cho pull-quote, nếu cần |

✅ **Be Vietnam Pro do người Việt thiết kế, hỗ trợ đầy đủ dấu tiếng Việt** — không có rủi ro mất dấu. Đây là lý do chính chọn nó thay vì Inter.

⚠️ Nếu sau này muốn thêm font display khác: **bắt buộc kiểm tra đủ dấu tiếng Việt** (ạ ằ ẵ ộ ữ ự ỹ…) trước khi chốt. Rất nhiều font display trên Google Fonts không có bộ vietnamese.

Dùng `next/font` để tự host — **không** nhúng `<link>` Google Fonts (chậm + ảnh hưởng CLS).

### Type scale (mobile → desktop, dùng `clamp`)

| Token | Mobile | Desktop | Line-height | Dùng cho |
|---|---|---|---|---|
| `display` | 36px | 64px | 1.05 | H1 hero |
| `h1` | 30px | 48px | 1.1 | Tiêu đề trang |
| `h2` | 24px | 36px | 1.15 | Tiêu đề section |
| `h3` | 20px | 24px | 1.25 | Tiêu đề card |
| `body-lg` | 17px | 19px | 1.6 | Sub-headline, mô tả dẫn |
| `body` | 16px | 16px | 1.65 | Chữ thường |
| `small` | 14px | 14px | 1.5 | Caption |
| `eyebrow` | 13px | 13px | 1.4 | Label trên tiêu đề, uppercase, letter-spacing 0.16em. ⚠️ Nâng từ 11.5px lên 13px 28/08/2026: eyebrow là chữ có nghĩa, không để dưới 13px |

⚠️ **Chữ body không bao giờ nhỏ hơn 16px trên mobile.**

Độ dài dòng tối đa: **65–75 ký tự** (`max-w-[65ch]`). Không để đoạn text dài kéo hết chiều rộng màn hình.

---

## 3. Spacing

Thang 4px: `4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`

**Khoảng cách dọc giữa các section:**

| Breakpoint | Padding trên/dưới section |
|---|---|
| Mobile | 64px |
| Tablet | 80px |
| Desktop | 112–128px |

⚠️ Nhất quán. Không có section 90px còn section kế 200px. Không tạo khoảng trắng dài vô nghĩa trên mobile.

---

## 4. Grid & container

| Token | Giá trị |
|---|---|
| Container max-width | 1280px (nội dung), 1440px (khối ảnh rộng) |
| Padding ngang mobile | 20px |
| Padding ngang tablet | 32px |
| Padding ngang desktop | 48px |
| Grid | 12 cột desktop · 8 cột tablet · 4 cột mobile |
| Gap | 16px mobile · 24px tablet · 32px desktop |

Cho phép **full-bleed** (tràn viền) cho ảnh hero, dải portfolio và section Corporate.

---

## 5. Breakpoints

```
sm   640px    điện thoại ngang
md   768px    tablet dọc
lg  1024px    tablet ngang / laptop nhỏ
xl  1280px    desktop
2xl 1536px    màn lớn
```

⚠️ **Thiết kế từ 390px trở lên** (iPhone phổ biến). Test bắt buộc: **390 · 768 · 1440**.

---

## 6. Border radius & bóng đổ

| Token | Giá trị | Dùng cho |
|---|---|---|
| `radius-none` | 0 | Ảnh portfolio, ảnh hero — **mặc định cho ảnh** |
| `radius-sm` | 2px | Ô input, tag |
| `radius-md` | 4px | Nút, card |

Chất editorial → **góc gần vuông**. Không dùng bo tròn lớn (12px+), không dùng pill button.

**Bóng đổ:** gần như không dùng. Chỉ header sticky khi cuộn có `0 1px 0 rgba(0,0,0,0.06)`. Không shadow to trên card.

---

## 7. Buttons

| Loại | Style | Dùng cho |
|---|---|---|
| Primary | Nền `ink`, chữ trắng, cao 48px (mobile 52px), padding ngang 28px, radius 4px | Đặt lịch tư vấn |
| Secondary | Viền 1px `ink`, nền trong suốt | Tư vấn doanh nghiệp, Xem bộ sưu tập |
| Text link | Chữ + mũi tên `→`, gạch chân khi hover | Khám phá, Xem thêm |

**Yêu cầu:** vùng bấm tối thiểu **44×44px**. Có trạng thái `hover` / `focus-visible` rõ ràng (focus ring cho bàn phím). Transition 200ms `ease-out`.

**Cấm chữ trong nút:** MUA NGAY · BUY NOW · SALE · GIẢM GIÁ · ĐẶT NGAY KẺO HẾT.

---

## 8. Cards

| Loại | Tỷ lệ ảnh | Nội dung |
|---|---|---|
| Card nhóm khách hàng | 3:4 (desktop) · 4:5 (mobile) | Tiêu đề + 1 câu + text link |
| Card portfolio | 3:4 hoặc 4:5 | Tên loại trang phục (nhỏ, dưới ảnh) |
| Card khách hàng thật | 4:5 | Loại trang phục + ngữ cảnh + 1 câu ngắn |
| Card journal | 3:2 | Chuyên mục + tiêu đề |

Không viền dày, không shadow, không badge, không giá. Card = ảnh + rất ít chữ.

---

## 9. Tỷ lệ ảnh chuẩn

| Vị trí | Desktop | Mobile |
|---|---|---|
| Hero | 16:9 / full-bleed | 4:5 (crop dọc riêng) |
| Card nhóm | 3:4 | 4:5 |
| Portfolio | 3:4 | 4:5 |
| Macro chi tiết | 1:1 | 1:1 |
| Journal | 3:2 | 3:2 |

⚠️ Ảnh có người: luôn khai báo `object-position` canh vào mặt. Không để crop cắt mất mặt trên mobile.

---

## 10. Motion

**Cho phép:**

| Hiệu ứng | Thông số |
|---|---|
| Fade + rise khi vào viewport | opacity 0→1, translateY 16px→0, 500ms, `ease-out`, delay lệch nhau ≤ 80ms |
| Image zoom khi hover | scale 1 → 1.03, 600ms |
| Parallax | tối đa 8% dịch chuyển, chỉ ở hero hoặc 1 khối ảnh lớn |
| Carousel ngang | snap, kéo được bằng chuột và ngón tay |
| Header sticky | nền chuyển màu, 250ms |

**Cấm:** animation < 200ms (giật) hoặc > 800ms (chậm) · chữ chạy liên tục (marquee) · hiệu ứng bay nhảy, bounce, xoay · animation lặp vô hạn · hiệu ứng khiến trang giống landing page quảng cáo.

⚠️ Bắt buộc tôn trọng `prefers-reduced-motion: reduce` — tắt toàn bộ chuyển động, chỉ giữ fade.

---

## 11. Cách khai báo token

Ưu tiên **Tailwind config** làm nguồn duy nhất:

```ts
// web/tailwind.config.ts (rút gọn minh hoạ — file thật là nguồn duy nhất)
theme: {
  extend: {
    colors: {
      ground:  '#EDF1F5',
      surface: { DEFAULT: '#FFFFFF', 2: '#E1E7ED' },
      ink:     { DEFAULT: '#000000', soft: '#303030', muted: '#656260' },
      line:    { DEFAULT: '#D4DBE2', strong: '#B6BFC8' },
      accent:  { DEFAULT: '#C62828', deep: '#A31F1F', light: '#F26364' },
      band:    { DEFAULT: '#000000', ink: '#EDF1F5', soft: '#A8ACAD',
                 line: '#2A2F31', surface: '#121416' },
    },
    borderRadius: { sm: '2px', md: '4px' },
    maxWidth:     { container: '1280px', wide: '1440px' },
  }
}
```

Component dùng `bg-surface-2 text-ink-soft`, **không** dùng `bg-[#E1E7ED] text-[#303030]`.

---

## 12. Bản dựng tham chiếu & code thật

- `demo-giao-dien.html` — bản dựng HTML để duyệt bố cục (10 section homepage). Giữ lại làm mốc so sánh.
- `web/` — code Next.js thật, đã dựng theo đúng token ở file này. Từ 28/08/2026, **code là bản chuẩn**; bản HTML không còn được cập nhật.

---

## 13. Cần Product Owner chốt

1. ✅ **Bảng màu — đã chốt 28/08/2026:** dùng bảng màu monamie.vn (xem mục 1).
2. ⬜ **File logo gốc (SVG hoặc AI)** — chưa có. Hiện đang dùng wordmark chữ tạm ở
   `web/src/components/layout/Wordmark.tsx`. `docs/01` mục 8 cấm tự vẽ lại logo.
3. ⬜ **Font** — Be Vietnam Pro vẫn là đề xuất. Nếu HAI Fashion có font thương hiệu thì gửi file.
4. ⬜ **Mức dùng đỏ** — hiện đỏ chỉ là màu nhấn, nút chính nền đen. Nếu muốn nút chính đỏ hẳn
   như monamie thì đổi `bg-ink` → `bg-accent` trong `web/src/components/ui/Button.tsx`.
   Cân nhắc: đỏ càng nhiều thì càng xa "editorial thời trang", càng gần "xưởng may đồng phục".
