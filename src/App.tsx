import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import Todos from "./components/Todos";

type TodosObj = {
  id: number;
  todo: string;
  isComplete: boolean;
};

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodosObj[]>([]);

  const handleAdd: () => void = () => {
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isComplete: false }]);
      setTodo('');
    }
  };
  
  return (
    <>
      <div className="container">
        <header>
          <h2>TODO APP </h2>
        </header>
        <div className="wrapper">
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <Todos todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
}

export default App;
