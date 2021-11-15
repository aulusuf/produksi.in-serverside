const db = require('../models')
const User = db.user

exports.findAll = (req, res) => {
    const username = req.query.username;
    let condition = username ? {username: {[Op.iLike]: `%${username}`}} : null;

    User.findAll({where: condition})
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.status(500).send(err.message, "Some error occurred while retrieving users")
    })
}
exports.findOne = (req, res) => {
    const id = req.params.id

    User.findByPk(id)
    .then((data)=>{
        if(data){
            res.send(data)
        } else {
            res.status(404).send({
                message:`User ID = ${id} not found`
            })
        }
    })
    .catch((err)=>{
        res.status(500).send({ message: err.message})
    })
}
exports.update = (req, res) => {
    const id = req.params.id
    
    User.update(req.body, {
        where: {id: id}
    })
    .then((num)=>{
        (num == 1) ? res.send({ message: "User successfully updated"}) : res.send({ message: "Cannot update user"})
    })
    .catch((err)=> {
        res.status(500).send({message: err.message})
    })
}
exports.deleteOne = (req, res) => {
    const id = req.params.id

    User.destroy({
        where: {id: id}
    })
    .then((num)=>{
        if(num == 1){
            res.send({ message: "User successfully deleted"})
        } else {
            res.send({ message: "Cannot delete user"})
        }
    })
    .catch(() => {
        res.status(500).send({ message: "Error on deleting user" })
    })
}
exports.findByRole = (req, res) => {
    const roleId = req.params.roleId

    User.findAll(roleId)
    .then((data)=>{
        if(data){
            res.send(data)
        } else {
            res.status(404).send({ message: "No users found" });
        }
    })
    .catch((err)=>{
        res.status(500).send({ message: err.message})
    })
}