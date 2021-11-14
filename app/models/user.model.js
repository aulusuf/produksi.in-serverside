module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
        "users",
        {
            id:
            {
                type:Sequelize.INTEGER,
                autoIncrement:true,
                primaryKey:true
            },
            name:Sequelize.STRING,
            email: Sequelize.STRING,
            username: Sequelize.STRING,
            password: Sequelize.STRING,
            roleId: Sequelize.INTEGER,
    },
    {
        initialAutoIncrement: 4
    })
    return User
}

/*
    id
    name
    email
    username
    password
    roleId
*/