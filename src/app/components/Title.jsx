import React from "react";

export default function Title() {
  return (
    <div className="bg-gray-50">
      {/* Title Section */}
      <header className="text-center py-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md rounded-b-lg">
        <h1 className="text-4xl font-extrabold tracking-wide">Rent a Home</h1>
        <p className="text-lg font-light mt-2">
          Your perfect getaway starts here
        </p>
      </header>
    </div>
  );
}
