import {makeAutoObservable} from "mobx";

export default class GroupStore {
    constructor() {
        this._groups = []
        this._selectedGroup = {}

        makeAutoObservable(this)
    }

    setGroups(groups) {
        this._groups = groups
    }

    setSelectedGroup(group) {
        this._selectedGroup = group
    }

    get groups() {
        return this._groups
    }

    get selectedGroup() {
        return this._selectedGroup
    }
}