module.exports = (sequelize, Sequelize) => {
    const Unit = sequelize.define('units',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: Sequelize.STRING
    })
    return Unit
}

/*
    id
    name
*/