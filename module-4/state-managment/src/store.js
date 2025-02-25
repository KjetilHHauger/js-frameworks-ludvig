import { create } from "zustand";

export const useStore = create((set) => ({
  todos: [
    {
      id: 1,
      text: "Wake up",
    },
    {
      id: 2,
      text: "Shower",
    },
  ],
  setTodos: (todos) =>
    set({
      todos: todos,
    }),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((item) => item.id !== id),
    })),
}));
