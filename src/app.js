import express from 'express';
import { indexRouter } from './routes/index';
import { userRouter } from './routes/user';

const app = express();

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(3000, () => console.log('Example app listening on port 3000'));
