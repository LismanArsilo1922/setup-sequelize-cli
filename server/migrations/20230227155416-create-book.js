"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Books",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        book_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        book_code: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        cate_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("TIMESTAMP"),
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("TIMESTAMP"),
        },
        deleted_at: {
          allowNull: true,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("TIMESTAMP"),
        },
      },
      {
        timestamps: true,
        paranoid: true,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Books");
  },
};
