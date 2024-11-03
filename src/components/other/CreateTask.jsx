import { useState } from "react";
import { NewTask } from "../TaskList/NewTask";

export const CreateTask = () => {

    const[taskData,setTaskData]=useState({
        taskTitle:'',
        taskDescription:"",
        taskDate:"",
        assignTo:"",
        category:"",
        active:false,
        newTask:true,
        failed:true,
        completed:false
    })
    const handleChange=(e)=>{
        const{value,name}=e.target;
        setTaskData((prev)=>({
            ...prev,[name]:value
        }))
        
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        localStorage.setItem('createdTask',JSON.stringify(taskData));
        console.log(taskData);
        
        
        setTaskData({
            taskTitle:'',
            taskDescription:"",
            taskDate:"",
            assignTo:"",
            category:""
        });

    }
  return (
    <div className=" flex items-center justify-center bg-[#1c1c1c] mt-5 rounded-md" >
        <form onSubmit={submitHandler}className=" w-screen flex justify-between items-center">

            <div className="flex flex-col   w-1/2 p-5 ">

            <div className="mt-2"> 
                <h3>Task Title</h3>
            <input type="text" required value={taskData.taskTitle} onChange={handleChange} name='taskTitle' placeholder="Make a ui design" className=" py-1 px-1  bg-transparent border-2 placeholder:text-[#e0e0e0] rounded-md w-3/4"/>
            </div >
            <div className="mt-2">
            <h3>Date</h3>
            <input type="date" required name="taskDate" value={taskData.taskDate} onChange={handleChange} className=" py-1 px-1 bg-transparent border-2 placeholder:text-[#e0e0e0] rounded-md w-3/4" />
            </div>
            <div className="mt-2">
            <h3>Assign To</h3>
            <input type="text" required name="assignTo" onChange={handleChange} value={taskData.assignTo} placeholder='employee name' className=" py-1 px-1 bg-transparent border-2 placeholder:text-[#e0e0e0] rounded-md w-3/4" />
            </div>
            <div className="mt-2">
            <h3>Category</h3>
            <input type="text" required name="category" onChange={handleChange} value={taskData.category} placeholder="Design,Development, etc..." className=" py-1 px-1 bg-transparent border-2 placeholder:text-[#e0e0e0] rounded-md w-3/4"/>
            </div>

            </div>
            
                
            <div className=" w-1/2 flex flex-col gap-3 items-end  p-5 ">
                <div className="w-3/4">
                    <h3>Description</h3>
                    <textarea name='taskDescription' onChange={handleChange} value={taskData.taskDescription} placeholder="Detailed description of task(Max 500 word)" className=" py-1 px-1 w-full h-44 outline-none border-2 placeholder:text-[#e0e0e0] rounded-md bg-transparent"></textarea>
                </div>
                    <button type="submit" required className="w-3/4  py-3 bg-emerald-400 hover:bg-emerald-600 outline-none border-none rounded-md">Create Task</button>
            </div>
        </form>
    </div>
  )
}


