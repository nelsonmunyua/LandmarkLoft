import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Page Imports
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/about/About.jsx";
import PropertyDetails from "./components/propertydetails/PropertyDetails.jsx";
import ForSale from "./pages/ForSale/ForSale.jsx";
import ForRent from "./pages/ForRent/ForRent.jsx";
import Projects from "./pages/projectPage/Projects.jsx";
import Sell from "./pages/Sell/Sell.jsx";

//  Routes
const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/property/:id",
    element: <PropertyDetails />,
  },
  {
    path: "/forsale",
    element: <ForSale />,
  },
  {
    path: "/forrent",
    element: <ForRent />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/sell",
    element: <Sell />,
  },
]);

// Render
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={routes} />
  </StrictMode>
);
