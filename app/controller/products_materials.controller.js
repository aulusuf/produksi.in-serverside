const db = require("../models");
const ProductMaterial = db.products_materials;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({ message: "Field cannot be empty." });
    return;
  }
  const body = {
    productId: req.body.productId,
    materiald: req.body.materialId,
    amount: req.body.amount,
    cost: req.body.cost,
  };
  // console.log(body)

  ProductMaterial.create(body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findByProduct = (req, res) => {
  const productId = req.query.productId;

  let condition = productId ? { productId: { [Op.gte]: 0 } } : null;

  ProductMaterial.findAll({ where: condition, include: [{ all: true }] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.findAll = (req, res) => {
  const productId = req.query.productId;

  let condition = productId ? { productId: { [Op.gte]: 0 } } : null;

  ProductMaterial.findAll({ where: condition, include: [{ all: true }] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  ProductMaterial.findByPk(id, { include: [{ all: true }] })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({ message: `Product not found` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.update = (req, res) => {
  const id = req.params.id;

  ProductMaterial.update(req.body, { where: { id: id } })
    .then((num) => {
      num == 1
        ? res.send({
            message: "Update Product Success",
          })
        : res.send({ message: "Update Failed" });
    })
    .catch(() => {
      res.status(500).send({ message: "Error on updating" });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  ProductMaterial.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Delete Product Success" });
      } else {
        res.send({ message: "Delete Failed" });
      }
    })
    .catch(() => {
      res.status(500).send({ message: "Error on deleting" });
    });
};
