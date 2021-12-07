import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import { initDb }  from './database';
import actionsRouter from './routes/actions';
import shopRouter from './routes/shop';

// Initializion
dotenv.config();
initDb();

const app = express();
app.use(morgan('dev'));
app.use(cors());
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(express.static('public'));

// Routers
app.use('/actions', actionsRouter);
app.use('/shop', shopRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
