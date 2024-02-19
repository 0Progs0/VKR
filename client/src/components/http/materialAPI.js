import {host, hostAuth} from "./index";
import {jwtDecode} from "jwt-decode";
export const createSubject = async (subject) => {
    const {data} = await hostAuth.post('api/subject', subject)
    return data
}

export const fetchSubjects = async () => {
    const {data} = await host.get('api/subject')
    return data
}

export const createCategory = async (category) => {
    const {data} = await hostAuth.post('api/category', category)
    return data
}

export const fetchCategories = async () => {
    const {data} = await host.get('api/category')
    return data
}

export const createGroup = async (group) => {
    const {data} = await hostAuth.post('api/group', group)
    return data
}

export const fetchGroups = async () => {
    const {data} = await host.get('api/group')
    return data
}

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
