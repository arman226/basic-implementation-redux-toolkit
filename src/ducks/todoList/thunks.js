import { createAsyncThunk } from "@reduxjs/toolkit";
import listOfTodos from "data/services/listOfTodos";

export const getList = createAsyncThunk("todoList/getTodoList", async () => {
  try {
    const { data } = await listOfTodos.getListOfTodos();

    return data;
  } catch (e) {}
});
