import React from 'react'

const SingleAnimal =  (props) => {
     return(
    <div className='border p-5 border-gray-400 flex gap-2'>
<img src={props.img} width="40px" alt="dog" />
 <p>{props.name}</p>
 </div>
     )
}

export default SingleAnimal