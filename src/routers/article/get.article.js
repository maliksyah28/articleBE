const express = require("express");
const router = express.Router();

const { auth } = require("../../helpers/auth");
const { article } = require("../../../models");

const getArticleList = async (req, res, next) => {
  try {
    const resGetPostList = await article.findAll();
    res.send({
      status: "Success",
      message: "Success get post list",
      data: resGetPostList,
    });
  } catch (error) {
    next(error);
  }
};
const getDetailArticle = async (req, res, next) => {
  try {
    const { id } = req.query;
    const resGetPostList = await article.findOne({
      where: { id },
    });
    res.send({
      status: "Success",
      message: "Success get post list",
      data: resGetPostList,
    });
  } catch (error) {
    next(error);
  }
};

router.get("/allArticle", getArticleList);
router.get("/articleDetail", getDetailArticle);

module.exports = router;
