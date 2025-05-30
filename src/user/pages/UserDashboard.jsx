
import React from 'react';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/image/download.jpg')" }}>
      <header className="flex justify-between items-center p-6 bg-white bg-opacity-70">
        <div className="text-3xl font-bold text-green-700">Sedap</div>
        <nav className="flex space-x-4 text-green-700">
          <button aria-label="Search" className="hover:text-green-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
            </svg>
          </button>
          <button aria-label="Cart" className="hover:text-green-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m5-9l2 9" />
            </svg>
          </button>
          <button aria-label="Menu" className="hover:text-green-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center text-center text-white px-4 py-32 bg-black bg-opacity-40 min-h-[calc(100vh-72px)]">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">Organic Food Market</h1>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded shadow-lg transition duration-300">
          Order Now
        </button>
      </main>
    </div>
  );
};

export default UserDashboard;
