import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext(null);

export const AuthProviderr = ({children}) => {
    const [token, setToken] = useState();
    useEffect(()=>{
        async function loadData() {
            if (localStorage.getItem('token')) {
                setToken(localStorage.getItem("token"))
            }
        }
        loadData()
    },[])
    return (
        <authContext.Provider value={{token, setToken}}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(authContext);
}