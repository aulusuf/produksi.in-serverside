const db = require("../models");
const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

// load models
const User = db.user;
const Role = db.role;

// const Op = db.Sequelize.Op;

exports.signup = (req, res) => {
  // console.log(bcrypt.hash(req.body.password, 10))
  if (!req.body.email || !req.body.username) {
    res.status(400).send({
      message: "Field cannot be empty",
    });
    return;
  }

  const body = {
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
    roleId: req.body.roleId,
    image: req.body.image,
  };

  User.create(body)
    .then(() => {
      if (req.body.roleId) {
        Role.findOne({
          where: {
            id: 1,
          },
        }).then(() => {
          res.send("Terdaftar sebagai manajemen");
        });
      } else if (req.body.roles) {
        Role.findOne({
          where: {
            id: 2,
          },
        }).then(() => {
          res.send("Terdaftar sebagai Supervisor");
        });
      } else if (req.body.roles) {
        Role.findOne({
          where: {
            id: 3,
          },
        }).then(() => {
          res.send("Terdaftar sebagai Tim Produksi");
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};

exports.signin = (req, res, err) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res
          .status(404)
          .send({ message: err.message || "User not found" });
      }
      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid password",
        });
      }
      let token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400,
      });
      user.getRoles().then((role) => {
        console.log(role);
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          role: [role.id, role.name],
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
      console.log(err);
    });
};
