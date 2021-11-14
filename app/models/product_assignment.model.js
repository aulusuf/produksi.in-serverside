module.exports = (sequelize, Sequelize) => {
    const ProductAssignment = sequelize.define(
        'product_assignment',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement:true,
                primaryKey: true
            },
            productId: Sequelize.INTEGER,
            amount: Sequelize.INTEGER,
            cost: Sequelize.INTEGER,
            statusId: Sequelize.INTEGER,
            assignmentId: Sequelize.INTEGER
        }
    )
    return ProductAssignment
}
/*
    id
    productId
    amount
    cost
    statusId
    assignementId
*/