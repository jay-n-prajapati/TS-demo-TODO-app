type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
};

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <>
      <form action="" className="todo-form">
        <input
          type="text"
          className="todo-input"
          value={todo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTodo(e.target.value)
          }
        />
        <button className="add-btn" onClick={(e : React.MouseEvent<HTMLButtonElement> ) =>{ e.preventDefault();  handleAdd() }}>
          Add
        </button>
      </form>
    </>
  );
};

export default InputField;
