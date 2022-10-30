const express = require("express");
const router = express.Router();

const postArticleRouter = require("./post.article");
const getArticleRouter = require("./get.article");

router.use(postArticleRouter);
router.use(getArticleRouter);

module.exports = router;
