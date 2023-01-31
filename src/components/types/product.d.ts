export type HeaderKey =
  | "id"
  | "title"
  | "brand"
  | "description"
  | "price"
  | "rating"
  | "stock";

export interface IHeader {
  key: HeaderKey;
  name: string;
}
