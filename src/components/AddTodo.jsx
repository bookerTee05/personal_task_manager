import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext';

// This component is for input and add the task to the list

const AddTodo = () => {
    const [title, setTitle] = useState('');

    const [todos, setTodos] = useContext(TodoContext)

    // creating arrow function for saving the value to the main provider
    const addTodo = (e) => {
        // preventing from auto submission
        e.preventDefalut();

        // check the title is blank or not 
        if('' === title || undefined === title) {
            alert('Field can not be black');
            return;
        }

        // spreading the pervious array and add the new title
        const newTodos = [...todos, {id: 1, title: title, completed: false}];
        setTodos(newTodos);
        setTitle('')

    }

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