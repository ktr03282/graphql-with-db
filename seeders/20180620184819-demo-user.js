'use strict';

const mockUsers = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'hoge@hoge.com'
  },
  {
    firstName: 'Mike',
    lastName: 'Michigan',
    email: 'hage@hoge.com'
  },
  {
    firstName: 'Taro',
    lastName: 'Yamada',
    email: 'boke@boke.com'
  },
  {
    firstName: 'Bar',
    lastName: 'Foo',
    email: 'foo@bar.com'
  }
].map(e => {
  return {
    ...e,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', mockUsers, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
