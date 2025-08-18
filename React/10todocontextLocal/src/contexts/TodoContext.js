import { createContext, useContext } from 'react'

const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo msg",
      completed: false
    }
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {}
});

export const useTodo = () => {
  return useContext(TodoContext)
}


export const todoProvider = TodoContext.Provider();