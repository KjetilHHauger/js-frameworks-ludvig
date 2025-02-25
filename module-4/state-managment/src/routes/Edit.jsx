import { Link } from "react-router-dom";
import { useStore } from "../store";
import { Header } from "../components/Header";

export function Edit() {
  const { todos, removeTodo } = useStore();
  return (
    <>
      <Header />
      <h1>Edit page</h1>
      {todos.map((item) => (
        <div key={item.id} className="flex gap-2">
          <p>{item.text}</p>
          <button
            onClick={() => {
              console.log(item.id);
              removeTodo(item.id);
            }}
            className="border-red-500 border"
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
