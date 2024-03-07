const exception = {
  notFound: "Not found",
  badRequest: "Bad request",
  forbidden: "Forbidden",
};

const message = {
  emailExist: "Email already exist",
  userNotFound: "User not found",
  badPassword: "Bad password",
  userCreated: "User created",
  userUpdated: "User updated",
};

const validationMessage = {
  nameMissing: "Name is missing",
  invalidNameLength: "Name must be between 3 and 20 characters long",
  emailMissing: "Email is missing",
  invalidEmail: "Incorrect email address entered",
  surnameMissing: "Surname is missing",
  invalidSurnameLength: "Surname must be between 3 and 30 characters long",
};

const validationField = {
  name: "name",
  email: "email",
  password: "password",
};

module.exports = { exception, message, validationField, validationMessage };
