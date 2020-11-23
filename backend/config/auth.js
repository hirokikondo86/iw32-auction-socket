import dotenv from 'dotenv';

dotenv.config();

export const authConfig = {
  JWT_SECRET: process.env.JWT_SECRET,
};
