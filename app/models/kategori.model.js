module.exports = (sequelize, Sequelize) => {
  const Kategori = sequelize.define("categories", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  });
  return Kategori;
};
