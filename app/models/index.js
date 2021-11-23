const config = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.category = require("../models/category.model")(sequelize, Sequelize);
db.unit = require("../models/unit.model")(sequelize, Sequelize);
db.material_request = require("../models/material_request.model")(
  sequelize,
  Sequelize
);
db.material = require("../models/material.model")(sequelize, Sequelize);
db.product_assignment = require("../models/product_assignment.model")(
  sequelize,
  Sequelize
);
db.user_productAssignment = require("../models/user_productAssignment.model")(
  sequelize,
  Sequelize
);
db.product = require("../models/product.model")(sequelize, Sequelize);
db.role = require("../models/role.model")(sequelize, Sequelize);
db.status = require("../models/status.model")(sequelize, Sequelize);
db.type = require("../models/type.model")(sequelize, Sequelize);
db.user = require("../models/user.model")(sequelize, Sequelize);
db.products_materials = require("../models/product_material.model")(
  sequelize,
  Sequelize
);

// RELATIONSHIP
// db.category.hasMany(db.product, {
//     as: 'products'
// })
db.product.belongsTo(db.category, {
  //1 category many product
  foreignKey: "categoryId",
  as: "categories",
});
db.product.belongsTo(db.unit, {
  //1 unit many product
  foreignKey: "unitId",
  as: "units",
});
db.products_materials.belongsTo(db.product, {
  foreginKey: "productId",
  as: "product",
});
db.products_materials.belongsTo(db.material, {
  foreginKey: "materialId",
  as: "material",
});
// db.product.belongsToMany(db.material, {
//   //many category many product
//   through: "products_materials",
//   foreignKey: "productId",
// });
// db.material.belongsToMany(db.product, {
//   //many product many material
//   through: "products_materials",
//   foreignKey: "materialId",
// });
db.material.belongsTo(db.type, {
  //1 type many material
  foreignKey: "typeId",
  as: "types",
});
db.material.belongsTo(db.unit, {
  //1 unit many material
  foreignKey: "unitId",
  as: "units",
});
db.user.belongsTo(db.role, {
  foreignKey: "roleId",
  as: "roles",
});
db.user.belongsToMany(db.product_assignment, {
  // many product assignments many user
  through: "user_productAssignments",
  foreignKey: "userId",
});
db.product_assignment.belongsToMany(db.user, {
  through: "user_productAssignments",
  foreignKey: "assignmentId",
});
db.product_assignment.belongsTo(db.status, {
  foreignKey: "statusId",
  as: "status",
});
db.product_assignment.belongsTo(db.product, {
  foreignKey: "productId",
  as: "products",
});
db.material_request.belongsTo(db.status, {
  foreignKey: "statusId",
  as: "status",
});
db.material_request.belongsTo(db.material, {
  foreignKey: "materialId",
  as: "materials",
});
db.material_request.belongsTo(db.user, {
  foreignKey: "userId",
  as: "users",
});
db.material_request.belongsTo(db.product, {
  foreignKey: "productId",
  as: "products",
});
// db.user_productAssignment.belongsTo(db.user, {
//     foreignKey: 'userId',
//     as: 'users'
// })
// db.user_productAssignment.belongsTo(db.product_assignment, {
//     foreignKey: 'assignmentId',
//     as: 'assignments'
// })

module.exports = db;
