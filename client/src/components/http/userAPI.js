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

export const updateProfileImg = async (user) => {
    const {data} = await host.put('api/user/' + user.id, user)
    return data
}

export const check = async () => {
    const {data} = await hostAuth.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const fetchFavorites = async (id) => {
    const {data} = await hostAuth.get('api/favorites', {params: {id}})
    return data
}

export const toggleFavorite = async (userId, materialId) => {
    const {data} = await hostAuth.patch('api/favorites', {userId, materialId})
    return data
}

