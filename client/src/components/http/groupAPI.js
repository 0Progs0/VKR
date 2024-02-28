import {host, hostAuth} from "./index";

export const createGroup = async (group) => {
    const {data} = await hostAuth.post('api/group', group)
    return data
}

export const fetchGroups = async () => {
    const {data} = await host.get('api/group')
    return data
}