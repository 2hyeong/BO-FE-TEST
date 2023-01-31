import { QueryState } from "../store/reducers/queryReducer";

export type Key = keyof QueryState;

interface IBuild {
  key: Key;
  value: string;
}

interface IQueryString {
  limit?: string;
  filter?: string;
  page?: string;
  q?: string;
  pageOptions?: string;
}

export const getParams = (): IQueryString => {
  const searchParams = new URLSearchParams(window.location.search);

  const limit = searchParams.get("limit") || "";
  const filter = searchParams.get("filter") || "";
  const page = searchParams.get("page") || "";
  const q = searchParams.get("q") || "";
  const pageOptions = searchParams.get("pageOptions") || "";

  return {
    limit,
    filter,
    page,
    q,
    pageOptions,
  };
};

const buildQueryString = ({
  filter,
  q,
  page,
  limit,
  pageOptions,
}: IQueryString) => {
  let qs = "?";

  if (filter) qs += `filter=${filter}&`;
  if (q) qs += `q=${q}&`;
  if (page) qs += `page=${page}&`;
  if (limit) qs += `limit=${limit}&`;
  if (pageOptions) qs += `pageOptions=${pageOptions}&`;

  return qs;
};

export const push = ({ key, value }: IBuild) => {
  let { limit, filter, page, q, pageOptions } = getParams();

  if (key === "limit") limit = value;
  if (key === "page") page = value;
  if (key === "filter") filter = value;
  if (key === "q") q = value;
  if (key === "pageOptions") pageOptions = value;

  const qs = buildQueryString({ limit, filter, page, q, pageOptions });

  window.history.pushState({}, "", qs);
};
