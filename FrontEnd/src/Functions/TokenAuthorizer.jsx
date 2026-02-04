import { createContext, useContext, useEffect, useMemo, useState} from "react";
import { useSearchParams } from "react-router-dom";
import { checkToken } from "../Api/PostApi";
import { api } from "../utils/constants";

const AuthContext = createContext(undefined);

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const [params] = useSearchParams()

    useEffect(()=>{
        const paramToken = params.get('accessToken');
        const storedToken = localStorage.getItem('accessToken');
        const nextToken = paramToken || storedToken || '';
        setToken(prev => prev === nextToken ? prev : nextToken);

        if (!nextToken) {
                delete api.defaults.headers.common["Authorization"];
                localStorage.removeItem('accessToken');    
        }

        api.defaults.headers.common["Authorization"] = `Bearer ${nextToken}`;
        localStorage.setItem('accessToken', nextToken);
        try{
        checkToken(nextToken).then((res) => {
            const newToken=res.headers.Authorization
            if(newToken){
            const newExtractedToken=newToken.split(' ')[1];
            setToken(prev => (prev === newExtractedToken)&& newExtractedToken ? prev : newExtractedToken);}
        }).catch((err) => {
            console.log("got err",err)
        });}catch(err){
            const error = new Error("Unauthorized");
            error.status = 401; 
            throw error;
        }
        if (paramToken) {
        window.history.replaceState({}, document.title, window.location.pathname);
        }
           
        
    },[params.get('accessToken')])



    const contextValue = useMemo(() => ({
        token,
        setToken,
    }),[token]);


    return (<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>);
};

export const useAuth = () => {
  const auth=useContext(AuthContext);
  if(!auth){
    const error = new Error("Token not Found");
    error.status = 404; 
    throw error;
  }
  return auth
};



export default AuthProvider;