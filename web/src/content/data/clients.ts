/**
 * Section "HAI Fashion in real life".
 * ⚠️ docs/00 mục 6 + docs/06: KHÔNG bịa tên khách, tên công ty, chức danh, testimonial.
 * Mỗi case chỉ được mô tả loại trang phục + ngữ cảnh sử dụng cho tới khi có ảnh thật
 * và có sự đồng ý bằng văn bản của khách hàng.
 */

export type ClientCase = {
  id: string;
  context: string;
  garment: string;
  note: string;
  shot: { title: string; note: string };
};

export const clientCases: ClientCase[] = [
  {
    id: 'case-01',
    context: 'Họp lãnh đạo',
    garment: 'Vest nữ 2 khuy, ve nhọn',
    note: 'Dáng ôm nhẹ ở eo, chiều dài áo canh theo tỷ lệ người mặc.',
    shot: { title: 'Case 01', note: 'Khách nữ · vest công sở' },
  },
  {
    id: 'case-02',
    context: 'Gặp đối tác',
    garment: 'Suit nam single-breasted',
    note: 'Vai canh theo độ xuôi vai thật, không dùng đệm vai cứng.',
    shot: { title: 'Case 02', note: 'Khách nam · vest công sở' },
  },
  {
    id: 'case-03',
    context: 'Đội ngũ bán hàng',
    garment: 'Đồng phục vest công ty',
    note: 'Cùng một thiết kế, cắt riêng theo số đo từng người.',
    shot: { title: 'Case 03', note: 'Đội ngũ doanh nghiệp' },
  },
];
