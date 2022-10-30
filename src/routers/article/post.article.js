const express = require("express");
const router = express.Router();

const { auth } = require("../../helpers/auth");
const { article } = require("../../../models");
const { uploadImageArticle } = require("../../lib/multer");

const postArticleController = async (req, res, next) => {
  try {
    const { judulBacaan, bahanBacaan, imageBacaan, shortDesc } = req.body;
    const { id } = req.user;

    const resCreatePost = await article.create({
      userId: id,
      judulBacaan: judulBacaan,
      bahanBacaan: bahanBacaan,
      imageBacaan: imageBacaan,
      shortDesc: shortDesc,
    });

    res.send({
      status: "Success",
      message: "Success create a new post",
      data: resCreatePost,
    });
  } catch (error) {
    next(error);
  }
};

router.post(
  "/createArticle",
  auth,
  uploadImageArticle.single("gambar"),
  postArticleController
);

module.exports = router;
