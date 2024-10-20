import React from 'react'

export const Login = () => {
  return (
    <div className='flex items-center justify-center'> 
     <div className='border-2 border-red-600'>
        <form >
            <input type="email" placeholder='Enter your email'/>
            <input type='password'/>
        </form>
     </div>
    </div>
  )
}


