import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuery } from "../store/reducers/queryReducer";
import type { RootState } from "../store/store";
import { getParams } from "../utils/params";

export default function useInputQuery() {
  const query = useSelector((state: RootState) => state.query);
  const dispatch = useDispatch();
  const { q } = getParams();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = q || "";
      dispatch(
        updateQuery({
          ...query,
          q: inputRef.current?.value || "",
        })
      );
    }
  }, [inputRef.current]);

  return {
    inputRef,
  };
}
