// hooks
import useProduct from "../../hooks/quries/useProduct";
import type { IProduct } from "../../hooks/quries/useProduct";
// store
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
// utils
import { toCurrency } from "../../utils/currency";
// components
import Pagination from "../Pagination";
// style
import "./ProductDataTable.css";

export type IHeaderKey =
  | "id"
  | "title"
  | "brand"
  | "description"
  | "price"
  | "rating"
  | "stock";

interface IHeader {
  key: IHeaderKey;
  name: string;
}

export default function ProductDataTable() {
  const headers: IHeader[] = [
    { key: "id", name: "상품번호" },
    { key: "title", name: "상품명" },
    { key: "brand", name: "브랜드" },
    { key: "description", name: "상품내용" },
    { key: "price", name: "가격" },
    { key: "rating", name: "평점" },
    { key: "stock", name: "재고" },
  ];

  const { isError, data, error } = useProduct();
  const { page, pageOptions, filter, q } = useSelector(
    (state: RootState) => state.query
  );

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  const isMatchQs = (s: string) => !!s?.match(new RegExp(q, "gi"));

  const products: IProduct[] =
    data?.products.filter((product) => {
      if (filter === "all") {
        if (
          isMatchQs(product["title"]) ||
          isMatchQs(product["brand"]) ||
          isMatchQs(product["description"])
        ) {
          return true;
        }
        return false;
      }
      if (product[filter].match(new RegExp(q, "gi"))) return true;
      return false;
    }) || [];

  const offset = (page - 1) * Number(pageOptions);

  return (
    <section className="mx-4 overflow-x-auto">
      <p className="my-8">
        검색된 데이터: <b>{products?.length || 0}</b>건
      </p>
      <div className="bg-white rounded w-full d-table">
        <table>
          <thead>
            <tr>
              {headers?.map((column) => (
                <th key={column.key}>{column.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products
              .slice(offset, offset + Number(pageOptions))
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.brand}</td>
                  <td>
                    {item.description.length > 40
                      ? item.description.substring(0, 40) + "..."
                      : item.description}
                  </td>
                  <td>{toCurrency(item.price)}</td>
                  <td>{item.rating}</td>
                  <td>{item.stock}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <Pagination total={products?.length || 0} />
      </div>
    </section>
  );
}
