const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8081;
// const bcrypt = require('bcryptjs');
const bodyParser = require("body-parser");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// routes

require("./app/routes/product_assignment.routes")(app); //
require("./app/routes/material_request.routes")(app); //
require("./app/routes/material.routes")(app);
require("./app/routes/product.routes")(app);
require("./app/routes/role.routes")(app); // no change
require("./app/routes/auth.routes")(app); // nothing
require("./app/routes/unit.routes")(app); //
require("./app/routes/type.routes")(app); //
require("./app/routes/category.routes")(app); //
require("./app/routes/user.routes")(app); //
require("./app/routes/status.routes")(app); //
require("./app/routes/products_materials.routes")(app); //

app.listen(PORT, () => {
  console.log(PORT);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the jungle" });
});

const db = require("./app/models");

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync Database");
//   initial();
// });

function initial() {
  //  R O L E
  db.role.create({
    id: 1,
    name: "Manajemen",
  });
  db.role.create({
    id: 2,
    name: "Supervisor",
  });
  db.role.create({
    id: 3,
    name: "Tim Produksi",
  });

  //  S T A T U S
  db.status.create({
    id: 1,
    name: "Pending",
  });
  db.status.create({
    id: 2,
    name: "On going",
  });
  db.status.create({
    id: 3,
    name: "Done",
  });
  db.status.create({
    id: 4,
    name: "sent",
  });
  db.status.create({
    id: 5,
    name: "received",
  });

  // C A T E G O R Y
  db.category.create({
    id: 1,
    name: "Aksesoris",
  });
  db.category.create({
    id: 2,
    name: "Tas",
  });
  db.category.create({
    id: 3,
    name: "Baju",
  });

  // U N I T
  db.unit.create({
    id: 1,
    name: "pcs",
  });
  db.unit.create({
    id: 2,
    name: "lusin",
  });
  db.unit.create({
    id: 3,
    name: "kg",
  });

  //  T Y P E
  db.type.create({
    id: 1,
    name: "kain",
  });
  db.type.create({
    id: 2,
    name: "benang",
  });
  db.type.create({
    id: 3,
    name: "pernik",
  });

  // U S E R
  db.user.create({
    name: "Farhan",
    email: "farhan@mail.id",
    username: "farhan",
    password: "$2a$10$sVv13GZbILkxXG3jNaaXOenGmKVZmlIgonJSa.TV/ciB0gsVXWA4m",
    // 12345678
    roleId: 1,
  });
  db.user.create({
    name: "Bambang",
    email: "bambang@mail.id",
    username: "bambang",
    password: "$2a$10$sVv13GZbILkxXG3jNaaXOenGmKVZmlIgonJSa.TV/ciB0gsVXWA4m",
    // 12345678
    roleId: 2,
  });
  db.user.create({
    name: "John",
    email: "john@mail.id",
    username: "john",
    password: "$2a$10$sVv13GZbILkxXG3jNaaXOenGmKVZmlIgonJSa.TV/ciB0gsVXWA4m",
    // 12345678
    roleId: 3,
  });

  // P R O D U C T
  db.product.create({
    name: "Tas",
    stock: 300,
    cost: 100000,
    categoryId: 2,
    unitId: 3,
  });
  db.product.create({
    name: "Jaket",
    stock: 900,
    cost: 90420,
    categoryId: 3,
    unitId: 2,
  });
  db.product.create({
    name: "Gantungan kunci",
    stock: 540,
    cost: 1000,
    categoryId: 1,
    unitId: 1,
  });

  //  M A T E R I A L
  db.material.create({
    name: "Kain perca",
    stock: 200,
    cost: 10000,
    typeId: 1,
    unitId: 2,
  });
  db.material.create({
    name: "benang",
    stock: 4000,
    cost: 200,
    typeId: 1,
    unitId: 3,
  });
  db.material.create({
    name: "Resleting",
    stock: 300,
    cost: 100,
    typeId: 1,
    unitId: 3,
  });

  // P R O D U C T   A S S I G N M E N T
  db.product_assignment.create({
    productId: 1,
    amount: 3,
    cost: 19999,
    statusId: 1,
    assignmentId: 2,
  });
  db.product_assignment.create({
    productId: 3,
    amount: 300,
    cost: 2300,
    statusId: 1,
    assignmentId: 3,
  });
  db.product_assignment.create({
    productId: 2,
    amount: 400,
    cost: 1000,
    statusId: 1,
    assignmentId: 3,
  });

  // M A T E R I A L   R E Q U E S T
  db.material_request.create({
    productId: 1,
    materialId: 2,
    statusId: 1,
    amount: 300,
  });
  db.material_request.create({
    productId: 3,
    materialId: 3,
    statusId: 1,
    amount: 300,
  });
  db.material_request.create({
    productId: 2,
    materialId: 3,
    statusId: 1,
    amount: 300,
  });

  // U S E R   P R O D U C T A S S I G N M E N T
  // db.user_productAssignment.create({
  //     userId: 1,
  //     assignmentId:2,
  // })
  // db.user_productAssignment.create({
  //     userId: 3,
  //     assignmentId:3,
  // })
  // db.user_productAssignment.create({
  //     userId: 2,
  //     assignmentId: 1,
  // })
}
