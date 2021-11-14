const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8080
// const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use(cors({
    origin: ['http://localhost:8081'],
    credentials: true
}))

// routes

require('./app/routes/material.routes')(app)
require('./app/routes/unit.routes')(app)
// require('./app/routes/product.routes')(app)
// require('./app/routes/product_assignment.routes')(app)
// require('./app/routes/material_request.routes')(app)
require('./app/routes/role.routes')(app)
require('./app/routes/auth.routes')(app)
require('./app/routes/type.routes')(app)
require('./app/routes/category.routes')(app)
require('./app/routes/user.routes')(app)


app.listen(PORT, ()=>{
    console.log(PORT);
})
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the jungle" });
  });
  

const db = require('./app/models');
const Role = db.role;
const User = db.user;

db.sequelize.sync({force:true})
.then(()=>{
    console.log("Drop and Resync Database");
    initial();
})

function initial() {
    Role.create({
        id: 1,
        name: 'Manajemen'
    })
    Role.create({
        id: 2,
        name: 'Supervisor'
    })
    Role.create({
        id: 3,
        name: 'Tim Produksi'
    })
    User.create({
        name: 'Farhan',
        email:'farhan@mail.id',
        username: "farhan",
        password: "$2a$10$sVv13GZbILkxXG3jNaaXOenGmKVZmlIgonJSa.TV/ciB0gsVXWA4m",
                    // 12345678
        roleId: 1,
    })
    User.create({
        name: 'Bambang',
        email:'bambang@mail.id',
        username: 'bambang',
        password: '$2a$10$sVv13GZbILkxXG3jNaaXOenGmKVZmlIgonJSa.TV/ciB0gsVXWA4m',
                    // 12345678
        roleId: 2,
    })
    User.create({
        name: 'John',
        email:'john@mail.id',
        username: 'john',
        password: '$2a$10$sVv13GZbILkxXG3jNaaXOenGmKVZmlIgonJSa.TV/ciB0gsVXWA4m',
                    // 12345678
        roleId: 3,
    })

}