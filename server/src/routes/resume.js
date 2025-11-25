import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// GET /api/resume
router.get('/', (req, res) => {
  const resumePath = join(__dirname, '../../public/resume.pdf');

  // Check if resume file exists
  if (!existsSync(resumePath)) {
    return res.status(404).json({
      success: false,
      message: 'Resume not found. Please add resume.pdf to server/public/',
    });
  }

  // Send the resume file
  res.download(resumePath, 'resume.pdf', (err) => {
    if (err) {
      console.error('Error downloading resume:', err);
      if (!res.headersSent) {
        res.status(500).json({
          success: false,
          message: 'Error downloading resume',
        });
      }
    }
  });
});

export default router;

