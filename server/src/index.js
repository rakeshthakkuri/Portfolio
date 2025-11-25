import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';
import contactRoutes from './routes/contact.js';
import resumeRoutes from './routes/resume.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(join(__dirname, '../public')));

// Serve built client in production
const clientDistPath = join(__dirname, '../../client/dist');
const clientIndexPath = join(clientDistPath, 'index.html');
const serveClient = existsSync(clientDistPath) && existsSync(clientIndexPath);

if (serveClient) {
  app.use(express.static(clientDistPath));
}

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/resume', resumeRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

// 404 / SPA fallback
app.use((req, res, next) => {
  if (req.path.startsWith('/api') || !serveClient) {
    return res.status(404).json({
      success: false,
      message: 'Route not found',
    });
  }

  return res.sendFile(clientIndexPath);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

