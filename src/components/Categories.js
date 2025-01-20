import React from "react";
import {
  FaMobileAlt,
  FaBolt,
  FaTv,
  FaBus,
  FaGraduationCap,
  FaShieldAlt,
  FaMoneyBill,
  FaFilm,
} from "react-icons/fa";

export default function Categories() {
  const categories = [
    { name: "Topup & Recharge", icon: <FaMobileAlt /> },
    { name: "Electricity & Water", icon: <FaBolt /> },
    { name: "TV Payment", icon: <FaTv /> },
    { name: "Bus Tickets/Tours and Travels", icon: <FaBus /> },
    { name: "Education Payment", icon: <FaGraduationCap /> },
    { name: "Insurance Payment", icon: <FaShieldAlt /> },
    { name: "Financial Services", icon: <FaMoneyBill /> },
    { name: "Movies & Entertainment", icon: <FaFilm /> },
  ];

  return (
    <div className="my-10">
      <h2 className="text-3xl font-extrabold text-center text-green-600 mb-8">
        Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <button
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center flex flex-col items-center hover:bg-green-50 transition"
          >
            <div className="text-4xl text-green-500 mb-2">{category.icon}</div>
            <span className="text-lg font-semibold">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
