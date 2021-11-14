module.exports = (sequelize, Sequelize) => {
    const Type = sequelize.define(
        'types',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement:true,
                primaryKey: true
            },
            name: Sequelize.STRING
        }
    )
    return Type
}
/*
    id
    name
*/