const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicate = (request, respond, next) => {
  User.findOne({
    where: {
      username: request.body.username,
    },
  }).then((user) => {
    if (user) {
      respond.status(400).send({
        message: "Username already taken",
      });
      return;
    }
    User.findOne({
      where: {
        email: request.body.email,
      },
    }).then((user) => {
      if (user) {
        respond.status(400).send({
          message: "Email already registered",
        });
        return;
      }
      next();
    });
  });
};

checkRolesIsExist = (request, respond, next) => {
  if (request.body.roles) {
    for (let i = 0; i < request.body.roles.length; i++) {
      if (!ROLES.includes(request.body.roles[i])) {
        respond.status(400).send({
          message: `Roles ${request.body.roles[i]} does not exist`,
        });
        return;
      }
    }
  }
  next();
};

const verifyRegister = {
  checkDuplicate: checkDuplicate,
  checkRolesIsExist: checkRolesIsExist,
};
module.exports = verifyRegister;
