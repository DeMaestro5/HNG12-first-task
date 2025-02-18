import express from 'express';
import cors from 'cors';
import infoRoutes from './routes/infoRoutes';
import { CONFIG } from './config/constants';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', infoRoutes);

// Start server
app.listen(CONFIG.PORT, () => {
  console.log(`Server is running on http://localhost:${CONFIG.PORT}`);
});

export default app;
