const db = require("../models");
const MaterialRequest = db.material_request;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.productId) {
    res.status(400).send({ message: "Field cannot be empty." });
    return;
  }
  const body = {
    productId: req.body.productId,
    materialId: req.body.materialId,
    statusId: req.body.statusId,
    jumlah: req.body.jumlah,
  };
  // console.log(body)

  MaterialRequest.create(body)
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

  MaterialRequest.findAll({ where: condition, include: [{ all: true }] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.statusChange = (req, res) => {
  const statusId = req.params.statusId;
  // console.log(id);
  // let condition = id ? { id: { [Op.gte]: 0 } } : null;

  MaterialRequest.findAll({ where: { statusId }, include: [{ all: true }] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  MaterialRequest.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({ message: `Material not found` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.update = (req, res) => {
  const id = req.params.id;

  MaterialRequest.update(req.body, { where: { id: id } })
    .then((num) => {
      num == 1
        ? res.send({
            message: "Update Material Success",
          })
        : res.send({ message: "Update Failed" });
    })
    .catch(() => {
      res.status(500).send({ message: "Error on updating" });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  MaterialRequest.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Delete Material Success" });
      } else {
        res.send({ message: "Delete Failed" });
      }
    })
    .catch(() => {
      res.status(500).send({ message: "Error on deleting" });
    });
};
