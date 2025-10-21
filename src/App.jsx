import React from 'react'
import PropertyDetails from './components/propertydetails/PropertyDetails'
import Navbar from "./components/navbar/Navbar";
import Filter from './components/filter/filter';

function App() {
  return (
    <>
    <Filter />
    <Navbar/>
      <PropertyDetails />
    </>
  )
}

export default App
