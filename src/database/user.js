const User = require('../../models').User

module.exports = {
  findOne: async args => {
    const {
      id
    } = args

    return await User.findOne({
      where: {
        id: id
      }
    })
  },
  findAll: async () => {
    return await User.findAll()
  },
  createUser: async args => {
    return await User.create({
      ...args,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  },
  updateUser: async args => {
    const {
      firstName,
      lastName,
      email,
      id
    } = args

    await User.update({
      firstName,
      lastName,
      email,
      updatedAt: new Date()
    }, {
      where: {
        id: id
      }
    })
    return await User.findOne({ where: { id: id } })
  }
}
