import  { useState } from 'react'

export const Login = ({handleLogin}) => {
  
  const[email,setEmail]=useState('');
  const[password,setpassWord]=useState('');
  const handleSubmit=(e)=>{
    handleLogin(email,password)
    e.preventDefault();    
    setEmail('');
    setpassWord('')
}
  return (
    <div className='flex h-screen w-screen items-center justify-center'> 
     <div className='border-2 border-emerald-600 rounded-xl p-20' >
        <form onSubmit={(e)=>handleSubmit(e)}className='flex flex-col items-center justify-center'>
            <input 
            required
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
             className='bg-transparent outline-none border-2  border-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'/>
            <input
             required 
             value={password}
             onChange={(e)=>{
              setpassWord(e.target.value);
             }}
             className=' bg-transparent outline-none border-2  mt-4 border-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-gray-400' type='password' placeholder='Enter password'/>
            <button className='text-white  outline-none   mt-4 bg-emerald-600  text-xl py-3 px-6 rounded-full placeholder:text-white' >Log in</button>
        </form>
     </div>
    </div>
  )
}


