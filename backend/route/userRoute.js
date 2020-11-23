import { verifyToken } from '../middleware/authMiddleware';
import * as userController from '../controller/userController';

export const userRoute = (router) => {
  router.get('/user', [verifyToken], userController.index);
  router.get('/user/:id', [verifyToken], userController.show);
  router.post('/user', [verifyToken], userController.create);
  router.put('/user/:id', [verifyToken], userController.update);
  router.delete('/user/:id', [verifyToken], userController.destroy);
};
