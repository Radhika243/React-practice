import React,{useContext, useState} from "react";

const AuthContext = React.createContext(null)

export const AuthProvider = ({children}) =>{
    //useState to maintain user state in the component
    const [user, setUser] = useState(null)

    const login = (user) =>{
        setUser(user)
    }

    const logOut = () =>{
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user,login,logOut}}>
        {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext)
}