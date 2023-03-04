const { Categories, Books } = require("../models");
const { createError } = require("../utils");

const getAllCategories = async (req, res) => {
  try {
    const data = await Categories.findAndCountAll();

    return res.status(200).json({
      status: true,
      message: "OK",
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
      message: "OK Hapus",
    });
  } catch (error) {
    next(error);
  }
};

const createCategories = async (req, res) => {
  console.info(req.body);
  try {
    const data = await Categories.create(req.body);
    return res.status(200).json({
      status: true,
      message: "ok",
      data: data,
    });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(400).json({ message: "Error: Data already exists" });
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
