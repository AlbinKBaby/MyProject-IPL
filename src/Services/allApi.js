import { base_url } from "./base_url"
import { commonApi } from "./commonApi"

//  register user 
export const registerApi = async (userData) =>{
    return await commonApi("POST",`${base_url}/user/team/register`,userData,"")
}


// register association
export const registerAsso = async (userData) =>{
    return await commonApi("POST",`${base_url}/user/asso/register`,userData,"")
}

// reg admin
export const registerAdmin = async (userData) =>{
    return await commonApi("POST",`${base_url}/user/admin/register`,userData,"")
}