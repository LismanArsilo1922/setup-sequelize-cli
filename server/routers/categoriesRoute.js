const express = require("express");
const router = express.Router();

const { categoriesCtrl } = require("../controllers/");

router.route("/categories/").post(categoriesCtrl.createCategories);
router.route("/categories/").get(categoriesCtrl.getAllCategories);
router.route("/categories/:id").delete(categoriesCtrl.deletedCategories);

module.exports = router;
