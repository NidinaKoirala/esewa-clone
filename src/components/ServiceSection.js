import React from "react";

export default function ServiceSection({ title, services }) {
  return (
    <div className="my-10">
      <h2 className="text-3xl font-extrabold text-center text-green-600 mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center flex flex-col items-center hover:bg-green-50 transition"
          >
            <div className="text-4xl text-green-500 mb-2">{service.icon}</div>
            <span className="text-lg font-semibold">{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
