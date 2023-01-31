import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { filter, pageOptions } from "../../components/types/types";

/* TODO - page 관련, filter 관련 분리 */
export interface QueryState {
  q: string;
  filter: filter;
  page: number;
  pageOptions: pageOptions;
  limit: number;
}

const initialState: QueryState = {
  q: "",
  filter: "all",
  page: 1,
  pageOptions: 10,
  limit: 10,
};

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    updateQuery: (state, action: PayloadAction<QueryState>) => {
      state.q = action.payload.q;
      state.filter = action.payload.filter;
      state.page = action.payload.page;
      state.pageOptions = action.payload.pageOptions;
      state.limit = action.payload.limit;
    },
  },
});

export const { updateQuery } = querySlice.actions;

export const selectQuery = (state: RootState) => state.query;

export default querySlice.reducer;
