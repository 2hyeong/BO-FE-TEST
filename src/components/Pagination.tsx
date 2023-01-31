import { Fragment } from "react";
// style
import "./Pagination.css";
// components
import Button from "./Button";
import Select from "./Select";
// type
import type { IOption } from "./Select";
import type { RootState } from "../store/store";
import type { pageOptions } from "./types/types";
// store
import { useDispatch, useSelector } from "react-redux";
import { updateQuery } from "../store/reducers/queryReducer";
// utils
import { getParams, push } from "../utils/params";

interface IPagination {
  total: number;
}

export default function Pagination({ total = 0 }: IPagination) {
  const query = useSelector((state: RootState) => state.query);
  const dispatch = useDispatch();
  const params = getParams();

  const options: IOption[] = [
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

  const page = Math.ceil(total / query.pageOptions);

  const onClickPage = (page: number) => {
    dispatch(
      updateQuery({
        ...query,
        page,
      })
    );
    push({ key: "page", value: page.toString() });
  };

  const onChangeSelect = (pageOptions: pageOptions) => {
    dispatch(
      updateQuery({
        ...query,
        pageOptions,
      })
    );
    push({ key: "pageOptions", value: pageOptions.toString() });
  };

  return (
    <section id="pagination">
      <div className="p-4 d-flex justify-center align-center">
        페이지당 행:{" "}
        <Select
          defaultValue={params?.pageOptions || query.pageOptions.toString()}
          options={options}
          className="border-0 mx-2"
          callback={(v) => onChangeSelect(v)}
        />
        <>
          <Button outlined onClick={() => onClickPage(1)}>
            {"|<"}
          </Button>
          <Button outlined onClick={() => onClickPage(query.page - 1)}>
            {"<"}
          </Button>
          {page > 0
            ? [...Array(page)].map((v: null, key: number) => {
                return (
                  <Fragment key={`pagination-${key}`}>
                    <Button
                      className={key === query.page - 1 ? "isActive" : ""}
                      outlined
                      onClick={() => onClickPage(key + 1)}
                    >
                      {key + 1}
                    </Button>
                  </Fragment>
                );
              })
            : ""}
          <Button outlined onClick={() => onClickPage(query.page + 1)}>
            {">"}
          </Button>
          <Button outlined onClick={() => onClickPage(page)}>
            {">|"}
          </Button>
        </>
      </div>
    </section>
  );
}
