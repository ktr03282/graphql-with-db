const books = require('../mock')
const Sequelize = require('sequelize')
const dbConfig = require('../database/connect')
const user = require('../../src/database/user')

module.exports = {
  Query: {
    books: () => books,
    user: async (root, args, context) => await user.findOne(args),
    users: async (root, args, context) => await user.findAll()
  },
  Mutation: {
    createUser: async (root, args) => await user.createUser(args),
    updateUser: async (root, args) => await user.updateUser(args)
  }
}
