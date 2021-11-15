module.exports = (sequelize, Sequelize) => {
    const Material = sequelize.define(
        'materials',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement:true,
                primaryKey: true
            },
            name: Sequelize.STRING,
            stock: Sequelize.INTEGER,
            cost: Sequelize.INTEGER,
            typeId: Sequelize.INTEGER,
            unitId: Sequelize.INTEGER,
            image: Sequelize.BLOB,
        }
    )
    return Material
}
/*
    id
    name
    stock
    cost
    typeId
    unitId
*/