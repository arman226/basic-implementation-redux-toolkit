import useListOfTodos from "hooks/Implementation/useListOfTodos";
import React, { ReactNode } from "react";

const TodoListPage = (): ReactNode => {
  const { data } = useListOfTodos();
  return <div>{JSON.stringify(data)}</div>;
};

export default TodoListPage;
