import React from "react";
import Picture from './Picture';
import Info from './Info';
import { properties } from '../../details.js';


export default function Card (properties){
    return(
<div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Property Image */}
      <img
        src={properties.img}
        alt={properties.city}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        {/* Property City */}
        <h2 className="text-lg font-semibold text-gray-800">{properties.city}</h2>
        {/* Property Details */}
        <p className="text-sm text-gray-600">
          {properties.bedrooms} bedrooms • {properties.bathrooms} bathrooms •{" "}
          {properties.squareFootage} sqft        
        </p>
        <p className="text-sm text-gray-600">${properties.pricePerNight}  per night </p>
         <p className="text-sm text-gray-600"> {properties.description}
          </p>
      </div>
    </div>
</div>
</div>
    )
};

