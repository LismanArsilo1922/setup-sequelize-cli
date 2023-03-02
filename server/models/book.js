"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init(
    {
      book_name: { type: DataTypes.STRING, allowNull: false },
      book_code: { allowNull: true, type: DataTypes.INTEGER },
      cate_id: { allowNull: false, type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "Books",
      createdAd: "created_at",
      updatedAd: "updated_at",
      deletedAd: "deleted_at",
    }
  );
  return Book;
};
