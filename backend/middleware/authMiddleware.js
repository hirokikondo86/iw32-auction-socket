import jwt from 'jsonwebtoken';
import { authConfig } from '../config/auth';
import { User } from '../model/user';
import { respondJSON, respondErrorJSON } from '../util/http';

export const checkDuplicateEmail = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (user) {
        respondErrorJSON(res, 400, 'Email is already in use.');
      }
      next();
    })
    .catch((err) => {
      respondErrorJSON(res, 400, err.message);
    });
};

export const verifyToken = (req, res, next) => {
  let token = '';
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    token = req.headers.authorization.split(' ')[1];
  } else {
    return respondErrorJSON(res, 403, 'No token provided.');
  }

  jwt.verify(token, authConfig.JWT_SECRET, (err, decoded) => {
    if (err) {
      return respondErrorJSON(res, 401, 'Unauthorized.');
    }
    req.userId = decoded.id;
    next();
  });
};
