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
      book_name: DataTypes.STRING,
      book_code: DataTypes.INTEGER,
      cate_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book",
      createdAd: "created_at",
    }
  );
  return Book;
};
