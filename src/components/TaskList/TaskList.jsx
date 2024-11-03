import React from 'react'
import { AcceptTask } from './AcceptTask'
import { NewTask } from './NewTask'
import { CompletedTask } from './CompletedTask'
import { FailedTask } from './FailedTask'

export const TaskList = ({data}) => {
   
    
  return (
    <div className='h-[55%] overflow-x-auto w-full item-center  justify-start flex flex-nowrap gap-5 flex-shrink-0 mt-10 py-5 no-scrollbar '>

        {data.tasks.map((elem,index)=>{
            
          if(elem.status.active)
          return <AcceptTask key={index} data={elem}/>
          if(elem.status.newTask)
            return <NewTask key={index} data={elem}/>
          if(elem.status.completed)
            return <CompletedTask key={index} data={elem}/>
          if(elem.status.failed)
            return <FailedTask key={index} data={elem}/>
          
        })}
 
    </div>
  )
}
 

