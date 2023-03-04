"use strict";
const { Model } = require("sequelize");
const { format } = require("date-fns");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.Categories, {
        foreignKey: "cate_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    }
  }
  Book.init(
    {
      book_name: { allowNull: false, type: DataTypes.STRING },
      book_code: { allowNull: true, type: DataTypes.INTEGER },
      cate_id: { allowNull: false, type: DataTypes.INTEGER },
      created_at: {
        type: DataTypes.DATE,
        field: "created_at",
        get: function () {
          return this.getDataValue("created_at")
            ? format(this.getDataValue("created_at"), "yyyy-MM-dd HH:mm:ss")
            : this.getDataValue("created_at");
        },
      },
      updated_at: {
        type: DataTypes.DATE,
        field: "updated_at",
        get: function () {
          return this.getDataValue("updated_at")
            ? format(this.getDataValue("updated_at"), "yyyy-MM-dd HH:mm:ss")
            : this.getDataValue("updated_at");
        },
      },
    },
    {
      sequelize,
      modelName: "Books",
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      paranoid: true,
    }
  );
  return Book;
};
