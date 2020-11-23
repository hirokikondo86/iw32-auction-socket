import { authConfig } from '../config/auth';
import * as authController from '../controller/authController';
import { checkDuplicateEmail, verifyToken } from '../middleware/authMiddleware';

export const authRoute = (router) => {
  router.post('/auth/signup', [checkDuplicateEmail], authController.signup);
  router.post('/auth/signin', authController.signin);
};
