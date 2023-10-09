import React from 'react'

const Exercesise5 = () => {
    const animals =['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

    const animal = animals.map((anim)=>{
return (<li>֍{anim}</li>)
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
