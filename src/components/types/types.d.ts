export type pageOptions = 10 | 20 | 50;
export type filter = "all" | "title" | "brand" | "description";

export interface IApiError {
  message: string;
  description: string;
  statusCode: string | number;
}
