# Branding Agency Backend (Node.js + Express + MySQL + Nodemailer)

This is the backend API service for the Branding website. It handles package inquiries, contact form submissions, MySQL database persistence, and automated emails to both the Admin and the User.

## 🚀 Quick Start

### 1. Install Dependencies
Inside the `server/` directory:
```bash
npm install
```

### 2. Configure Environment (`.env`)
Make sure your `.env` has your settings:
```env
PORT=5000
FRONTEND_URL=http://localhost:5173

# MySQL (XAMPP default settings)
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=branding_agency_db
DB_PORT=3306

# Email Settings (Gmail App Password)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-digit-app-password
ADMIN_EMAIL=your-admin-email@gmail.com
```

### 3. Run the Server
```bash
npm run dev
```

### 📡 Available Endpoints:
- `GET /api/health` - Check server and database status
- `POST /api/inquiries` - Submit package inquiry (Saves to MySQL + sends dual emails)
- `GET /api/inquiries` - View all saved inquiries
- `POST /api/contacts` - Submit general contact message
- `GET /api/contacts` - View all saved contact messages
