import React from "react";
import ReactDOM from "react-dom/";
import Card from "./components/Card";
import Title from "./components/Title";
import { properties } from "../details.js";
import App from "./components/App";

export default function Page() {
  return (
    <div>
      <Title />
      <App />
    </div>
  );
}
