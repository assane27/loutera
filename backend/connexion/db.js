//connection a la base de donné
const Sequelize = require('sequelize');// import du module sequelize
// configuration de la base de donné
var sequelize = new Sequelize('loutera', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    pool:{
        max: 5,
        min: 0,
        idle: 10000
    }
})
//exporter la configuration de la base de donné
module.exports=sequelize;