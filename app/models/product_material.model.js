module.exports = (sequelize, Sequelize) => {
  const ProductMaterial = sequelize.define("products_materials", {
    // id: {
    //   type: Sequelize.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true,
    // },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    productId: Sequelize.INTEGER,
    materialId: Sequelize.INTEGER,
  });
  return ProductMaterial;
};
/*
    id
    productId
    materialId
    statusId
    jumlah
*/
