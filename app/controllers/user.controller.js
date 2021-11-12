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
