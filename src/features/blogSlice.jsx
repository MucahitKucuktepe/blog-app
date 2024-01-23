import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  userBlogs: [],
  categories: [],
  blogsDetail: [],
  like: {},
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

    getBlogsLikesDetail: (state, action) => {
      console.log(action.payload);
      state.like = action.payload;
    },
    getCategoriesSlice: (state, action) => {
      state.categories = action.payload.data;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  getBlogsSuccess,
  getBlogsDetailSucces,
  getBlogsLikesDetail,
  getCategoriesSlice
} = blogSlice.actions;

export default blogSlice.reducer;
