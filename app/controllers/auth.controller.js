const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  if(!req.body.username || !req.body.name || !req.body.password || !req.body.role){
    res.status(400).send({
      message: "Field cannot be empty"
    })
    return
  }

  const body = {
    username: req.body.username,
    name: req.body.name,
    password: bcrypt.hash(req.body.password, 10),
    roleId: req.body.roleId
  }
  User.create(body)
  .then((data)=> {
    if(req.body.roles){
      Role.findOne({
        where: {
          id: 1
        }
      })
      .then((data)=>{
        res.send(data, "Terdaftar sebagai manajemen")
      })
    }
    if(req.body.roles){
      Role.findOne({
        where: {
          id: 2
        }
      })
      .then((data)=>{
        res.send(data, "Terdaftar sebagai Supervisor")
      })
    }
    if(req.body.roles){
      Role.findOne({
        where: {
          id: 3
        }
      })
      .then((data)=>{
        res.send(data, "Terdaftar sebagai Tim Produksi")
      })
    }
    res.send(data, "Berhasil mendaftar")
  })
  .catch((err)=> {
    res.status(500).send({
      message: err.message || "Error to create"
    })
  })
  console.log(req.body.username)
}
/*
exports.signup = (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            id: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({ message: "Register success!" });
          });
        });
      } else {
        user.setRoles([3]).then(() => {
          res.send({ message: "Register sebagai Manajemen" });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
*/




exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400,
      });

      var authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
