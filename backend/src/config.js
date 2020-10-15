import dotenv from 'dotenv';

let path;
switch (process.env.NODE_ENV) {
  case 'dev':
    path = '.env.dev';
    break;
  case 'test':
    path = '.env.test';
    break;
  default:
    path = '.env';
    break;
}

dotenv.config({
  path,
});

export const dbUser = process.env.DB_USER;
export const dbPassword = process.env.DB_PASSWORD;
export const dbName = process.env.DB_NAME;
