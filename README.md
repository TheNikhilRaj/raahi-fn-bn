# 🌍 Raahi — Travel Blog Platform

**Raahi** is a full-stack travel blogging platform where users can share their travel experiences, explore posts from others, and discover destinations through personal stories. It features authentication, search filtering, image uploads, and dynamic blog pages.

---

## ✨ Features

* 🔐 **Authentication** using [Clerk](https://clerk.dev) (frontend-only auth)
* 📄 **Post blogs** with title, subtitle, image, pros, cons, suggestions, etc.
* 🗺️ **Country + State filtering** using `country-state-city`
* 🔍 **Search blogs** based on location
* 🖼️ **Image uploads** via Cloudinary (Multer + memory stream)
* 📄 **Dynamic blog detail pages**
* 🧱 **Explore & filter blogs** (Find Blogs page)
* 💼 **My Blogs**: view blogs posted by the logged-in user
* 💬 **Toasts** for success/error feedback using `react-hot-toast`
* 📱 Responsive UI built with TailwindCSS

---

## 🛠️ Tech Stack

### Frontend

* **React** (Vite)
* **Tailwind CSS**
* **React Router**
* **Clerk** for auth
* **Axios** for API requests
* **React Hot Toast** for notifications

### Backend

* **Express.js**
* **MongoDB** (via Mongoose)
* **Cloudinary** for image hosting
* **Multer** with memory storage + `streamifier` for Cloudinary uploads
* **CORS**, **dotenv**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/raahi.git
cd raahi
```

---

## 🌐 Frontend Setup (`raahi-fr/`)

```bash
cd client
npm install
```

### 📁 `.env` file for Frontend

Create a `.env` file inside `raahi-fr/`:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000/api
```

### 🦦 Run Frontend Locally

```bash
npm run dev
```

---

## 🔧 Backend Setup (`raahi-back/`)

```bash
cd server
npm install
```

### 📁 `.env` file for Backend

Create a `.env` file inside `raahi-back/`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> You can get Cloudinary keys from your Cloudinary dashboard.

### 🦦 Run Backend Locally

```bash
npm run dev
```

---

## 🔗 Folder Structure

```
raahi-fr/
🕛── src/
    ├── components/
    ├── pages/
    ├── util/api.js
    └── App.jsx

raahi-back/
🕛── controllers/
    ├── routes/
    ├── models/
    ├── config/
    └── index.js
```

---

## ⚙️ Deployment Notes

* ✅ Vercel: add rewrite rule for SPA fallback in `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

* ✅ Render (Backend): expose `/api` routes, enable CORS, and allow access from frontend URL.

---

## 🤛 Contributing

Feel free to fork, open issues, or submit PRs if you'd like to improve Raahi!

---

## 📜 License

MIT — free to use and modify.

---
