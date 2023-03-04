"use strict";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    const currentTime = Sequelize.fn(
      "CONVERT_TZ",
      Sequelize.fn("NOW"),
      "+00:00",
      "+07:00"
    );
    await queryInterface.createTable("Categories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cate_name: {
        type: Sequelize.STRING,
      },
      cate_code: {
        type: Sequelize.INTEGER,
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

    await queryInterface.addIndex("Categories", ["cate_name"], {
      unique: true,
      name: "cate_name_index",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex("Categories", "cate_name");
    await queryInterface.dropTable("Categories");
  },
};
