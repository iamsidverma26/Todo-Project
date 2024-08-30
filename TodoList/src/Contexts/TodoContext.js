import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"ToDo Msg",
            completed:false
        }
    ],
    addTodo : (id)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

})
export const TodoProvider = TodoContext.Provider
export const useTodo=()=>{
    return useContext(TodoContext)
}