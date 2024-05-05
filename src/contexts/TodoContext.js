import { createContext,useContext } from "react";

export const TodoContext = createContext({
  todos:[
    {
      id:1,
      todo:"Todo msg",
      completed:false,
    }
  ],
  addToDo:(todo)=>{},
  deleteToDo:(id)=>{},
  updateToDo:(id,todo)=>{},
  toggleComplete:(id)=>{},
})

export const useTodo = ()=>{
  return useContext(TodoContext);

}

export const TodoProvider= TodoContext.Provider;


