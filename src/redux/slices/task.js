import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: [],
};

export const task = createSlice({
  name: "task",
  initialState,
  reducers: {
    push: (state, action) => {
      state.items.push(action.payload);
      toast.success("Task Created");
    },
    deleteTask: (state, action) => {
      if (!action.payload?.id) return;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      toast.error("Task Deleted");
    },
    update: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload }; // Use the spread operator!
        } else {
          return item;
        }
      });
      toast.success("Task Updated");
    },
  },
});

// Action creators are generated for each case reducer function
export const { push, deleteTask, update, editTask } = task.actions;

export default task.reducer;
