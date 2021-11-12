const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/manajemen",
    [authJwt.verifyToken],
    controller.manajemenBoard
  );
  app.get(
    "/api/test/supervisor",
    [authJwt.verifyToken],
    controller.supervisorBoard
  );
  app.get(
    "/api/test/tim_produksi",
    [authJwt.verifyToken],
    controller.timProduksiBoard
  );
};
