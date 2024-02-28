import {host, hostAuth} from "./index";

export const createCategory = async (category) => {
    const {data} = await hostAuth.post('api/category', category)
    return data
}

export const fetchCategories = async () => {
    const {data} = await host.get('api/category')
    return data
}