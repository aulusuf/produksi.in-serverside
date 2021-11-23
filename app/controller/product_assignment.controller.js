const db = require("../models");
const ProductAssignment = db.product_assignment;

const Op = db.sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.productId) {
    res.status(400).send({ message: "Field cannot be empty." });
    return;
  }
  const body = {
    productId: req.body.productId,
    amount: req.body.amount,
    cost: req.body.cost,
    statusId: req.body.statusId,
    assignmentId: req.body.assignmentId,
  };
  // console.log(body)

  ProductAssignment.create(body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.findAll = (req, res) => {
  const id = req.query.id;
  console.log(id);
  let condition = id ? { id: { [Op.gte]: 0 } } : null;

  ProductAssignment.findAll({
    where: condition,
    include: [
      {
        all: true,
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.pending = (req, res) => {
  const statusId = req.params.statusId;
  ProductAssignment.findAll({
    where: { statusId },
    include: [
      {
        all: true,
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.findOne = (req, res) => {
  const id = req.params.id;

  ProductAssignment.findByPk(id)
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

  ProductAssignment.update(req.body, { where: { id: id } })
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

  ProductAssignment.destroy({ where: { id: id } })
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
