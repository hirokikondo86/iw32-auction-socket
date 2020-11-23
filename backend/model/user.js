import { Sequelize } from 'sequelize';
import { db } from './db';

export const User = db.sequelize.define(
  'User',
  {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  },
  {
    tableName: 'user',
    underscored: true,
  }
);
