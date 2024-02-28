import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'


// This component is for individual todo item
const Todo = (props) => {
    const [todos, setTodos] = useContext(TodoContext);

    // make the checkbox return true
    const completeTodo = (e) => {
        const filterTodos = todos.map((item) => {
            if(item.id === e.target.value) {
                item.completed = false;
                if (e.target.checked) {
                    item.completed = true;
                }
            }

            return item;
        })

        setTodos(filterTodos);

    }

    return (
        <>
            <p className='todo-item'>
                <input type='checkbox' id={props.id} value={props.id} onChange={e => completeTodo(e)} />
                <label htmlFor={props.id}>{props.title}</label>
                <button type="button">Delete</button>
            </p>
        </>
    )
}

export default Todo