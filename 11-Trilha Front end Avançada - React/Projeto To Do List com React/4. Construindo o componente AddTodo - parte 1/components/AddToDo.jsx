import React, { useState } from 'react'

export function AddTodo() {
    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  return (
    <form className='add-todo-form'>
        <input type="text" placeholder='Digite uma nova tarefa...'
        className='todo-input'
        onChange={(e) => {setInputValue(e.target.value)}} />

        {/* <p>Digite uma tarefa..</p> */}

        <button type='submit' className='add-button'>Adicionar</button>
    </form>
  )
}

