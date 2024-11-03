import { Header } from '../other/Header'
import { TaskListNumbers } from '../other/TaskListNumbers'
import { TaskList } from '../TaskList/TaskList'

export const EmployeeDashboard = ({data}) => {


  return (
    <div>
      <div className='p-10 bg-[#1C1C1C] h-screen w-[100%]'>
        <h1>{data.id}</h1>
        <Header data={data}/>
        <TaskListNumbers data={data}/>
        <TaskList data={data}/>
      </div>
    </div>
  )
}


