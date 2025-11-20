### Airbnb Listings App

A Node.js + Express application that displays Airbnb listings using MongoDB Atlas and Handlebars.
Includes listing pages, single-view pages, delete functionality, and simple pagination.

---

## 📁 Tech Stack
- Node.js
- Express
- Express-Handlebars
- MongoDB Atlas (Mongoose)
- dotenv

---

## 🚀 Quick Setup
```markdown
```bash
git clone https://github.com/FrinX019/employee-api-Frin.git
cd employee-api-Frin
npm install```

# Create a .env file:
```bash 
PORT=8000
MONGO_URI_ATLAS=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.mongodb.net/Airbnb
```

# Start the server:
```node app.js```

---

## 📡 API ROUTES (JSON) — /api/airbnb

These routes come from your second router file (controller-based).

```bash
GET    /api/airbnb/        → Get all listings
GET    /api/airbnb/:id     → Get a listing by ID
POST   /api/airbnb/        → Create a new listing
PUT    /api/airbnb/:id     → Update an existing listing
DELETE /api/airbnb/:id     → Delete a listing
```
These are pure API endpoints returning JSON.
Used for Postman testing.

---

## 🖥️ HBS ROUTES (Views) — /airbnb_hbs
These routes come from your first router file (Handlebars pages).

```bash
GET    /airbnb_hbs/                → Home page

GET    /airbnb_hbs/list            → Show all listings (pagination)
GET    /airbnb_hbs/view/:id        → View single listing

GET    /airbnb_hbs/add             → Add listing page
POST   /airbnb_hbs/add             → Submit new listing

GET    /airbnb_hbs/search          → Search by ID or Name

GET    /airbnb_hbs/update          → Search listing to update
POST   /airbnb_hbs/update/:id      → Submit updated listing

GET    /airbnb_hbs/delete          → Search listing to delete
POST   /airbnb_hbs/delete/:id      → Confirm delete
```

---

## 📌 Notes
	•	Pagination is set to 10 listings per page.
	•	Ensure your MongoDB collection and schema match field names like id, NAME, price, etc.
	•	Works on local environment using Atlas connection.

---

## 🛠️ Troubleshooting
    If you see connection errors, verify MONGO_URI_AIRBNB in .env.
    For "Cannot set headers after they are sent" or other route errors, ensure async errors call next(err) in controllers (see controllers/).

## 🎖️ Badges
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

---

## 👤 Creator: 
# Frin Patel