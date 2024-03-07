const { body } = require("express-validator");
const { validationMessage } = require("./constants");

const validateName = (name) => {
  return body(name)
    .trim()
    .notEmpty()
    .withMessage(validationMessage.nameMissing)
    .isLength({ min: 3, max: 20 })
    .withMessage(validationMessage.invalidNameLength)
    .escape();
};

const validateEmail = (email) => {
  return body(email)
    .trim()
    .notEmpty()
    .withMessage(validationMessage.emailMissing)
    .isEmail()
    .withMessage(validationMessage.invalidEmail)
    .escape();
};

const validateSurname = (surname) => {
  return body(surname)
    .trim()
    .notEmpty()
    .withMessage(validationMessage.surnameMissing)
    .isLength({ min: 3, max: 30 })
    .withMessage(validationMessage.invalidSurnameLength)
    .escape();
};

module.exports = {
  validateName,
  validateSurname,
  validateEmail,
};
