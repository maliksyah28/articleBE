const express = require("express");
const router = express.Router();

const { user } = require("../../../models");

const { isFieldEmpties, passwordValidator } = require("../../helpers");
const validator = require("email-validator");
const { compare, hash } = require("../../lib/bcrypt");
const { createToken } = require("../../lib/token");

const registerUserController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const emptyFields = isFieldEmpties({
      name,
      email,
      password,
    });

    // checking email
    const emailValidator = validator.validate(email);
    if (!emailValidator) {
      throw {
        code: 400,
        message: "Wrong email format",
      };
    }

    //checking password
    const validatePassword = passwordValidator(password);
    if (validatePassword)
      throw {
        code: 400,
        message: validatePassword,
      };
    const checkUser = await user.findOne({ where: { email } });
    if (checkUser) {
      if (checkUser.email == email) {
        throw {
          code: 400,
          message: "Email already exist",
        };
      }
    }
    // hash password
    const encryptedPassword = hash(password);

    //cretae token
    const resCreateUser = await user.create({
      name,
      email,
      password: encryptedPassword,
    });

    const userId = resCreateUser.dataValues.id;
    const userToken = createToken({ userId });

    const saveToken = await user.update(
      { token: userToken },
      { where: { id: resCreateUser.dataValues.id } }
    );
    // console.log(saveToken);

    res.send({
      status: "Berhasil",
      message: "sukses",
      data: {
        result: resCreateUser,
      },
    });
  } catch (error) {
    next(error);
  }
};
const loginUserController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const resGetLoginUser = await user.findOne({
      where: { email: email },
    });

    if (!resGetLoginUser) {
      throw {
        code: 400,
        message: "email yang anda masukan salah",
      };
    }
    const userPass = resGetLoginUser.dataValues;
    const isPasswordMatch = compare(password, userPass.password);

    if (!isPasswordMatch) {
      throw {
        code: 400,
        message: `Password yang anda masukan salah`,
      };
    }

    res.send({
      status: "Succsess",
      message: "Login Succsess",
      data: {
        result: {
          userPass,
        },
      },
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

router.post("/Register", registerUserController);
router.post("/Login", loginUserController);

module.exports = router;
