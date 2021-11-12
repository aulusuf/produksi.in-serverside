const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

verifyToken = (request, respond, next) => {
  let token = request.headers["x-access-token"];

  if (!token) {
    return respond.status(403).send({
      message: "Token not provied",
    });
  }

  jwt.verify(token, config.secret, (error, decoded) => {
    if (error) {
      return respond.status(401).send({
        message: "Unauthorized",
      });
    }
    request.userId = decoded.id;
    next();
  });
};

isManajemen = (request, respond, next) => {
  User.findByPK(request.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "Manajemen") {
          next();
          return;
        }
      }
      respond.status(403).send({
        message: "Anda bukan Manajemen",
      });
      return;
    });
  });
};

isSupervisor = (request, respond, next) => {
  User.findByPK(request.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "Supervisor") {
          next();
          return;
        }
      }
      respond.status(403).send({
        message: "Anda bukan Supervisor",
      });
    });
  });
};

isTimProduksi = (request, respond, next) => {
  User.findByPK(request.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "Manajemen") {
          next();
          return;
        }
        if (roles[i].name === "Supervisor") {
          next();
          return;
        }
      }
      respond.status(403).send({
        message: "Anda bukan siapa-siapa :(",
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isManajemen: isManajemen,
  isSupervisor: isSupervisor,
  isTimProduksi: isTimProduksi,
};
module.exports = authJwt;
