const { PrismaClient } = require("@prisma/client");
const { SECRET } = require("../config/config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

const getUsers = ({ page }) => {
  const pageSize = 10;
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
  const hashPassword = bcrypt.hashSync(password, 5);
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
  console.log(updateUserData);
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
  const token = jwt.sign(payload, SECRET, { expiresIn: "4h" });
  return token;
};

const validateUserByToken = (token, userId) => {
  const payload = jwt.verify(token, SECRET);
  const { id } = payload;
  if (id === userId) {
    return true;
  }
  return false;
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
