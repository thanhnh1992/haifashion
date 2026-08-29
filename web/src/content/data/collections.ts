/** Bộ sưu tập / portfolio. Ưu tiên ảnh lớn, rất ít chữ — docs/00 mục 10. */

export type CollectionFilter = { id: string; label: string };

export const collectionFilters: CollectionFilter[] = [
  { id: 'all', label: 'Tất cả' },
  { id: 'nu', label: 'Nữ' },
  { id: 'nam', label: 'Nam' },
  { id: 'doanh-nghiep', label: 'Doanh nghiệp' },
];

export type CollectionItem = { id: string; group: string; groupId: string; name: string };

export const collectionItems: CollectionItem[] = [
  { id: 'w-suit', group: 'Nữ', groupId: 'nu', name: "Women's suit" },
  { id: 'w-blazer', group: 'Nữ', groupId: 'nu', name: 'Blazer' },
  { id: 'w-dress', group: 'Nữ', groupId: 'nu', name: 'Office dress' },
  { id: 'm-suit', group: 'Nam', groupId: 'nam', name: 'Suit' },
  { id: 'm-blazer', group: 'Nam', groupId: 'nam', name: 'Blazer' },
  { id: 'c-uniform', group: 'Doanh nghiệp', groupId: 'doanh-nghiep', name: 'Office uniform' },
  { id: 'c-sales', group: 'Doanh nghiệp', groupId: 'doanh-nghiep', name: 'Sales team' },
];
