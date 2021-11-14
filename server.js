const express = require("express");
const cors = require("cors");

const app = express();

var corsPort = {
  origin: "http://localhost:8081",
};

app.use(cors(corsPort));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the jungle" });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});

const db = require("./app/models");
const Role = db.role;
// const User = db.user
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Db");
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "Manajemen",
  });
  Role.create({
    id: 2,
    name: "Supervisor",
  });
  Role.create({
    id: 3,
    name: "Tim Produksi",
  });
}
