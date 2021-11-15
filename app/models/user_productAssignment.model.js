module.exports = (sequelize, Sequelize) => {
    const UserProductAssignment = sequelize.define(
        'user_productAssignment',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement:true,
                primaryKey: true
            },
            userId: Sequelize.INTEGER,
            assignmentId: Sequelize.INTEGER,
        }
    )
    return UserProductAssignment
}
