import React, { useState } from 'react'

// This component is for input and add the task to the list

const AddTodo = () => {
    const [title, setTitle] = useState('')

  return (
    <>
        <div className='form-input-container'>
            <input value={title} className='form-input' onChange={e => setTitle(e.target.value)} placeholder='Add to do..'/>
            <button type='button' className='form-btn'>Add</button>
        </div>
    </>
  )
}

export default AddTodo