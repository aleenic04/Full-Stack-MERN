import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import route from './routes/UserRoute.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

app.use(
  cors({
    origin: [CLIENT_URL, 'http://localhost:3000'],
    credentials: true,
  })
);
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  const dbState = mongoose.connection.readyState;
  const dbStatus =
    dbState === 1 ? 'connected' : dbState === 2 ? 'connecting' : 'disconnected';
  res.json({ message: 'MERN API is running', database: dbStatus });
});

app.use('/api', route);

if (!MONGOURL) {
  console.error(
    'MONGO_URL is not set. Add it in Render → Environment (Atlas connection string).'
  );
} else {
  mongoose
    .connect(MONGOURL, { serverSelectionTimeoutMS: 10000 })
    .then(() => console.log('DB Connected Successfully.'))
    .catch((error) => {
      console.error('MongoDB connection failed:', error.message);
      console.error(
        'Check Atlas Network Access (allow 0.0.0.0/0) and MONGO_URL user/password on Render.'
      );
    });
}

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});