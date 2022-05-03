import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "ducks/todoList/thunks";
import { IUseListOfTodos } from "../Interfaces/IUseListOfTodos";

const useListOfTodos = (): IUseListOfTodos => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.todoList);

  const dispatchListOfTodos = (): void => {
    dispatch(getList());
  };

  const getListOfTodos = (): void => async (): void => {
    dispatchListOfTodos();
  };

  useEffect(getListOfTodos, []);

  return {
    data,
    loading,
    error,
    dispatchListOfTodos,
  };
};

export default useListOfTodos;
