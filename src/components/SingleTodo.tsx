import { Trash2 } from "lucide-react";
import { Check } from "lucide-react";

type Todo = {
  id: number;
  todo: string;
  isComplete: boolean;
};

type Todos = {
  id: number;
  todo: string;
  isComplete: boolean;
};

type Props = {
  todo: Todo;
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDelete: () => void = () => {
    setTodos(todos.filter((curr) => curr.id !== todo.id));
  };

  const handleComplete: () => void = () => {
    setTodos(todos.map( curr => curr.id === todo.id ? {...todo , isComplete:true} : curr ));
  };

  return (
    <div
      className={`single-todo-wrapper ${todo.isComplete ? "completed" : ""}`}
    >
      <input
        type="text"
        value={todo.todo}
        readOnly={true}
        className={`todo-content`}
      />
      <div className="actions-wrapper">
        <Trash2 className="icons" onClick={handleDelete} />
        <Check className="icons" onClick={handleComplete} />
      </div>
    </div>
  );
};

export default SingleTodo;
