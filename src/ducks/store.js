import { configureStore } from "@reduxjs/toolkit";
import todoList from "./todoList";

export default configureStore({
  reducer: {
    todoList,
  },
});
