module.exports = (sequelize, Sequelize) => {
    const MaterialRequest = sequelize.define(
        'material_request',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement:true,
                primaryKey: true
            },
            productId: Sequelize.INTEGER,
            materialId: Sequelize.INTEGER,
            statusId: Sequelize.INTEGER,
            jumlah: Sequelize.INTEGER,
        }
    )
    return MaterialRequest
}
/*
    id
    productId
    materialId
    statusId
    jumlah
*/