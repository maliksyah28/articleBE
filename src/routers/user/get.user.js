const express = require("express");
const router = express.Router();
const { user } = require("../../../models");

const getUserList = async (req, res, next) => {
  try {
    const resGetPostList = await user.findAll();
    res.send({
      status: "Success",
      message: "Success get user list",
      data: resGetPostList,
    });
  } catch (error) {
    next(error);
  }
};
router.get("/userList", getUserList);
