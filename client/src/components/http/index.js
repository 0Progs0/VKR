import axios from "axios";


const host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const hostAuth = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

hostAuth.interceptors.request.use(authInterceptor)

export {
    host,
    hostAuth
}