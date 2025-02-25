import "./App.css";
import { Header } from "./components/Header";
import { useStore } from "./store";

function App() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: "Wake up",
  //   },
  //   {
  //     id: 2,
  //     text: "Shower",
  //   },
  // ]);

  const { todos, setTodos } = useStore();
  return (
    <>
      <Header />
      <h1 className="text-2xl text-amber-500">Todos</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          // console.log(document.querySelector("#todo-input").value);
          // console.log(e.target.elements["todo-input"].value);
          const inputValue = document.querySelector("#todo-input").value;

          setTodos([
            ...todos,
            {
              id: todos.length ? todos[todos.length - 1].id + 1 : 1,
              text: inputValue,
            },
          ]);
        }}
      >
        <label htmlFor="todo-input">Todo item</label>
        <input
          type="text"
          id="todo-input"
          name="todo-input"
          className="border block"
        />
        <button type="submit" className="border rounded p-1">
          Add
        </button>
      </form>
      <div className="">
        {todos.map((item) => (
          <p key={item.id}>{item.text}</p>
        ))}
      </div>
    </>
  );
}

export default App;
