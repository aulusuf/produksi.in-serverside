module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define(
        'products',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement:true,
                primaryKey: true
            },
            name: Sequelize.STRING,
            stock: Sequelize.INTEGER,
            categoryId: Sequelize.INTEGER,
            unitId: Sequelize.INTEGER
        }
    )
    return Product
}
/*
    id
    name
    stock
    categoryId
    unitId
*/