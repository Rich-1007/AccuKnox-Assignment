import { configureStore } from "@reduxjs/toolkit";
import WidgetSlice from "./Slices/WidgetSlice";

export const store = configureStore({
  reducer: {
    categories: WidgetSlice,
  },
});
