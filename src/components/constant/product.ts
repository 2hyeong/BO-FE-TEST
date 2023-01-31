import type { IOption } from "../Select";

export const filterOptions: IOption[] = [
  {
    value: "all",
    label: "전체",
  },
  {
    value: "title",
    label: "상품명",
  },
  {
    value: "brand",
    label: "브랜드",
  },
  {
    value: "description",
    label: "상품내용",
  },
];

export const pageOptions: IOption[] = [
  {
    value: 10,
    label: "10",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 50,
    label: "50",
  },
];
