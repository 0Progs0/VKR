import {makeAutoObservable, makeObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._allUsers = []
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

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get allUsers() {
        return this._allUsers
    }
}