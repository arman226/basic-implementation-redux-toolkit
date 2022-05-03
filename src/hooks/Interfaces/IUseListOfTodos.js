import { Todo } from "hooks/Entities/Todo";

export interface IUseListOfTodos {
  data: Array<Todo>;
  loading: Boolean;
  error: Boolean;
  dispatchListOfTodos: () => void;
}
