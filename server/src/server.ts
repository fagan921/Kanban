const forceDatabaseRefresh = false;

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors'; // ✅ Import CORS
import routes from './routes/index.js';
import { sequelize } from './models/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

// ✅ Enable CORS (Allow Frontend to Access API)
app.use(cors({
  origin: "*", // Change this to your frontend URL in production
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// ✅ Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

app.use(express.json());
app.use(routes);

// ✅ Start the database and server
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port ${PORT}`);
  });
});