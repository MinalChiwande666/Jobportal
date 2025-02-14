import { createContext, useContext, useState } from "react";


export const AuthContext = createContext(undefined)


export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null)

    const login = (value)=>{
        setUser(value)
        
    }

    const logout = ()=>{
        setUser(null)
    }
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    const context = useContext(AuthContext)

    if(context === null || context === undefined)
    {
        throw new Error('Error in context')
    }

    return context
}