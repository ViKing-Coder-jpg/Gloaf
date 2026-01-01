# Gloaf

A modern web application for restaurant/customer interactions — frontend built with React + Vite and Tailwind, and backend with Express, Prisma (Postgres/SQLite) and MongoDB for profile data.

---

## 🚀 Key Features
- User signup and profile management
- Hybrid data model: Prisma-managed relational user data + MongoDB for profile documents
- Clean React frontend built with Vite and Tailwind CSS
- JWT-based authentication hooks (backend-ready)

## 🧭 Tech Stack
- Frontend: React 19, Vite, Tailwind CSS, React Router
- Backend: Node.js, Express, Prisma, MongoDB, Mongoose
- Dev tools: Nodemon, Prettier, ESLint

---

## 📁 Repository Structure
```
/FrontEnd    # React + Vite app
/BackEnd     # Express API + Prisma + MongoDB
README.md
```

---

## 💻 Local Setup — Quick Start
Prerequisites: Node.js (16+), npm or yarn, and (optionally) PostgreSQL if using Prisma with Postgres.

1. Clone repository

   git clone https://github.com/ViKing-Coder-jpg/Gloaf.git
   cd Gloaf

2. Backend setup

   cd BackEnd
   npm install

   - Create a `.env` file for environment variables (example below)
   - Run Prisma migrations (if using Prisma DB):
     npx prisma migrate dev --name init
   - Start dev server:
     npm run dev

3. Frontend setup

   cd ../FrontEnd
   npm install
   npm run dev

Open the frontend in your browser (Vite usually serves on http://localhost:5173). Backend defaults to http://localhost:3000 (or set `PORT` in `.env`).

---

## ⚙️ Environment Variables (example `.env` for BackEnd)

```
PORT=3000
DATABASE_URL=mongodb://<user>:<pass>@<host>:<port>/<db>
JWT_SECRET=your_jwt_secret
GOOGLE_CREDENTIALS_PATH=./google_secret.json
```

Adjust `DATABASE_URL` if you use Prisma with Postgres/SQLite, and run `npx prisma generate` if changing the Prisma client.

---

## 🔧 Useful Commands
- Backend
  - Install: `npm install`
  - Development: `npm run dev` (uses `nodemon`)
- Frontend
  - Install: `npm install`
  - Development: `npm run dev`
  - Build: `npm run build`
  - Preview production build: `npm run preview`

---

## 🧪 Database & Migrations
- Prisma schema is under `BackEnd/src/db/prisma/schema.prisma` (run `npx prisma migrate dev` to apply changes locally).
- MongoDB profiles are managed in `BackEnd/src/db/MongoDB`.


---

## ✉️ Contact
Maintainer: ViKing-Coder-jpg

