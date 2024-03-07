const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const { StatusCodes } = require("http-status-codes");
const { exception, message, validationField } = require("../modules/constants");
const { validationResult } = require("express-validator");

const {
  getUser,
  getUsers,
  createUser,
  findUserByEmail,
  generateToken,
  updateUser,
  validateUserByToken,
} = require("../services/user.services");

const { validateName, validateEmail } = require("../modules/validation");

router
  .route("/profile/:_id")
  .get(async (req, res) => {
    const token = req.headers.authorization;
    const userId = +req.params._id;
    try {
      if (!token) {
        return res.status(StatusCodes.FORBIDDEN).send(exception.forbidden);
      }
      const validUser = validateUserByToken(token, userId);
      if (!validUser) {
        return res.status(StatusCodes.FORBIDDEN).send(exception.forbidden);
      }
      const user = await getUser(userId);
      if (!user) {
        return res.status(StatusCodes.NOT_FOUND).send(exception.notFound);
      }
      return res.status(StatusCodes.OK).send(user);
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).send(exception.badRequest);
      console.error(err.message);
    }
  })
  .put(async (req, res) => {
    const token = req.headers.authorization;
    const userId = +req.params._id;
    const { name, surname, email, gender, photo } = req.body;
    const updateUserData = { name, surname, email, gender, photo };
    try {
      if (!token) {
        return res.status(StatusCodes.FORBIDDEN).send(exception.forbidden);
      }
      const validUser = validateUserByToken(token, userId);
      if (!validUser) {
        return res.status(StatusCodes.FORBIDDEN).send(exception.forbidden);
      }
      await updateUser(updateUserData, userId);
      return res.status(StatusCodes.OK).send(message.userUpdated);
    } catch (err) {
      console.error(err.message);
      res.status(StatusCodes.BAD_REQUEST).send(exception.badRequest);
    }
  });

router.route("/profiles").get(async (req, res) => {
  const token = req.headers.authorization;
  try {
    if (!token) {
      return res.status(StatusCodes.FORBIDDEN).send(exception.forbidden);
    }
    const { page } = req.query;
    const users = await getUsers({ page });
    if (!users) {
      return res.status(StatusCodes.NOT_FOUND).send(exception.notFound);
    }
    return res.status(StatusCodes.OK).send(users);
  } catch (err) {
    console.error(err.message);
    return res.status(StatusCodes.BAD_REQUEST).send(exception.badRequest);
  }
});

router
  .route("/user/register")
  .post(
    validateName(validationField.name),
    validateEmail(validationField.email),
    async (req, res) => {
      const { name, email, password } = req.body;
      const createUserData = { name, email, password };
      const result = validationResult(req);
      try {
        if (result.isEmpty()) {
          await createUser(createUserData);
          return res.status(StatusCodes.CREATED).send(message.userCreated);
        } else res.status(400).send({ errors: result.array() });
      } catch (err) {
        console.error(err.message);
        res.status(StatusCodes.CONFLICT).send(message.emailExist);
      }
    }
  );

router
  .route("/user/login")
  .post(validateEmail(validationField.email), async (req, res) => {
    const { email, password } = req.body;
    const loginUserData = { email, password };
    try {
      const user = await findUserByEmail(loginUserData.email);
      if (!user) {
        return res.status(StatusCodes.BAD_REQUEST).send(message.userNotFound);
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(StatusCodes.BAD_REQUEST).send(message.badPassword);
      }
      const token = generateToken(user);
      return res.status(StatusCodes.OK).send(token);
    } catch (err) {
      console.error(err.message);
    }
  });

module.exports = router;
