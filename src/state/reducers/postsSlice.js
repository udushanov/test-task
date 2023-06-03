import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPosts: (state, action) => ({ ...state, posts: action.payload }),
  },
});

export const { fetchPosts } = postsSlice.actions;

export default postsSlice.reducer;
