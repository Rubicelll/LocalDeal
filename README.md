# 🛍️ LocalDeal - Location-Based Second-Hand Marketplace

**LocalDeal** is a fullstack platform that allows users to buy and sell used items in their local area. It uses geolocation to display nearby listings and includes a real-time chat system for direct communication between buyers and sellers.

---

## 🚀 Key Features

- 🧾 Secure user registration and login (JWT / OAuth)
- 📦 Product posting and management
- 📍 Location-based product search
- 🗺️ Interactive map to explore nearby items
- 💬 Real-time chat between users
- 📸 Image upload for product listings (Cloudinary)
- 🛠️ User dashboard to manage posts and conversations

---

## 🛠️ Technologies Used

### 🔹 Frontend
- React.js
- TailwindCSS
- React Router DOM
- Google Maps API or Mapbox
- Socket.io-client

### 🔹 Backend
- Node.js + Express
- MongoDB + Mongoose
- Socket.io
- JWT (authentication)
- Cloudinary (image upload)

---

## 🧾 Data Models

### User
```json
{
  name,
  email,
  passwordHash,
  photoURL,
  verified,
  location: { type: "Point", coordinates: [lng, lat] },
  createdAt
}
```

### Product
```json
{
  userId,
  title,
  description,
  price,
  images,
  category,
  location: { type: "Point", coordinates: [lng, lat] },
  createdAt,
  status
}
```

### Chat
```json
{
  participants: [userId1, userId2],
  productId,
  messages: [
    { senderId, content, timestamp }
  ]
}
```

---

## ⚙️ Local Installation

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

> Make sure to configure the required `.env` environment variables (e.g., MongoDB URI, JWT_SECRET, Cloudinary keys).

---

## 🧭 Project Structure

```
/localdeal
│
├── /backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── /frontend
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── App.js
```

---

## 🗺️ Roadmap

- [ ] User authentication
- [ ] Product CRUD
- [ ] Location-based search
- [ ] Interactive map integration
- [ ] Real-time messaging
- [ ] Push notifications
- [ ] Admin moderation dashboard
- [ ] Mobile app (PWA or React Native)

---

## 📄 License

MIT License — Free for personal and commercial use.

---

## 🤝 Author

**Rubicel Rojo**  
📍 Calgary, AB | 🌎 Mexico  
📧 rkwx85@gmail.com  
💼 [LinkedIn](#) | 🧠 [Portfolio](#) | 💻 [GitHub](https://github.com/Rubicelll)
