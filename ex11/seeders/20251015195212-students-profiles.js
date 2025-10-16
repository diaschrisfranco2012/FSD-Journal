'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('students',[
      {name:'alex',email:'alex@gmail.com',createdAt:new Date(),updatedAt:new Date()},
      {name:'john',email:'john@gmail.com',createdAt:new Date(),updatedAt:new Date()}
    ],{});

    const [rows]=await queryInterface.sequelize.query('SELECT id from students ORDER BY id ASC;');

    await queryInterface.bulkInsert('profiles',[
      {bio:'Bca',studentId:rows[0].id,createdAt:new Date(),updatedAt:new Date()},
      {bio:'Bcom',studentId:rows[1].id,createdAt:new Date(),updatedAt:new Date()}
    ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('profiles', null, {});
    await queryInterface.bulkDelete('students', null, {});
  }
};
