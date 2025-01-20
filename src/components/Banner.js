import React from 'react';

export default function Banner() {
  return (
    <div className="relative">
      {/* Green gradient background */}
      <div className="w-full h-64 bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center text-white">
        <h2 className="text-4xl font-bold">
          Receive Cross-Border Payments <br />
          <span className="text-lg mt-2 block">Secure, Fast, Reliable</span>
        </h2>
      </div>
      
      {/* Navigation dots for the carousel */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        <button className="w-3 h-3 rounded-full bg-white"></button>
        <button className="w-3 h-3 rounded-full bg-gray-300"></button>
        <button className="w-3 h-3 rounded-full bg-gray-300"></button>
      </div>
    </div>
  );
}
