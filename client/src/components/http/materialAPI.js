import {host, hostAuth} from "./index";

export const createMaterial = async (material) => {
    const {data} = await hostAuth.post('api/material', material)
    return data
}

export const fetchMaterials = async (userId, subjectId, groupId, categoryId, title, page, limit= 5) => {
    const {data} = await host.get('api/material', {params: {
        userId, subjectId, groupId, categoryId, title, page, limit
        }})
    return data
}

export const fetchOneMaterial = async (id) => {
    const {data} = await host.get('api/material/' + id)
    return data
}

export const updateMaterial = async (id, material) => {
    const {data} = await hostAuth.put('api/material/' + id, material)
    return data
}
export  const deleteMaterial = async (id) => {
    const {data} = await hostAuth.delete('api/material/' + id)
    return data
}