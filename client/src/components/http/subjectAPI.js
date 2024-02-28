import {host, hostAuth} from "./index";

export const createSubject = async (subject) => {
    const {data} = await hostAuth.post('api/subject', subject)
    return data
}

export const fetchSubjects = async () => {
    const {data} = await host.get('api/subject')
    return data
}