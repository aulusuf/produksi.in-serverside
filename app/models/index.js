const config = require("../config/db.config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  HOST: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,
  // pool ?
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model")(sequelize, Sequelize);
db.role = require("../models/role.model")(sequelize, Sequelize);

db.user.belongsTo(db.role, {
  foreignKey: "roleId",
});

db.ROLES = ["Manajemen", "Supervisor", "Tim Produksi"];

module.exports = db;
