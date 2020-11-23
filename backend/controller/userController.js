import bcrypt from 'bcryptjs';
import { User } from '../model/user';
import { respondJSON, respondErrorJSON } from '../util/http';

export const index = async (req, res) => {
  const users = await User.findAll({
    attributes: ['id', 'username', 'email'],
  }).catch((err) => {
    return respondErrorJSON(res, 500, err.message);
  });

  return respondJSON(res, 200, users);
};

export const show = async (req, res) => {
  const user = await User.findOne({
    where: { id: req.params.id },
  }).catch((err) => {
    return respondErrorJSON(res, 500, err.message);
  });

  return respondJSON(res, 200, user);
};

export const create = async (req, res) => {
  await User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  }).catch((err) => {
    return respondErrorJSON(res, 500, err.message);
  });

  return respondJSON(res, 201, 'User created.');
};

export const update = async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } }).catch((err) => {
    return respondErrorJSON(res, 500, err.message);
  });
  console.log(req.body);
  user.username = req.body.username;
  user.email = req.body.email;
  user.password = bcrypt.hashSync(req.body.password, 8);
  await user.save({ fields: ['username', 'email', 'password'] }).catch((err) => {
    return respondErrorJSON(res, 500, err.message);
  });

  return respondJSON(res, 200, 'User updated.');
};

export const destroy = async (req, res) => {
  await User.destroy({ where: { id: req.params.id } }).catch((err) => {
    return respondErrorJSON(res, 500, err.message);
  });

  return respondJSON(res, 200, 'User deleted.');
};
