# LandmarkLoft

A modern React-based property listing website for browsing and viewing properties in Nairobi, Kenya. Built with Vite for fast development and optimized performance.

## Features

- **Property Listings**: Browse a variety of properties including apartments, houses, bungalows, and commercial spaces.
- **Filtering**: Filter properties by type (sale/rent), category, location, and other criteria.
- **Property Details**: View detailed information about each property, including images, descriptions, and specifications.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Routing**: Seamless navigation between pages using React Router.

## Tech Stack

- **Frontend**: React 19.1.1
- **Routing**: React Router DOM 7.9.4
- **Icons**: Lucide React 0.546.0
- **Build Tool**: Vite 7.1.7
- **Linting**: ESLint 9.36.0
- **Styling**: CSS (custom stylesheets)

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd LandmarkLoft
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173` (default Vite port).

4. **Build for production**:

   ```bash
   npm run build
   ```

5. **Preview the production build**:

   ```bash
   npm run preview
   ```

6. **Lint the code**:
   ```bash
   npm run lint
   ```

## Usage

- Navigate to the homepage to view all property listings.
- Use the filter sidebar to narrow down properties by type, category, location, etc.
- Click on a property card to view detailed information.
- The app uses mock data from `data/db.json` for demonstration purposes.

## Project Structure

```
LandmarkLoft/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── filter/
│   │   │   ├── filter.css
│   │   │   └── filter.jsx
│   │   ├── navbar/
│   │   │   ├── Navbar.css
│   │   │   └── Navbar.jsx
│   │   ├── propertycard/
│   │   │   ├── propertycard.css
│   │   │   └── PropertyCard.jsx
│   │   ├── propertydetails/
│   │   │   ├── PropertyDetails.jsx
│   │   │   └── style.css
│   │   └── propertylist/
│   │       ├── propertylist.css
│   │       └── PropertyList.jsx
│   ├── pages/
│   │   ├── homepage.css
│   │   ├── HomePage.jsx
│   │   └── about/
│   │       ├── About.css
│   │       └── About.jsx
│   ├── App.jsx
│   └── main.jsx
├── data/
│   └── db.json
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
