import {host, hostAuth} from "./index";

export const registration = async (name, email, password) => {
    const response = await host.post('api/user/registration', {name, email, password, roleId:'1'})
    return response
}

export const login = async (email, password) => {
    const response = await host.post('api/user/login', {email, password})
    return response
}

export const check = async () => {
    const response = await host.post('api/user/auth')
    return response
}