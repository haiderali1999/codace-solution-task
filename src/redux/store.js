import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import taskReducer from "./slices/task";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: taskReducer,
  },
});
