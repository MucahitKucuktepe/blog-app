import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  userBlogs: [],
  categories: [],
  blogsDetail: [],
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
    getBlogsDetailSucces: (state, action) => {
    
      state.blogsDetail = action.payload.data;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchFail, getBlogsSuccess, getBlogsDetailSucces } =
  blogSlice.actions;

export default blogSlice.reducer;
