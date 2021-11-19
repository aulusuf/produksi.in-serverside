module.exports = (app) => {
  const controller = require("../controller/status.controller");
  let router = require("express").Router();
  // router.post('/api/status/create', controller.create)
  router.get("/api/status", controller.findAll);
  router.get("/api/status/:id", controller.findOne);
  router.put("/api/status/:id", controller.update);
  router.delete("/api/status/:id", controller.delete);

  app.use("/", router);
};
