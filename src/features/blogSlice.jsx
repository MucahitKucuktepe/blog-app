import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  userBlogs: [],
  categories: [],
  blogsDetail: [],
  userBlogs: [],
  like: {},
  loading: false,
  error: false,
  totalPages:"",
  currentPage: "",
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    getBlogsSuccess: (state, action) => {
      console.log(action.payload);
      state.blogs = action.payload.data;
      state.currentPage=action.payload.details.pages.current
      state.totalPages=action.payload.details.pages.total
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
    getUserBlogsSuccess: (state, action) => {
      state.userBlogs = action.payload.data;
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
  getCategoriesSlice,
  getUserBlogsSuccess,
  getBlogsTotalRecord,
} = blogSlice.actions;

export default blogSlice.reducer;
