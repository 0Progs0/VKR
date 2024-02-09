import {makeAutoObservable} from "mobx";

export default class MaterialStore {
    constructor() {
        this._categories = [
            {id:1, title: 'Статья'},
            {id:2, title: 'Учебник'}
        ]
        this._subjects = [
            {id:1, title: 'Математика'},
            {id:2, title: 'Литература'}
        ]
        this._groups = [
            {id:1, title: 'Для студентов ВУЗов'},
            {id:2, title: 'Для учащихся 10-11 классов'}
        ]
        this._materials = [
            {id:1, title:'Название', description:'Лекции Денисова', date_publication:"2023-12-18 20:08:20.563+03", file:'http://repo.ssau.ru/bitstream/Uchebnye-izdaniya/Osnovy-baz-dannyh-96560/1/Крикунов%20М.М.%20Основы%20баз%20данных%202021.pdf'},
            {id:2, title:'Другое название', description:'Базы данных Денисова', date_publication:"2023-12-18 20:08:20.563+03", file:'http://repo.ssau.ru/bitstream/Uchebnye-izdaniya/Osnovy-baz-dannyh-96560/1/Крикунов%20М.М.%20Основы%20баз%20данных%202021.pdf'},
            {id:3, title:'Другое название', description:'Базы данных Денисова', date_publication:"2023-12-18 20:08:20.563+03", file:'http://repo.ssau.ru/bitstream/Uchebnye-izdaniya/Osnovy-baz-dannyh-96560/1/Крикунов%20М.М.%20Основы%20баз%20данных%202021.pdf'},
            {id:4, title:'Другое название', description:'Базы данных Денисова', date_publication:"2023-12-18 20:08:20.563+03", file:'http://repo.ssau.ru/bitstream/Uchebnye-izdaniya/Osnovy-baz-dannyh-96560/1/Крикунов%20М.М.%20Основы%20баз%20данных%202021.pdf'}
        ]
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