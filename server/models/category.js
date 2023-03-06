"use strict";
const { Model } = require("sequelize");
const { format } = require("date-fns");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Books, { foreignKey: "cate_id" });
    }
  }
  Category.init(
    {
      cate_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUnique: async function (value, next) {
            const user = await Category.findOne({
              where: { cate_name: value },
            });
            if (user) {
              const error = new Error();
              next(error);
            }
            next();
          },
        },
      },
      cate_code: {
        type: DataTypes.INTEGER,
      },
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
      modelName: "Categories",
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    }
  );
  return Category;
};
