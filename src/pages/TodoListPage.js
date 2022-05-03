import useListOfTodos from "hooks/Implementation/useListOfTodos";
import React, { ReactNode } from "react";
import { IUseListOfTodos } from "hooks/Interfaces/IUseListOfTodos";

const TodoListPage = (): ReactNode => {
  const { data }: IUseListOfTodos = useListOfTodos();
  return (
    <div>
      {data.map(({ id, title, completed }) => (
        <div
          style={{ textDecorationLine: completed ? "line-through" : "none" }}
          key={id}
        >
          {title}
        </div>
      ))}
    </div>
  );
};

export default TodoListPage;
