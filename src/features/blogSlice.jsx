import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  userBlogs: [],
  categories: [],
  loading: false,
  error: false,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    getBlogsSuccess: (state, action) => {
      state.blogs = action.payload.data;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {fetchStart,fetchFail, getBlogsSuccess} = blogSlice.actions;

export default blogSlice.reducer;
