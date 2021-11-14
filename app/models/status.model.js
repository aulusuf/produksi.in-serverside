module.exports = (sequelize, Sequelize) => {
    const Status = sequelize.define(
        'status',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement:true,
                primaryKey: true
            },
            name: Sequelize.STRING
        }
    )
    return Status
}
/*
    id
    name
*/