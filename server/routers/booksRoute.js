const express = require("express");
const router = express.Router();

const { booksCtrl } = require("../controllers/");

router.route("/books/").get(booksCtrl.getAllBook);
router.route("/books/:id").delete(booksCtrl.deletedBook);
router.route("/books/").post(booksCtrl.createBook);

module.exports = router;
