'use strict';

import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import { connectToDatabase } from './config/db.js';
import { userRoute } from './routes/userRoute.js';
import jsonwebtoken from 'jsonwebtoken';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to database
connectToDatabase(() => {
    console.log('MongoDB Connected. Server started on:', port);
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Authentication middleware
app.use((req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    const token = req.headers.authorization.split(' ')[1];
    try {
      const decodedToken = jsonwebtoken.verify(token, 'RESTFULAPIs');
      req.user = decodedToken;
      next();
    } catch (error) {
      req.user = undefined;
      next();
    }
  } else {
    req.user = undefined;
    next();
  }
});

// Routes
userRoute(app);

// 404 error handler
app.use((req, res) => {
  res.status(404).send({ message: `Route ${req.url} Not found.` });
});

// Start server
app.listen(port, () => {
  console.log('RESTful API server started on:', port);
});

app.use((req, _res) => {
    res.status(404).send({ message: `Route ${req.url} Not found.` });
  });

export default app;
