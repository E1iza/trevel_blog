import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice.js";
import formReducer from "./formSlice.js";

export default configureStore({
  reducer: {
    posts: postsReducer,
    form: formReducer,
  },
})
