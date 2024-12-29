import React from "react";
import ReactDOM from "react-dom/";
import Card from "./components/Card";
import { properties } from '../details.js';


export default function Page() {
  return (
  <div>
  <Card img={properties[0].img} city={properties[0].city} bedrooms={properties[0].bedrooms} bathrooms={properties[0].bathrooms} squareFootage={properties[0].squareFootage} pricePerNight={properties[0].pricePerNight} description={properties[0].description} />
  <Card img={properties[1].img} city={properties[1].city} bedrooms={properties[1].bedrooms} bathrooms={properties[1].bathrooms} squareFootage={properties[1].squareFootage} pricePerNight={properties[1].pricePerNight} description={properties[1].description}/>
  <Card img={properties[2].img} city={properties[2].city} bedrooms={properties[2].bedrooms} bathrooms={properties[2].bathrooms} squareFootage={properties[2].squareFootage} pricePerNight={properties[2].pricePerNight} description={properties[2].description}/>
  <Card img={properties[3].img} city={properties[3].city} bedrooms={properties[3].bedrooms} bathrooms={properties[3].bathrooms} squareFootage={properties[3].squareFootage} pricePerNight={properties[3].pricePerNight} description={properties[3].description}/>
  <Card img={properties[4].img} city={properties[4].city} bedrooms={properties[4].bedrooms} bathrooms={properties[4].bathrooms} squareFootage={properties[4].squareFootage} pricePerNight={properties[4].pricePerNight} description={properties[4].description}/>
  </div>
  )
}

