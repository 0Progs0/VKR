import {makeAutoObservable} from "mobx";

export default class MaterialStore {
    constructor() {
        this._categories = []
        this._subjects = []
        this._groups = []
        this._materials = []
        this._selectedCategory = {}
        this._selectedSubject = {}
        this._selectedGroup = {}

        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }
    setSubjects(subjects) {
        this._subjects = subjects
    }
    setGroups(groups) {
        this._groups = groups
    }
    setMaterials(materials) {
        this._materials = materials
    }
    setSelectedCategory(category) {
        this._selectedCategory = category
    }
    setSelectedSubject(subject) {
        this._selectedSubject = subject
    }
    setSelectedGroup(group) {
        this._selectedGroup = group
    }

    get categories() {
        return this._categories
    }
    get subjects() {
        return this._subjects
    }
    get groups() {
        return this._groups
    }
    get materials() {
        return this._materials
    }
    get selectedCategory() {
        return this._selectedCategory
    }
    get selectedSubject() {
        return this._selectedSubject
    }

    get selectedGroup() {
        return this._selectedGroup
    }
}