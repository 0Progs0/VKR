const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Subject, Material} = require('../models/models')
const uuid = require("uuid");
const path = require("path");

const generateJwt = (id, name, email, roleId) => {
    return jwt.sign(
        {id, name, email, roleId},
        process.env.SECRET_KEY,
        {expiresIn: '1h'}
    )
}
class UserController {
    async registration(req, res, next) {
        const {name, email, password, roleId} = req.body
        if (!name || !email || !password) {
            return next(ApiError.badRequest('Некоректное заполнение полей!'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({name, email, roleId, password: hashPassword})
        const token = generateJwt(user.id, user.name, user.email, user.roleId)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Неверный пароль'))
        }
        const token = generateJwt(user.id, user.name, user.email, user.roleId)
        return res.json({token})
    }

    async loadImg(req, res, next) {
        try {
        const {id} = req.body
        const {profile_img} = req.files
        let imgName = uuid.v4() + ".jpg"
        profile_img.mv(path.resolve(__dirname, '..', 'static', imgName))
        const user = await User.findOne({where: {id}})
        await user.update({profile_img:imgName})
        return res.json(user)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res, next) {
        try {
        const users = await User.findAll()
        return res.json(users)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.name, req.user.email, req.user.roleId)
        return res.json({token})
    }
}

module.exports = new UserController()