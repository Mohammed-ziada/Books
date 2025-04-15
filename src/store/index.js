import { configureStore } from "@reduxjs/toolkit";

import books from "./bookSlice";

const store = configureStore({
  reducer: {
    books,
  },
});
export default store;
