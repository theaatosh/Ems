import React, { useEffect, useState } from 'react'

export const Header = ({data}) => {
  const[userName,setUserName]=useState('');
  
  useEffect(()=>{
    if(!data){
      setUserName('Admin')
    }
    else{
      setUserName(data.name);
    }

  },[])

  const logOutUser=()=>{
    localStorage.removeItem('loggedInUser');
    window.location.reload();
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl '>Hello <br /><span className='text-3xl font-semibold'>{userName}</span></h1>
      <button className='bg-red-600 text-lg font-medium px-4 py-2 rounded-lg ' onClick={logOutUser}>Log Out</button>
    </div>
  )
}


 