import {makeAutoObservable} from "mobx";

export default class MaterialStore {
    constructor() {
        this._materials = []
        this._currentPage = 1
        this._totalCount = 0
        this._limit = 3

        makeAutoObservable(this)
    }

    setMaterials(materials) {
        this._materials = materials
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

    get materials() {
        return this._materials
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