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
module.exports = router;

// config database heroku
// "username": "yppfpbgtkxpfne",
// "password": "38c4b1af1f09a03ba1b041b9f3652a0538d05972e2ea4c5c0a40c30856ea4bca",
// "database": "d4ce2apk1ovrfg",
// "host": "ec2-18-208-55-135.compute-1.amazonaws.com",
// "dialect": "postgres"
