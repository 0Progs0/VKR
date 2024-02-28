import {makeAutoObservable} from "mobx";

export default class CategoryStore {
    constructor() {
        this._categories = []
        this._selectedCategory = {}

        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }
    setSelectedCategory(category) {
        this._selectedCategory = category
    }

    get categories() {
        return this._categories
    }
    get selectedCategory() {
        return this._selectedCategory
    }
}