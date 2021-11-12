module.exports = (sequelize, Sequelize) => {
  const Material = sequelize.define("materials", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    kategori: {
      type: Sequelize.INTEGER,
    },
    stok: {
      type: Sequelize.INTEGER,
    },
  });
  return Material;
};
