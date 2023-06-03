import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  limit: 10,
};

export const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    decrementPage: (state) => {
      state.page -= 1;
    },
    firstPage: (state) => {
      state.page = 1;
    },
    lastPage: (state) => {
      state.page = 10;
    }
  },
});

export const { incrementPage, decrementPage, firstPage, lastPage } = pagesSlice.actions;

export default pagesSlice.reducer;