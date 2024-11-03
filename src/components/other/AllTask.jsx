import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

export const AllTask = () => {

    const authData=useContext(AuthContext);
    console.log(authData.employees);
    
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5   no-scrollbar">
        <div  className="bg-red-400 mb-2 py-2 px-4 flex justify-between items-center rounded-lg">
            <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
            <h3 className="text-lg font-medium w-1/5">New Task</h3>
            <h5 className="text-lg font-medium w-1/5">Active Task</h5>
            <h5 className="text-lg font-medium w-1/5">Completed</h5>
            <h5 className="text-lg font-medium w-1/5">Failed</h5>
        </div>

       <div className="">
       {authData.employees.map((elem,idx)=>{
            return (
        <div key={idx} className="border-emerald-500 border-2 mb-2 py-2 px-4 flex justify-between items-center rounded-lg">
            <h2 className="text-lg font-medium w-1/5 text-white-600">{elem.name}</h2>
            <h3 className="text-lg font-medium w-1/5 text-blue-400">{elem.taskCounts.newTask}</h3>
            <h5 className="text-lg font-medium w-1/5 text-yellow-400">{elem.taskCounts.active}</h5>
            <h5 className="text-lg font-medium w-1/5 text-white-600">{elem.taskCounts.completed}</h5>
            <h5 className="text-lg font-medium w-1/5 text-red-600">{elem.taskCounts.failed}</h5>
        </div>
            )
        })}
        </div> 
       
    </div>
  )
}


