const db = require('../models');
const Role = db.role;
const Op = db.sequelize.Op;

exports.findAll = (req, res) => {
    const id = req.query.id;
    console.log(id)
    let condition = id ? { id: {[Op.gte]: 0}} :null
    
    Role.findAll({where:condition})
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.status(500).send({ message: err.message })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Role.findByPk(id)
    .then((data) => {
        if(data){
            res.send(data)
        } else {
            res.status(404).send({ message: `Role not found`})
        }
    })
    .catch((err) => {
        res.status(500).send({ message: err.message })
    })
}