import {createContext, useState} from "react"

export const TodoContext = createContext();

export const TodoProvider = (props) => {

    // in order to save data from local storage if the page is refresh
    const getTodos = JSON.parse(localStorage.getItem('todos'));

    const [todos, setTodos] = useState(getTodos ? getTodos : [])

    return(
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    )
}