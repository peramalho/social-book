import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';

import { dbUser, dbPassword, dbName } from './config.js';
import routes from './routes.js';

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(routes);

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0-sirbp.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then()
  .catch((err) => {
    console.log(err);
  });

export default app;
