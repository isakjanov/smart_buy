import express from 'express';
import { indexRouter } from './routes/index';
import { userRouter } from './routes/user';
import * as bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', indexRouter);
app.use('/user', userRouter);

module.exports = app;