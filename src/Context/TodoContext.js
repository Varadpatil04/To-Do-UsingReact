import { createContext, useContext } from "react"


export const TodoContext = createContext({
    todos : [{
        id : 1,
        todo : "Learn react",
        completed : false,
    }],
    addTodo : (todo) =>{},
    deleteTodo : (id) => {},
    toggleComplete : (id) =>{},
    editTodo : (id, todo) => {},

})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;