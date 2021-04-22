'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Tasks', [{
      name: ' Cebola',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Hamburger', 
        createdAt: new Date(),
        updatedAt: new Date()
 
    },{
      name: 'Batata for ever', 
        createdAt: new Date(),
        updatedAt: new Date()
 
    }]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
