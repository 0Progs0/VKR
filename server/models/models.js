const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    profile_img: {type: DataTypes.STRING}
})

const Material = sequelize.define('material', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING},
    date_publication: {type: DataTypes.DATEONLY},
    file: {type: DataTypes.STRING}
}, {
    createdAt:false,
    updatedAt:false
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Subject = sequelize.define('subject', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Group = sequelize.define('group', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Role = sequelize.define('role', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
})


User.hasMany(Material)
Material.belongsTo(User)

Category.hasMany(Material)
Material.belongsTo(Category)

Subject.hasMany(Material)
Material.belongsTo(Subject)

Group.hasMany(Material)
Material.belongsTo(Group)

Role.hasMany(User)
User.belongsTo(Role)

module.exports = {
    User,
    Material,
    Category,
    Subject,
    Group,
    Role
}