import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv'; // Load environment variables
import connect from './db/db.js';
import userRoutes from './routes/user.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config(); // Ensure .env is loaded before anything else
connect(); // Now call connect() after loading .env

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

export default app;
