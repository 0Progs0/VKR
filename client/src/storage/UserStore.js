import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {id:0}
        this._allUsers = []
        this._favorites = []
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    setAllUsers(allUsers) {
        this._allUsers = allUsers
    }

    setFavorites(favorites) {
        this._favorites = favorites
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get allUsers() {
        return this._allUsers
    }

    get favorites() {
        return this._favorites
    }
}

