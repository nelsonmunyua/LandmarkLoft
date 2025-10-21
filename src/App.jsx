import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropertyDetails from "./components/propertydetails/PropertyDetails";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About info/About";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default route */}
        <Route path="/" element={<PropertyDetails />} />

        {/* About page route */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
