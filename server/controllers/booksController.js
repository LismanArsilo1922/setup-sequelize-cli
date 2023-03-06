const { Books, Categories } = require("../models");
const { createError } = require("../utils");

const getAllBook = async (req, res) => {
  try {
    const data = await Books.findAll({
      include: { model: Categories, right: true },
    });
    return res.status(200).json({
      status: true,
      message: "OK",
      data: data,
    });
  } catch (error) {
    console.info(error);
  }
};

const deletedBook = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Books.findByPk(id);
    if (!data) return console.info("gaada");

    await data.destroy();
    return res.status(200).json({
      status: true,
      message: "OK Hapus",
    });
  } catch (error) {
    console.info(error);
  }
};

const createBook = async (req, res, next) => {
  try {
    const data = await Books.create(req.body);

    return res.status(200).json({
      status: true,
      message: "ok",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllBook,
  deletedBook,
  createBook,
};
