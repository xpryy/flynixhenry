import React from 'react';

const FlynixDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-green-700 text-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-3xl font-bold">Flynix</div>
          <nav className="space-x-6">
            <a href="#" className="hover:text-green-300">Home</a>
            <a href="#" className="hover:text-green-300">Shop</a>
            <a href="#" className="hover:text-green-300">About</a>
            <a href="#" className="hover:text-green-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="flex-grow bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/image/download.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded text-center text-white max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Welcome to Flynix Organic Market</h1>
          <p className="mb-6 text-lg">Fresh and healthy organic products delivered to your doorstep.</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded shadow-lg transition duration-300">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-700">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Sample product cards */}
          <div className="bg-white rounded shadow p-4 text-center">
            <img src="/image/download.jpg" alt="Product 1" className="mx-auto mb-4 h-40 object-cover rounded" />
            <h3 className="font-semibold mb-2">Organic Apples</h3>
            <p className="text-green-700 font-bold">$3.99 / lb</p>
          </div>
          <div className="bg-white rounded shadow p-4 text-center">
            <img src="/image/wirr.jpg" alt="Product 2" className="mx-auto mb-4 h-40 object-cover rounded" />
            <h3 className="font-semibold mb-2">Fresh Carrots</h3>
            <p className="text-green-700 font-bold">$2.49 / lb</p>
          </div>
          <div className="bg-white rounded shadow p-4 text-center">
            <img src="/image/download.jpg" alt="Product 3" className="mx-auto mb-4 h-40 object-cover rounded" />
            <h3 className="font-semibold mb-2">Organic Bananas</h3>
            <p className="text-green-700 font-bold">$1.99 / lb</p>
          </div>
          <div className="bg-white rounded shadow p-4 text-center">
            <img src="/image/wirr.jpg" alt="Product 4" className="mx-auto mb-4 h-40 object-cover rounded" />
            <h3 className="font-semibold mb-2">Fresh Lettuce</h3>
            <p className="text-green-700 font-bold">$1.29 / lb</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>© 2024 Flynix. All rights reserved.</p>
          <p>Contact us: info@flynix.com | +1 234 567 890</p>
        </div>
      </footer>
    </div>
  );
};

export default FlynixDashboard;
