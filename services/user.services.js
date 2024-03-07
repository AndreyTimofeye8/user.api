const { PrismaClient } = require("@prisma/client");
const { SECRET } = require("../config/config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  pageSize,
  saltRounds,
  timeUntilEndToken,
} = require("../modules/constants");

const prisma = new PrismaClient();

const getUsers = ({ page }) => {
  const offset = (page - 1) * pageSize;
  return prisma.user.findMany({
    orderBy: { registeredAt: "desc" },
    skip: offset,
    take: pageSize,
  });
};

const getUser = (userId) => {
  return prisma.user.findUnique({ where: { id: userId } });
};

const createUser = (createUserData) => {
  const { name, email, password } = createUserData;
  const hashPassword = bcrypt.hashSync(password, saltRounds);
  return prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashPassword,
    },
  });
};

const updateUser = (updateUserData, userId) => {
  const { name, surname, email, gender, photo } = updateUserData;
  const updatedUser = prisma.user.update({
    where: { id: userId },
    data: {
      name: name,
      surname: surname,
      email: email,
      gender: gender,
      photo: photo,
    },
  });
  return updatedUser;
};

const findUserByEmail = (email) => {
  const user = prisma.user.findUnique({ where: { email: email } });
  return user;
};

const generateToken = (user) => {
  const { id, name, email } = user;
  const payload = { id, name, email };
  const token = jwt.sign(payload, SECRET, { expiresIn: timeUntilEndToken });
  return token;
};

const validateUserByToken = (token, userId) => {
  const payload = jwt.verify(token, SECRET);
  const { id } = payload;
  return id === userId;
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  findUserByEmail,
  generateToken,
  updateUser,
  validateUserByToken,
};
