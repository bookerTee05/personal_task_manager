import React, { useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TodoContext } from '../context/TodoContext';

// This component is for input and add the task to the list

const AddTodo = () => {
    const [title, setTitle] = useState('');

    const [todos, setTodos] = useContext(TodoContext)

    // creating arrow function for saving the value to the main provider
    const addTodo = (e) => {
        // preventing from auto submission
        e.preventDefault();

        // check the title is blank or not 
        if('' === title || undefined === title) {
            alert('Field can not be black');
            return;
        }

        // spreading the pervious array and add the new title
        const newTodos = [...todos, {id: uuidv4(), title: title, completed: false}];
        setTodos(newTodos);
        setTitle('')

    }

    // Store the data on local storage using useEffect hooks
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

  return (
    <>
        <div className='form-input-container'>
            <input value={title} className='form-input' onChange={e => setTitle(e.target.value)} placeholder='Add to do..'/>
            <button type='button' className='form-btn' onClick={addTodo}>Add</button>
        </div>
    </>
  )
}

export default AddTodo