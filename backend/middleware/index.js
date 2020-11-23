import express from 'express';
import cors from 'cors';

const corsOption = {
  origin: 'http://localhost:8080',
};

export const middleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors(corsOption));
};
