import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const List = ({id,text,deleteTodo}) => {
    const [isChecked, setChecked] = useState(false)
    const handleCheck = () => {
        setChecked((isChecked => !isChecked))

    }

    return (
        <li className='flex justify-between '>
            <div className='flex gap-5'>

                <input type="checkbox" onClick={handleCheck} />
                <p className={isChecked ? 'line-through' : 'no-underline'}>{text}</p>
            </div>
            <button onClick={() => deleteTodo(id)}>
                <FontAwesomeIcon icon={faTrash} style={{ color: "#e60505", }} />

            </button>
        </li>
    )
}

export default List