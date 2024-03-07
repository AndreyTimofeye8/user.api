const { StatusCodes } = require("http-status-codes");
const { exception } = require("../modules/constants");
const { validateUserByToken } = require("../services/user.services");

const checkAutorization = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(StatusCodes.FORBIDDEN).send(exception.forbidden);
  }
  next();
};

const checkValidUser = (req, res, next) => {
  const token = req.headers.authorization;
  const userId = +req.params._id;
  const validUser = validateUserByToken(token, userId);
  if (!validUser) {
    return res.status(StatusCodes.FORBIDDEN).send(exception.forbidden);
  }
  next();
};

module.exports = { checkAutorization, checkValidUser };
