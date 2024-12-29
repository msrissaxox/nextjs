import React from "react";
import Card from "./Card";
import { properties } from "../../details.js";

function createCard(props) {
  return (
    <Card
      key={props.id}
      img={props.img}
      city={props.city}
      bedrooms={props.bedrooms}
      bathrooms={props.bathrooms}
      squareFootage={props.squareFootage}
      pricePerNight={props.pricePerNight}
      description={props.description}
    />
  );
}

export default function App() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {properties.map(createCard)}
    </div>
  );
}
