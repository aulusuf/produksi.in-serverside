const db = require('../models');
const Product = db.product;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.name) {
        res.status(400).send({ message: "Field cannot be empty."})
        return
    }
    const body = {
        name: req.body.name,
        stock: req.body.stock,
        cost: req.body.cost,
        categoryId: req.body.categoryId,
        image: req.body.image
    }
    // console.log(body)

    Product.create(body)
    .then((data) =>{
        res.send(data)
    })
    .catch((err) => {
        res.status(500).send({ message: err.message })
    })
}

exports.findAll = (req, res) => {
    const id = req.query.id;
    
    let condition = id ? { id: {[Op.gte]: 0}} :null
    
    Product.findAll({where:condition})
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.status(500).send({ message: err.message })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Product.findByPk(id)
    .then((data) => {
        if(data){
            res.send(data)
        } else {
            res.status(404).send({ message: `Product not found`})
        }
    })
    .catch((err) => {
        res.status(500).send({ message: err.message })
    })
}
exports.update = (req, res) => {
    const id = req.params.id

    Product.update(req.body, {where: { id: id }})
    .then((num)=>{
        (num == 1)? res.send({
            message:"Update Product Success"}) : res.send({message:"Update Failed"})
    })
    .catch(()=>{
        res.status(500).send({message:"Error on updating"})
    })
}
exports.delete = (req, res) => {
    const id = req.params.id

    Product.destroy({where: { id: id }})
    .then((num) => {
        if(num == 1) {
            res.send({message: "Delete Product Success"})
        } else {
            res.send({message: "Delete Failed"})
        }
    })
    .catch(() => {
        res.status(500).send({message:"Error on deleting"})
    })
}