# 🛍️ ShopHub - React E-commerce App
## 🚀 Live Demo

🌐 Live Website:  
🔗 [View Live Project](https://omidprogramm.github.io/ecommerce-shophub/)

ShopHub is a modern e-commerce web application built with React and React Router.  
It demonstrates a full shopping experience including product listing, product details, authentication, and a cart/checkout system using React Context API.

---

## 🚀 Live Demo

You can deploy this project using GitHub Pages or any hosting platform like Vercel or Netlify.

---

## 📌 Features

- 🏠 Home page with product listing
- 🔍 Product details page with dynamic routing
- 🛒 Shopping cart functionality
- ➕ Add / remove / update product quantities
- 🔐 Authentication system (Login / Signup UI logic)
- 💳 Checkout page with order summary
- ⚛️ Global state management using Context API
- 🌐 Client-side routing using React Router

---

## 🧠 Tech Stack

- React 19
- React Router DOM
- React Hook Form
- Context API
- Vite
- CSS (custom styling)

---

## 📂 Project Structure

src/
│
├── components/ # Reusable UI components (Navbar, ProductCard, etc.)
├── pages/ # Page components (Home, Auth, Checkout, ProductDetails)
├── context/ # Global state (Auth, Cart)
├── data/ # Static product data
├── App.jsx # Main routing structure
└── main.jsx # App entry point


---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/OmidProgramm/ecommerce-shophub.git

2. Install dependencies
npm install

3. Run development server
npm run dev

4. Build for production
npm run build

🚀 Deployment (GitHub Pages)

This project uses gh-pages for deployment.

Deploy command:
npm run deploy

Make sure vite.config.js includes:
base: '/ecommerce-shophub/'

🔐 Authentication
The app includes a simple authentication system using React Context.
It supports:
Sign up
Login
Basic validation using React Hook Form
Note: This is a frontend-only authentication system (no backend).

🛒 Cart System
The cart is managed globally using Context API:
Add products to cart
Update quantity
Remove items
Calculate total price
Clear cart after checkout

📦 Future Improvements
Backend integration (Node.js / Firebase)
Payment gateway integration
Product filtering & search
User profile system
Database storage for cart

👨‍💻 Author
Developed by OmidProgramm
GitHub: https://github.com/OmidProgramm

📜 License
This project is open-source and available under the MIT License.


