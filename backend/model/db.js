import { Sequelize } from 'sequelize';
import { dbConfig } from '../config/db';

const sequelize = new Sequelize(
  dbConfig.DB_DATABASE,
  dbConfig.DB_USER,
  dbConfig.DB_PASSWORD,
  {
    host: dbConfig.DB_HOST,
    dialect: dbConfig.dialect,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const _db = {};
_db.Sequelize = Sequelize;
_db.sequelize = sequelize;

export const db = _db;
