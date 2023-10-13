import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Form = ({ addTodo }) => {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit} className='border p-5 w-1/2 rounded-full flex justify-between'>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} className='border-none px-44' placeholder='add todo...' />
            <button><FontAwesomeIcon icon={faPlus} /></button>
        </form >
    )
}

export default Form