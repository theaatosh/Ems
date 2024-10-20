import React from 'react'

export const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl '>Hello <br /><span className='text-3xl font-semibold'>Aatosh </span></h1>
      <button className='bg-red-600 text-lg font-medium px-4 py-2 rounded-lg '>Log Out</button>
    </div>
  )
}


 