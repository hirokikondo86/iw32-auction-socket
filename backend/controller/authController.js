import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { authConfig } from '../config/auth';
import { User } from '../model/user';
import { respondJSON, respondErrorJSON } from '../util/http';

export const signup = async (req, res) => {
  const user = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  }).catch((err) => {
    return respondErrorJSON(res, 500, err.message);
  });

  const payload = { id: user.id };
  const token = jwt.sign(payload, authConfig.JWT_SECRET, {
    expiresIn: 86400, // 24 hours
  });

  return respondJSON(res, 200, {
    id: user.id,
    username: user.username,
    email: user.email,
    accessToken: token,
  });
};

export const signin = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  }).catch((err) => {
    return respondErrorJSON(res, 500, err.message);
  });

  if (!user) {
    return respondErrorJSON(res, 404, 'User Not found.');
  }

  const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

  if (!passwordIsValid) {
    return respondErrorJSON(res, 401, 'Invalid Password.');
  }

  const payload = { id: user.id };
  const token = jwt.sign(payload, authConfig.JWT_SECRET, {
    expiresIn: 86400, // 24 hours
  });

  return respondJSON(res, 200, {
    id: user.id,
    username: user.username,
    email: user.email,
    accessToken: token,
  });
};
