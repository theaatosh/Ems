import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage';

export const AuthContext=createContext();
export const AuthProvider = ({children}) => {
   const [userData, setuserData] = useState(null)
    useEffect(() => {
     
    const{employees,admin}=getLocalStorage();
    
   setuserData({employees,admin});
   
  }, [])
  
    
 
    
  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

