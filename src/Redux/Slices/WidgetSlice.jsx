import { createSlice } from "@reduxjs/toolkit";
import json from "../../data.json";
export const WidgetSlice = createSlice({
  name: "Widget",
  initialState: {
    data: json,
  },
  reducers: {
    add: (state, action) => {
      const index = state.data.findIndex((item) => {
        if (item?.category === action.payload.category) {
          return true;
        }
        return false;
      });
      state.data[index].widgets.push({
        WidgetName: action.payload.WidgetName,
        WidgetData: action.payload.WidgetData,
      });
    },
    remove: (state, action) => {
      const index = state.data.findIndex((item) => {
        if (item?.category === action.payload.category) {
          return true;
        }
        return false;
      });
      state.data[index].widgets = state.data[index].widgets.filter(
        (item) => item?.WidgetName != action.payload.WidgetName
      );
    },
  },
});

export const { add, remove } = WidgetSlice.actions;
export default WidgetSlice.reducer;
