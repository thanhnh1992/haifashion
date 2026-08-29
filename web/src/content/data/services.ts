/** Ba nhóm khách hàng, lý do may đo, quy trình, tay nghề. Nội dung tách khỏi giao diện. */

export type Audience = {
  id: string;
  en: string;
  title: string;
  description: string;
  href: string;
  shot: { title: string; note: string };
};

/** Thứ tự đặt Nữ trước Nam là có chủ đích — docs/01 mục 4: không để website lệch về vest nam. */
export const audiences: Audience[] = [
  {
    id: 'nu',
    en: 'Executive Women',
    title: 'Vest & công sở nữ',
    description:
      'May đo cho nữ quản lý, doanh nhân và chuyên gia — chú trọng vai, eo và tỷ lệ cơ thể.',
    href: '#lien-he',
    shot: { title: 'Nữ executive', note: 'Toàn thân hoặc 3/4 · trong môi trường làm việc' },
  },
  {
    id: 'nam',
    en: 'Executive Men',
    title: 'Vest & công sở nam',
    description:
      'May đo cho nam quản lý và doanh nhân — tư vấn form theo môi trường sử dụng.',
    href: '#lien-he',
    shot: { title: 'Nam executive', note: 'Toàn thân hoặc 3/4 · trong môi trường làm việc' },
  },
  {
    id: 'doanh-nghiep',
    en: 'Corporate Teams',
    title: 'Đồng phục doanh nghiệp',
    description:
      'Đồng bộ hình ảnh cho đội ngũ bán hàng, quản lý và nhân viên văn phòng.',
    href: '#doanh-nghiep',
    shot: { title: 'Đội ngũ doanh nghiệp', note: 'Nhóm 4–8 người mặc đồng phục · ảnh thật tại công ty' },
  },
];

export type Reason = { title: string; body: string };

export const reasons: Reason[] = [
  {
    title: 'May theo vóc dáng',
    body: 'Mỗi bộ trang phục được điều chỉnh dựa trên hình thể thực tế của người mặc, không theo bảng size chung.',
  },
  {
    title: 'Tư vấn theo môi trường sử dụng',
    body: 'Trang phục cho CEO, cho đội sales, cho quản lý, cho sự kiện hay cho môi trường văn phòng không nên giống nhau.',
  },
  {
    title: 'Chú trọng form dáng',
    body: 'Đặc biệt ở phần vai, eo, chiều dài áo và tỷ lệ cơ thể — những chỗ quyết định bộ đồ trông vừa hay không.',
  },
  {
    title: 'Cá nhân hóa',
    body: 'Khách hàng chọn phong cách, chất liệu và các chi tiết hoàn thiện theo ý mình.',
  },
  {
    title: 'Dịch vụ doanh nghiệp',
    body: 'Triển khai đồng bộ hình ảnh cho cả đội ngũ, từ lãnh đạo tới nhân viên.',
  },
];

/** docs/00 mục 8. ⚠️ Không gắn thời gian cho bất kỳ bước nào khi chưa có số liệu thật. */
export const tailoringSteps: string[] = [
  'Tư vấn phong cách',
  'Chọn chất liệu',
  'Lấy số đo',
  'Thiết kế form',
  'May và hoàn thiện',
  'Thử & chỉnh sửa',
  'Nhận sản phẩm',
];

/** docs/00 mục 7 — quy trình doanh nghiệp 8 bước. */
export const corporateSteps: string[] = [
  'Tìm hiểu thương hiệu và nhu cầu',
  'Đề xuất thiết kế',
  'Chọn chất liệu',
  'Lấy số đo',
  'May mẫu',
  'Sản xuất',
  'Thử và điều chỉnh',
  'Bàn giao',
];

export type CraftPillar = { title: string; body: string; shot: { title: string; note: string } };

export const craftPillars: CraftPillar[] = [
  {
    title: 'Chất liệu',
    body: 'Chọn theo khí hậu và tần suất mặc, không chỉ theo màu.',
    shot: { title: 'Macro', note: 'Bề mặt vải, thấy sợi' },
  },
  {
    title: 'Cấu trúc',
    body: 'Phần dựng bên trong quyết định áo giữ form được bao lâu.',
    shot: { title: 'Macro', note: 'Vai áo & lớp lót' },
  },
  {
    title: 'Form dáng',
    body: 'Vai, eo, chiều dài áo — ba chỗ dễ nhìn ra nhất là may đo hay may sẵn.',
    shot: { title: 'Macro', note: 'Đường ly, phom eo' },
  },
  {
    title: 'Chi tiết',
    body: 'Khuy, ve, đường chỉ tay — nơi khách chọn được cá tính riêng.',
    shot: { title: 'Macro', note: 'Khuy, ve áo, đường chỉ' },
  },
];
