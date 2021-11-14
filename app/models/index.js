const config = require('../config/db.config')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    HOST: config.HOST,
    dialect: config.dialect,
    operatorAliases: false
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.category = require('../models/category.model')(sequelize, Sequelize)
db.unit = require('../models/unit.model')(sequelize, Sequelize)
db.material_request = require('../models/material_request.model')(sequelize, Sequelize)
db.material = require('../models/material.model')(sequelize, Sequelize)
db.product_assignment = require('../models/product_assignment.model')(sequelize, Sequelize)
db.product = require('../models/product.model')(sequelize, Sequelize)
db.role = require('../models/role.model')(sequelize, Sequelize)
db.status = require('../models/status.model')(sequelize, Sequelize)
db.type = require('../models/type.model')(sequelize, Sequelize)
db.user = require('../models/user.model')(sequelize, Sequelize)

// RELATIONSHIP
db.product.belongsTo(db.category, {
    foreignKey: 'categoryId',
    as: 'productCategory'
})
db.product.belongsTo(db.unit, {
    foreignKey: 'unitId',
    as: 'productUnit'
})
db.product.belongsToMany(db.material, {
    through: 'products_materials',
    foreignKey: 'productId'
})
db.material.belongsTo(db.type, {foreignKey: 'typeId'})
db.material.belongsTo(db.unit, {
    foreignKey: 'unitId',
    as: 'materialUnit'
})
db.material.belongsToMany(db.product, {
    through: 'products_materials',
    foreignKey: 'materialId',
})
db.user.belongsTo(db.role, {
    foreignKey: 'roleId',
    as: 'userRole'
})
db.user.belongsToMany(db.product_assignment, {
    through: 'user_productAssignment',
    foreignKey: 'userId'
})
db.product_assignment.belongsTo(db.status, {foreignKey: 'statusId'})
db.product_assignment.belongsTo(db.product, {foreignKey: 'productId'})
db.product_assignment.belongsToMany(db.user, {
    through: 'user_productAssignment',
    foreignKey: 'assignmentId'
})
db.material_request.belongsTo(db.status, {through: 'statusId'})
db.material_request.belongsTo(db.material, {through: 'materialId'})
db.material_request.belongsTo(db.user, {through: 'userId'})

module.exports = db