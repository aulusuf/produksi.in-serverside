const db = require('../models')
const User = db.user

exports.allAccess = (req, res) => {
  res.status(200).send("Public content.");
};
exports.manajemenBoard = (req, res) => {
  res.status(200).send("Konten Manajemen");
};
exports.supervisorBoard = (req, res) => {
  res.status(200).send("Konten Supervisor");
};
exports.timProduksiBoard = (req, res) => {
  res.status(200).send("Konten Tim Produksi");
};

exports.findAll = (req, res) => {
  User.findAll()
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {res.status(500).send(err.message)})
}