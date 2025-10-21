import React from "react";
import ".index.css";

const PropertyList = () => {
  const properties = [
    {
      id: 1,
      name: "Modern Apartment",
      location: "Nairobi, Kenya",
      price: 120000,
      image: "https://picsum.photos/400/300?random=1",
    },
    {
      id: 2,
      name: "Beach Villa",
      location: "Mombasa, Kenya",
      price: 250000,
      image: "https://picsum.photos/400/300?random=2",
    },
    {
      id: 3,
      name: "Country House",
      location: "Naivasha, Kenya",
      price: 175000,
      image: "https://picsum.photos/400/300?random=3",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Available Properties
      </h1>

      {/*Loop through properties */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Display Image */}
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-80 object-cover"
            />

            {/* Property details */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {property.name}
              </h2>
              <p className="text-gray-500">{property.location}</p>
              <p className="text-indigo-600 font-bold mt-2">
                ${property.price.toLocaleString()}
              </p>

              <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
