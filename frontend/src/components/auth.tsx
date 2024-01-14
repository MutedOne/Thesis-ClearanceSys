import { createContext, useContext } from "react";
import { Navigate } from "react-router-dom";

const UserD = createContext(null);
export const useContx = () => {
    return useContext(UserD);
  };
export default function Auth({children} ){
  
    if (sessionStorage.getItem('sessionkey')==null) {
        return <Navigate to="/" replace />;
    }

    const res = JSON.parse(sessionStorage.getItem('sessionkey')||'')
    return (
        <UserD.Provider value={res}>
            {children}
        </UserD.Provider>
    );
}