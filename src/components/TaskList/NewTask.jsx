import React from 'react'

export const NewTask = ({data}) => {
  return (
    <div className='w-[300px] h-full flex-shrink-0  bg-green-500 rounded-xl p-5'>
    <div className=' flex justify-between items-center'>
    <h3 className='bg-red-600 px-3 py-1  rounded'>{data.category}</h3>
    <h4 className='text-sm'>{data.date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
    <p className='text-sm mt-2'>{data.description}</p>
    <div className='mt-4'>
    <button>Accept Task</button>
    </div>
</div>
 
  )
}

