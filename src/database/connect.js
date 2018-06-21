const Sequelize = require('sequelize')
const dbConfig = new Sequelize('database_development', 'postgres', 'password', {
  host: 'postgres',
  dialect: 'postgres'
})

module.exports = dbConfig
