import React from 'react'
import { nanoid } from 'nanoid'
const Exercesise5 = () => {
    const animals =[{id: nanoid(),name:'dog'}, {id: nanoid(),name:'cat'},{id: nanoid(),name:'chicken'}, {id: nanoid(),name:'cow'}, {id: nanoid(),name:'sheep'}, {id: nanoid(),name:'horse'}]

    const animal = animals.map((anim)=>{
return (<li key={anim.id}>֍{anim.name}</li>)
    })
  return (
    <div
    className="w-full h-[900px] flex"
    >
    <ul   className='w-fit mx-auto'>
    {animal}
    </ul>
    </div>
  )
}

export default Exercesise5
