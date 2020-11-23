import express from 'express';
import { userRoute } from './userRoute';
import { authRoute } from './authRoute';

export const route = (app) => {
  app.use(
    '/api',
    (() => {
      const router = express.Router();
      router.use('/ping', (req, res) => {
        res.json({ message: 'pong🏓' });
      });
      authRoute(router);
      userRoute(router);
      return router;
    })()
  );
};
