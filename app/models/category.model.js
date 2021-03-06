module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define(
        'categories',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement:true,
                primaryKey: true
            },
            name: Sequelize.STRING,
            image: Sequelize.BLOB,
        }
    )
    return Category
}
/*
    id
    name
*/