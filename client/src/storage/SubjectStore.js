import {makeAutoObservable} from "mobx";

export default class SubjectStore {
    constructor() {
        this._subjects = []
        this._selectedSubject = {}

        makeAutoObservable(this)
    }

    setSubjects(subjects) {
        this._subjects = subjects
    }

    setSelectedSubject(selectedSubject) {
        this._selectedSubject = selectedSubject
    }

    get subjects() {
        return this._subjects
    }

    get selectedSubject() {
        return this._selectedSubject
    }
}