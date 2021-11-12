const { verifyRegister } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-acess-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [verifyRegister.checkDuplicate, verifyRegister.checkRolesIsExist],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);
};
