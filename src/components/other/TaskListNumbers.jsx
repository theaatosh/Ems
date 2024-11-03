import React from 'react'

export const TaskListNumbers = ({data}) => {
  
  return (
    <div className='flex  justify-between gap-5 mt-10 '>
      <div className='py-6 px-9 w-[45%] bg-red-400 rounded-xl '>
      <h2 className='font-boldn text-4xl'>{data.taskCounts.failed}</h2>
      <h3 className='font-semibold text-xl'>New Task</h3>
      </div>
      <div className='py-6 px-9 w-[45%] bg-blue-400 rounded-xl '>
      <h2 className='font-boldn text-4xl'>{data.taskCounts.active}</h2>
      <h3 className='font-semibold text-xl'>New Task</h3>
      </div>
      <div className='py-6 px-9 w-[45%] bg-green-400 rounded-xl '>
      <h2 className='font-boldn text-4xl'>{data.taskCounts.completed}</h2>
      <h3 className='font-semibold text-xl'>New Task</h3>
      </div>
      <div className='py-6 px-9 w-[45%] bg-yellow-300 rounded-xl '>
      <h2 className='font-boldn text-4xl'>{data.taskCounts.active}</h2>
      <h3 className='font-semibold text-xl'>New Task</h3>
      </div>
    </div>
  )
}


