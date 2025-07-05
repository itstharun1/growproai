# GrowthProAI – Full Stack Intern Assignment

This is a full stack assignment project that simulates how local businesses can view their SEO content and Google Business data. It includes both a React + Tailwind frontend and a Node.js + Express backend.

---

## 🧠 Objective

To build a mini dashboard that displays a local business’s rating, reviews, and an AI-generated SEO headline, with the ability to regenerate the headline.

---

## ✨ Features

### 🔹 Frontend (React + Tailwind CSS)

- Responsive input form:
  - Business Name
  - Location
- Display card with:
  - Simulated Google Rating (e.g., 4.3★)
  - Number of Reviews
  - AI-generated SEO Headline
  - “Regenerate SEO Headline” button
- Clean and mobile-friendly UI using Tailwind

### 🔹 Backend (Node.js + Express)

- `POST /business-data`
  - Accepts: `{ "name": "Cake & Co", "location": "Mumbai" }`
  - Returns simulated data like:
    ```json
    {
      "rating": 4.3,
      "reviews": 127,
      "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
    }
    ```

- `GET /regenerate-headline?name=...&location=...`
  - Returns a new random SEO-style headline

> No database is used. All data is simulated.

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js and npm installed
run the backend code
cd backend
npm install
npm start
run the frontend code
cd frontend
npm install
npm run dev
