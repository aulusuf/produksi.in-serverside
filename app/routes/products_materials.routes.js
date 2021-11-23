module.exports = (app) => {
  const controller = require("../controller/products_materials.controller");
  let router = require("express").Router();
  router.post("/api/product_material/create", controller.create);
  router.get("/api/product_materials", controller.findAll);
  router.get("/api/product_material/:id", controller.findOne);
  router.get(
    "/api/product_material/product/:productId",
    controller.findByProduct
  );
  router.put("/api/product_material/:id", controller.update);
  router.delete("/api/product_material/:id", controller.delete);

  app.use("/", router);
};
