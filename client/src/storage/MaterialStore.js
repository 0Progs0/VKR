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
        this._currentPage = 1
        this._totalCount = 0
        this._limit = 3

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
        this.setCurrentPage(1)
        this._selectedCategory = category
    }
    setSelectedSubject(subject) {
        this.setCurrentPage(1)
        this._selectedSubject = subject
    }
    setSelectedGroup(group) {
        this.setCurrentPage(1)
        this._selectedGroup = group
    }

    setCurrentPage(page) {
        this._currentPage = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    setLimit(limit) {
        this._limit = limit
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

    get currentPage() {
        return this._currentPage
    }
    get totalCount() {
        return this._totalCount
    }
    get limit() {
        return this._limit
    }
}