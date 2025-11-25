# Public Directory

Place your `resume.pdf` file in this directory.

The resume will be served at the `/api/resume` endpoint and can be downloaded via the "Download Resume" button on the portfolio website.

## File Requirements

- **Filename**: `resume.pdf` (exact name required)
- **Format**: PDF
- **Size**: Recommended under 2MB for fast downloads
- **Content**: Your professional resume/CV

## How to Add

1. Export or save your resume as a PDF
2. Copy it to this directory: `server/public/resume.pdf`
3. The endpoint will automatically serve it

## Testing

After adding your resume, test the download:
- Visit `http://localhost:5000/api/resume` (development)
- Or click the "Download Resume" button on the website

