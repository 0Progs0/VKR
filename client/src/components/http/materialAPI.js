import {host, hostAuth} from "./index";

export const createMaterial = async (material) => {
    const {data} = await hostAuth.post('api/material', material)
    return data
}

export const fetchMaterials = async (subjectId, groupId, categoryId, page, limit= 5) => {
    const {data} = await host.get('api/material', {params: {
        subjectId, groupId, categoryId, page, limit
        }})
    return data
}

export const fetchOneMaterial = async (id) => {
    const {data} = await host.get('api/material/' + id)
    return data
}
