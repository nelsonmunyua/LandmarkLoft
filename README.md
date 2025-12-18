# 🏠 LaandmarkLoft — Real Estate Listing Platform

A modern **React-based real estate web app** for browsing, filtering, and managing property listings.  
It features search, dynamic filters, CRUD operations for properties, and a responsive design for both desktop and mobile users.

---

## 🚀 Features

✅ **Property Listings**
- Displays all properties fetched from a JSON server or backend API.  
- Each property has an image, price, location, type, and description.

✅ **Dynamic Filtering**
- Filter by property type, price range, and custom price slider.
- Instant re-render of matching properties without page reload.

✅ **Search Functionality**
- Real-time search in the navigation bar.
- Search by property name, type, or location.

✅ **CRUD Operations**
- Add, edit, and delete properties easily (coming soon in `/sell` component).

✅ **Routing**
- Navigation handled by React Router (`react-router-dom`).
- Routes include Home, For Sale, For Rent, Projects, Sell, and About pages.

✅ **Responsive Navbar**
- Hamburger menu for mobile devices.
- Integrated search bar and user avatar.

---

## 🧱 Project Structure

|landmarkloft/
├── public/
├── src/
│ ├── components/
│ │ ├── navbar/ → Navigation bar with search
│ │ ├── filter/ → Sidebar filter component
│ │ ├── propertylist/ → Displays filtered property cards
│ │ ├── propertydetails/ → Individual property details
│ │ ├── propertycard/ → UI card for each property
│ ├── pages/
│ │ ├── HomePage.jsx → Main homepage
│ │ ├── ForSale.jsx
│ │ ├── ForRent.jsx
│ │ ├── Projects.jsx
│ │ ├── Sell.jsx
│ │ └── about/
│ │ └── About.jsx
│ ├── App.jsx
│ ├── main.jsx → Entry point (React Router setup)
│ ├── styles/ → CSS files
│ └── ...
├── db.json → Sample JSON data (for json-server)
├── package.json
└── README.md

yaml
Copy code

---

## ⚙️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React.js (Vite)** | Frontend framework |
| **React Router DOM** | Page routing |
| **JSON Server / REST API** | Mock backend data |
| **CSS / Flexbox / Grid** | Responsive UI design |
| **Fetch API** | Data fetching |
| **Vercel / Netlify** | Deployment |

---

## 🧑‍💻 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/nelsonmunyua/lamdmarkloft.git
cd landmarkloft
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Run JSON Server (Mock Backend)
Make sure you have a db.json file containing properties data.
Start JSON Server on port 3000:

bash
Copy code
npx json-server --watch db.json --port 3000
4️⃣ Run the React App
bash
Copy code
npm run dev
App will be available at:
👉 http://localhost:5173

🌐 Deployment
To deploy on Vercel or Netlify:

Push your code to GitHub.

Connect your repo to Vercel.

Add your backend API or JSON server base URL in .env file:

ini
Copy code
VITE_API_BASE_URL=https://landmarkloft-backend-production.up.railway.app
Update all fetch requests to use:

Below is the link to the backend repo of this project 
https://github.com/nelsonmunyua/LandmarkLoft-backend

js
Copy code
fetch(`${import.meta.env.VITE_API_BASE_URL}/properties`)
🧩 Upcoming Features
📝 AddProperty component (full CRUD)

💾 Persistent favorites / wishlist

🧭 Map view integration (Google Maps)

🔐 Authentication (Admin dashboard)

📱 Enhanced mobile UI

👨‍💻 Author
Nelson Munyua
💼 Software Developer | 🌍 Nairobi, Kenya
📧 nelsonmunyua8@gmail.com
🔗 GitHub
Adonis Bingirimana
Julius Mwendwa
Mark Guto
Esther Nekesa
Suneya Hirsi

📜 License
This project is licensed under the MIT License — feel free to use and modify for your own projects.

“Turning spaces into homes — one line of code at a time.” 🏡

yaml
Copy code

---
