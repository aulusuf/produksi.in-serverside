const db = require('../models');
const Category = db.category;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.name) {
        res.status(400).send({ message: "Field cannot be empty."})
        return
    }
    const body = {
        name: req.body.name
    }
    // console.log(body)

    Category.create(body)
    .then((data) =>{
        res.send(data)
    })
    .catch((err) => {
        res.status(500).send({ message: err.message })
    })
}

exports.findAll = (req, res) => {
    const id = req.query.id;
    console.log(id)
    let condition = id ? { id: {[Op.gte]: 0}} :null
    
    Category.findAll({where:condition})
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.status(500).send({ message: err.message })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Category.findByPk(id)
    .then((data) => {
        if(data){
            res.send(data)
        } else {
            res.status(404).send({ message: `Category not found`})
        }
    })
    .catch((err) => {
        res.status(500).send({ message: err.message })
    })
}
exports.update = (req, res) => {
    const id = req.params.id

    Category.update(req.body, {where: { id: id }})
    .then((num)=>{
        (num == 1)? res.send({
            message:"Update Category Success"}) : res.send({message:"Update Failed"})
    })
    .catch(()=>{
        res.status(500).send({message:"Error on updating"})
    })
}
exports.delete = (req, res) => {
    const id = req.params.id

    Category.destroy({where: { id: id }})
    .then((num) => {
        if(num == 1) {
            res.send({message: "Delete Category Success"})
        } else {
            res.send({message: "Delete Failed"})
        }
    })
    .catch(() => {
        res.status(500).send({message:"Error on deleting"})
    })
}