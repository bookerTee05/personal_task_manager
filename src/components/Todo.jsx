import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'


// This component is for individual todo item
const Todo = (props) => {
    const [todos, setTodos] = useContext(TodoContext);

    return (
        <>
            <p className='todo-item'>
                <input type='checkbox' id={props.id} value={props.id} />
                <label htmlFor={props.id}>{props.title}</label>
                <button type="button">Delete</button>
            </p>
        </>
    )
}

export default Todo