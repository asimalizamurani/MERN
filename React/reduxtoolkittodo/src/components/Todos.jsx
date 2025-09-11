import React from 'react'
import { useSelector, useDispatch} from "react-redux"
import { removeTodo} from "../features/todo/todoSlice"


const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  
  return (
    <>
    <div>
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      {
        todos.map((todo) => (
          <div key={todo.id} className="flex items-center justify-between mb-2">
            <span className="text-lg">{todo.text}</span>
            <button 
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default Todos