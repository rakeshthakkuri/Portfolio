# Portfolio Website

A clean, minimal, and highly responsive portfolio website built with React (Vite) and Node.js (Express). Features a mobile-first design, dark mode support, and a fully functional contact form.

## 🚀 Features

- **Clean & Minimal Design** - Lots of white space, clear visual hierarchy, readable typography
- **Mobile-First & Responsive** - Optimized for all screen sizes with fluid layouts
- **Dark Mode Toggle** - System preference detection with manual override
- **Fast & Accessible** - Semantic HTML, keyboard navigation, ARIA attributes, 90+ Lighthouse score
- **Contact Form** - Fully functional with backend API, validation, and rate limiting
- **Resume Download** - Endpoint to serve resume PDF
- **Smooth Animations** - Subtle Framer Motion microinteractions
- **SEO Optimized** - Meta tags, Open Graph, and Twitter Card support

## 📁 Project Structure

```
Portfolio/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── data/          # Placeholder data
│   │   ├── utils/         # Utility functions
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── package.json
│   └── vite.config.js
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── controllers/   # Route controllers
│   │   └── index.js       # Server entry point
│   ├── public/            # Static files (resume.pdf)
│   ├── package.json
│   └── .env.example
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Headless UI** - Accessible component primitives

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Nodemailer** - Email sending
- **Express Rate Limit** - API rate limiting
- **Express Validator** - Input validation

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm (or yarn/pnpm)

### Setup

1. **Clone or navigate to the project directory**
   ```bash
   cd Portfolio
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```
   Or install separately:
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

3. **Configure environment variables**
   ```bash
   cd server
   cp .env.example .env
   ```
   Edit `.env` and add your SMTP credentials (see Configuration section below).

4. **Add your resume PDF**
   ```bash
   # Place your resume.pdf file in server/public/
   cp /path/to/your/resume.pdf server/public/resume.pdf
   ```

## 🚀 Running the Application

### Development

**Run both client and server concurrently:**
```bash
npm run dev:all
```

**Or run separately:**

Terminal 1 (Client):
```bash
npm run dev:client
# or
cd client && npm run dev
```

Terminal 2 (Server):
```bash
npm run dev:server
# or
cd server && npm run dev
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5001

### Production Build

**Build the frontend:**
```bash
npm run build:client
# or
cd client && npm run build
```

**Start the production server:**
```bash
npm run start:server
# or
cd server && npm start
```

## ⚙️ Configuration

### Backend Environment Variables

Create a `.env` file in the `server/` directory:

```env
PORT=5001
NODE_ENV=development
CONTACT_EMAIL=your-email@example.com

# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM="Portfolio Contact <your-email@gmail.com>"
```

### SMTP Setup Examples

**Gmail:**
1. Enable 2-factor authentication
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the app password as `SMTP_PASS`

**SendGrid:**
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

**Mailgun:**
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-smtp-username
SMTP_PASS=your-mailgun-smtp-password
```

### Frontend Customization

Edit `client/src/data/placeholderData.js` to replace all placeholder content:
- Personal information
- Experience entries
- Skills
- Projects
- Social links
- Navigation links

## 📝 Customization Checklist

- [ ] Replace all content in `client/src/data/placeholderData.js`
- [ ] Update `client/index.html` meta tags (title, description, OG tags)
- [ ] Replace domain placeholder in `placeholderData.js`
- [ ] Add your resume PDF to `server/public/resume.pdf`
- [ ] Configure SMTP in `server/.env`
- [ ] Update `CONTACT_EMAIL` in `server/.env`
- [ ] Add your logo or update header branding
- [ ] Replace placeholder project images
- [ ] Update social media links
- [ ] Test contact form with real SMTP
- [ ] Generate OG image for social previews
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain DNS

## 🌐 Deployment

### Render (single service for API + static client)

The Express server can serve the built React frontend, so you can deploy everything as one Render Web Service.

1. Push this repo to GitHub/GitLab.
2. In Render, create a new **Web Service**.
3. Select the repository and use these settings:
   - **Root directory:** `/` (repo root)
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
4. Set environment variables from `.env.example` (PORT optional; Render sets `PORT` automatically).
5. Add `CONTACT_EMAIL`, SMTP credentials, and any other secrets in the Render dashboard.
6. Upload `server/public/resume.pdf` to the repo before deploying so it’s bundled.

`npm run build` runs `npm run install:client && npm run install:server && npm run build:client`, ensuring the Vite build completes before Express starts. `npm start` launches `node server/index.js`, which serves both the API and the built client.

Render automatically provides `NODE_ENV=production`. When the service starts it serves:
- API endpoints under `/api`
- Built React app for all other routes (handled by Express SPA fallback)

If you prefer separate services (static + API), keep using the instructions below.

### Frontend (Vercel/Netlify)

**Vercel:**
1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to `client/` directory
3. Run `vercel` and follow prompts
4. Add environment variables if needed

**Netlify:**
1. Connect your GitHub repository
2. Set build command: `cd client && npm install && npm run build`
3. Set publish directory: `client/dist`
4. Deploy

### Backend (Render/Heroku/Railway)

**Render:**
1. Create a new Web Service
2. Connect your repository
3. Set build command: `cd server && npm install`
4. Set start command: `cd server && npm start`
5. Add environment variables from `.env`

**Heroku:**
```bash
cd server
heroku create your-app-name
heroku config:set SMTP_HOST=...
# Add all env variables
git push heroku main
```

**Railway:**
1. Create new project from GitHub
2. Add service (Node.js)
3. Set root directory to `server/`
4. Add environment variables

### Environment Variables for Production

Make sure to set all environment variables in your hosting platform's dashboard.

## 🧪 Testing

The contact form includes client-side and server-side validation. Test the following:

1. **Form Validation:**
   - Submit empty form (should show errors)
   - Submit with invalid email (should show error)
   - Submit with valid data (should succeed)

2. **Rate Limiting:**
   - Submit 5+ requests quickly (should be rate limited)

3. **Resume Download:**
   - Click "Download Resume" button (should download PDF)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (default, mobile-first)
- **Tablet**: 640px - 1023px (sm, md)
- **Desktop**: 1024px+ (lg, xl)

## 🎨 Design System

### Colors
- **Primary**: `#2563eb` (soft blue)
- **Accent**: `#7c3aed` (soft violet)
- **Neutral Scale**: White to `#0f1724` (dark mode)

### Typography
- **Font**: Inter (with system-ui fallback)
- **Headlines**: 28-48px (responsive)
- **Body**: 16-18px

### Spacing
- Base unit: 16px
- Container max-width: 1200px
- Section padding: 64-96px (responsive)

## 🔒 Security Features

- Rate limiting on contact endpoint (5 requests per 15 minutes)
- Input validation and sanitization
- CORS configuration
- Environment variable protection
- XSS protection via React

## 📄 License

MIT

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📞 Support

For issues or questions, please open an issue on GitHub or contact via the portfolio contact form.

---

## 🎯 Quick Start Summary

```bash
# 1. Install dependencies
npm run install:all

# 2. Configure server
cd server && cp .env.example .env
# Edit .env with your SMTP credentials

# 3. Add resume
# Place resume.pdf in server/public/

# 4. Customize content
# Edit client/src/data/placeholderData.js

# 5. Run development servers
npm run dev:all

# 6. Build for production
npm run build
```

---

**Made with ❤️ for showcasing your work**

