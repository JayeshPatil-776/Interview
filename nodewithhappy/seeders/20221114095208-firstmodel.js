'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'firstmodels',
      [
        {
          id: 1,
          firstName: 'user1',
          lastName: '1',
          email: 'user1@test.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          firstName: 'user2',
          lastName: '2',
          email: 'user2@test.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          firstName: 'user3',
          lastName: '3',
          email: 'user3@test.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
