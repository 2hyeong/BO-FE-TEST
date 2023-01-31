import { QueryState } from "../store/reducers/queryReducer";

export type Key = keyof QueryState;

interface IBuild {
  key: Key;
  value: string;
}

interface IQueryString {
  filter?: string;
  page?: string;
  q?: string;
  pageOptions?: string;
}

export const getParams = (): IQueryString => {
  const searchParams = new URLSearchParams(window.location.search);

  const filter = searchParams.get("filter") || "";
  const page = searchParams.get("page") || "";
  const q = searchParams.get("q") || "";
  const pageOptions = searchParams.get("pageOptions") || "";

  return {
    filter,
    page,
    q,
    pageOptions,
  };
};

export const buildQueryString = ({
  filter,
  q,
  page,
  pageOptions,
}: IQueryString) => {
  let qs = "?";

  if (filter) qs += `filter=${filter}&`;
  if (q) qs += `q=${q}&`;
  if (page) qs += `page=${page}&`;
  if (pageOptions) qs += `pageOptions=${pageOptions}&`;

  return qs;
};

export const push = ({ key, value }: IBuild) => {
  let { filter, page, q, pageOptions } = getParams();

  if (key === "page") page = value;
  if (key === "filter") filter = value;
  if (key === "q") q = value;
  if (key === "pageOptions") pageOptions = value;

  const qs = buildQueryString({ filter, page, q, pageOptions });

  window.history.pushState({}, "", qs);
};
