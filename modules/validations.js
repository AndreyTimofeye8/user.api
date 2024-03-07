const { body } = require("express-validator");
const { validationMessage, nameLength, surNameLength } = require("./constants");

const validateName = (name) => {
  return body(name)
    .trim()
    .notEmpty()
    .withMessage(validationMessage.nameMissing)
    .isLength({ min: nameLength.min, max: nameLength.max })
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
    .isLength({ min: surNameLength.min, max: surNameLength.max })
    .withMessage(validationMessage.invalidSurnameLength)
    .escape();
};

module.exports = {
  validateName,
  validateSurname,
  validateEmail,
};
