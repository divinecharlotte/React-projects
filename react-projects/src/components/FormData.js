import {React,useState} from 'react'

 const FormData = (props) => {
    const [FormData,SetFormData] = useState({
        firstName:"",
        secondName:""
    })

    const handleChange =(event)=>{
        const {name,value}= event.target
        SetFormData((prev)=>({
...prev,
[name]:value
        }))
        
    }
   
    const  handleclick=(e)=>{
      
        e.preventDefault()
         return alert(`Hello ${FormData.firstName} ${FormData.secondName} !`)
        }
  return (
    <div>
               <form  className='flex flex-col justify-center items-center'>
        <input
         className='p-2' 
         name='firstName' 
         value={FormData.firstName}
         onChange={handleChange}
          type='text'
           placeholder='first name'
           />
        <input
         className='p-2'
          type='text'
           name='secondName'
            value={FormData.secondName} 
            onChange={handleChange}
            placeholder='last name'
            />
        <button onClick={handleclick}
        className='bg-red-700 text-white px-16 py-2 '
         >
            GREET ME
            </button>
        </form> 
    </div>
  )
}

export default FormData