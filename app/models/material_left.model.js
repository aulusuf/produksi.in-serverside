module.exports = (sequelize, Sequelize) => {
  const MaterialLeft = sequelize.define("material_left", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: Sequelize.INTEGER,
    materialId: Sequelize.INTEGER,
    statusId: Sequelize.INTEGER,
    amount: Sequelize.INTEGER,
  });
  return MaterialRequest;
};
/*
    id
    productId
    materialId
    statusId
    jumlah
*/
