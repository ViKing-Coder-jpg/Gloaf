import { api } from "../utils/constants"


export const getToken=()=>{
    return api.get('auth/')
}