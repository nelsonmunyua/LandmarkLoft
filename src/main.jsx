import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about/About.jsx";
import HomePage from "./pages/HomePage.jsx";
import PropertyDetails from "./components/propertydetails/PropertyDetails.jsx";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/propertydetails',
    element: <PropertyDetails />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={routes}/>
  </StrictMode>
)
