module.exports = (app) => {
  const controller = require("../controller/user.controller");
  app.get("/api/users", controller.findAll);
  app.get("/api/user/:id", controller.findOne);
  app.put("/api/user/:id", controller.update);
  app.delete("/api/user/:id", controller.deleteOne);
};
