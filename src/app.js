import express from 'express';
import { indexRouter } from './routes/index';
import { userRouter } from './routes/user';

const app = express();

app.use('/', indexRouter);
app.use('/user', userRouter);

module.exports = app;