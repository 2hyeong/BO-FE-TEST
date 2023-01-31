import { SyntheticEvent, useEffect } from "react";
// components
import Button from "../Button";
import Divider from "../Divider";
import Select from "../Select";
import TextField from "../TextField";
// hooks
import useInputQuery from "../../hooks/useInputQuery";
// store
import { useDispatch, useSelector } from "react-redux";
import { updateQuery } from "../../store/reducers/queryReducer";
// utils
import { getParams, push } from "../../utils/params";
// type
import type { RootState } from "../../store/store";
import type { filter, pageOptions } from "../types/types";
// constant
import { filterOptions } from "../constant/product";

export default function ProductSearch() {
  const params = getParams();

  const { inputRef } = useInputQuery();

  const query = useSelector((state: RootState) => state.query);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateQuery({
        ...query,
        q: inputRef.current?.value || "",
        filter: (params.filter as filter) || "all",
        pageOptions: (Number(params.pageOptions) as pageOptions) || 10,
        page: Number(params?.page) || 1,
      })
    );
  }, [inputRef.current?.value, params.filter, params.pageOptions, params.page]);

  const onChangeSelect = (value: string) => {
    push({
      key: "filter",
      value,
    });

    dispatch(
      updateQuery({
        ...query,
        q: inputRef.current?.value || "",
        filter: value as filter,
      })
    );
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    push({
      key: "q",
      value: inputRef.current?.value || "",
    });

    push({
      key: "page",
      value: "1",
    });

    dispatch(
      updateQuery({
        ...query,
        q: inputRef.current?.value || "",
        filter: query.filter,
      })
    );
  };

  return (
    <section className="d-flex flex-column text-left bg-white m-4 mb-0 rounded">
      <div className="p-4 align-center">
        <span className="font-bold">상품 검색</span>
      </div>
      <Divider />
      <div className="p-4 d-flex align-center overflow-x-auto">
        <span className="font-bold">검색</span>
        <form className="d-flex" onSubmit={(e: SyntheticEvent) => onSubmit(e)}>
          <Select
            className="ml-4"
            options={filterOptions}
            defaultValue={params.filter || query.filter}
            callback={onChangeSelect}
          />
          <TextField ref={inputRef} className="ml-4" />
          <Button className="ml-4" isDark type="submit">
            조회
          </Button>
        </form>
      </div>
    </section>
  );
}
