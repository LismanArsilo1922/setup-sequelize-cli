const { Categories, Books } = require("../models");
const { createError } = require("../utils");

const getAllCategories = async (req, res) => {
  try {
    const data = await Categories.findAndCountAll();

    return res.status(200).json({
      status: true,
      message: "Get All Category Successfully",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

const deletedCategories = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await Categories.findByPk(id);
    if (!data) return next(createError(200, "Category Not Found"));

    await data.destroy();

    return res.status(200).json({
      status: true,
      message: "Deleted Category Successfully",
    });
  } catch (error) {
    next(error);
  }
};

const createCategories = async (req, res, next) => {
  console.info(req.body);
  try {
    const data = await Categories.create(req.body);
    return res.status(200).json({
      status: true,
      message: "Created Category Successfully",
      data: data,
    });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      return next(createError(400, "Category already exists"));
    } else {
      next(error);
    }
  }
};

module.exports = {
  getAllCategories,
  deletedCategories,
  createCategories,
};
