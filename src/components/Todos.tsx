import SingleTodo from "./SingleTodo";

type Todos = {
  id: number;
  todo: string;
  isComplete: boolean;
};

type Props = {
  todos: Todos[];
  setTodos : React.Dispatch<React.SetStateAction<Todos[]>>
};

const Todos = ({ todos , setTodos }: Props) => {
  return todos.length === 0 ? (
    <div>
      <h3 style={{textAlign:'center'}}>No Task Added...</h3>
    </div>
  ) : (
    <div className="todo-list-wrapper">
      {todos.map((todo) => (
        <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default Todos;
