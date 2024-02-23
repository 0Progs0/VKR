import {host, hostAuth} from "./index";
import {jwtDecode} from "jwt-decode";
export const registration = async (name, email, password) => {
    const {data} = await host.post('api/user/registration', {name, email, password, roleId:'1'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const {data} = await host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const fetchUsers = async () => {
    const {data} = await host.get('api/user')
    return (data)
}

export const check = async () => {
    const {data} = await hostAuth.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}