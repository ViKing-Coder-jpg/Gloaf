import { api } from "../utils/constants"





export const loginPost=(data)=>{
    return api.post('/login/sso',data)
}
export const signupPost=(data)=>{
    return api.post('/signup/sso',data)
}
export const checkToken=(token)=>{
    return api.post('auth/',token)
}