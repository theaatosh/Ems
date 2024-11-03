import React, { useContext, useState } from 'react'
import { Login } from './components/Auth/Login'
import { EmployeeDashboard } from './components/Dashboard/EmployeeDashboard'
import { AdminDashboard } from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
const App = () => {
  const[user,setUser]=useState(null);
  const[loggedInUserData,setLoggedInUserData]=useState(null);
const authData=useContext(AuthContext);
  useEffect(() => {
    if(authData){
      const loggedInUser=JSON.parse(localStorage.getItem('loggedInUser'));      
      if(loggedInUser){
        setUser(loggedInUser.role)
        
      }
    }    
   
  }, [authData])
  useEffect(()=>{
    setLocalStorage();
      const employeeData=JSON.parse(localStorage.getItem('loggedInUser'));
      if(employeeData){
        setLoggedInUserData(employeeData.employee);
        
      }
      
  },[])
  
    const handleLogin=(email,password)=>{
     if(authData&&authData.admin.find((curElem)=>curElem.email===email && curElem.password===password))
      {
        
    setUser('admin');
       localStorage.setItem('loggedInUser',JSON.stringify({role:'admin' }));
      }
      else if(authData&&authData.employees.find((curElem)=>curElem.email===email && curElem.password===password)){
        const employee=authData.employees.find((curElem)=>curElem.email===email && curElem.password===password)
        
         setUser('employee');
         setLoggedInUserData(employee);
         
         localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',employee:employee}))

        
      }
      else{
        alert("invalid credentials");
      }
    }
  
    
  return (
    <>
   {!user? <Login handleLogin={handleLogin}/>:""} 
    {user==='admin'? <AdminDashboard/> :(user==='employee'?<EmployeeDashboard data={loggedInUserData}/>:null)}
    

    </>


  
  )
}

export default App
