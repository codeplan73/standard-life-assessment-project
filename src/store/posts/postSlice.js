import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: {},
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setPost, setPosts } = postSlice.actions;

export default postSlice.reducer;
