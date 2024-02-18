import { configureStore } from "@reduxjs/toolkit";
import movieReducers from "./movieSlice";

const store = configureStore({
  reducer: {
    movies: movieReducers,
  },
});
export default store;
