import React from "react";
import PropertyDetails from "./components/propertydetails/PropertyDetails";
import Navbar from "./components/navbar/Navbar";
import Filter from "./components/filter/filter";
import PropertyList from "./components/propertylist/PropertyList";

function App() {
  return (
    <>
      <Filter />
      <Navbar />
      <PropertyDetails />
      <PropertyList />
    </>
  );
}

export default App;
