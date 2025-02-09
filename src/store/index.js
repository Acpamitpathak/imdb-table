import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";

// Create and export the Redux store
const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
