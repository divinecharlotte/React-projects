import {React} from 'react'

const Card = (props) => {
  return (

<div className='bg-white  p-3 rounded-md text-center'>
    <img src={props.img} width="400px" alt='avatar' />
    <h1 className='font-bold text-lg '>{props.name}</h1>
    <p>{props.paragraph}</p>
        </div>

  )
}

export default Card