import React from 'react';

export default function PartnerBanks() {
  const banks = [
    {
      name: 'Nepal Bank Limited',
      logo: 'https://shyamkumarkc20.com.np/logo/nbl.jpg',
    },
    {
      name: 'Rastriya Banijya Bank',
      logo: 'https://shyamkumarkc20.com.np/logo/rbb.jpg',
    },
    {
      name: 'Nabil Bank',
      logo: 'https://shyamkumarkc20.com.np/logo/nabil.png',
    },
    {
      name: 'Standard Chartered Bank',
      logo: 'https://shyamkumarkc20.com.np/logo/scb.jpg',
    },
    {
      name: 'NIC ASIA Bank',
      logo: 'https://shyamkumarkc20.com.np/logo/nica.png',
    },
    {
      name: 'Everest Bank Limited',
      logo: 'https://shyamkumarkc20.com.np/logo/ebl.png',
    },
    {
      name: 'Siddhartha Bank Limited',
      logo: 'https://shyamkumarkc20.com.np/logo/sbl.jpeg',
    },
    {
      name: 'Prabhu Bank',
      logo: 'https://shyamkumarkc20.com.np/logo/prvu.png',
    },
  ];

  return (
    <div className="my-10">
      <h2 className="text-3xl font-extrabold text-center text-green-600 mb-8">
        Partner Banks
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {banks.map((bank, index) => (
          <div
            key={index}
            className="text-center bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition"
          >
            <img
              src={bank.logo}
              alt={`${bank.name} Logo`}
              className="mx-auto w-24 h-24 object-contain"
            />
            <p className="mt-4 text-lg font-semibold">{bank.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
