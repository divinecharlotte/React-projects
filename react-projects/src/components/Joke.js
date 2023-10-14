import React from 'react'

const Joke = (props) => {
  return (
    <div className='bg-white  p-3 rounded-md text-center'>
        <h1 className='font-bold text-lg w-[80%]'>
{props.title}
        </h1>
        <p>{props.paragraph}</p>
    </div>
  )
}

export default Joke