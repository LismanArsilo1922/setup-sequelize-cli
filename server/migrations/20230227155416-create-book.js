"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Books", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      book_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      book_code: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      cate_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addIndex("Books", ["book_name"], {
      unique: true,
      name: "book_name_index",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex("Books", "book_name");
    await queryInterface.dropTable("Books");
  },
};
