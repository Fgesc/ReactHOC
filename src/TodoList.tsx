import { withLoading } from './withLoadingHOC';
import type { ToDo } from './App';

type Props = {
  todos: ToDo[];
};

const TodoList = ({ todos }: Props) => {
  return (
    <ol>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ol>
  );
};

export const TodoListWithLoading = withLoading(TodoList);
