import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlane, FaSearch, FaUserAlt } from 'react-icons/fa';
import { MdFlightTakeoff, MdFlightLand } from 'react-icons/md';

const popularDestinations = [
  {
    id: 1,
    city: 'Paris',
    country: 'France',
    price: '599',
    image: '/image/paris.jpg'
  },
  {
    id: 2,
    city: 'Tokyo',
    country: 'Japan',
    price: '899',
    image: '/image/tokyo.jpg'
  },
  {
    id: 3,
    city: 'New York',
    country: 'USA',
    price: '499',
    image: '/image/newyork.jpg'
  },
  {
    id: 4,
    city: 'Dubai',
    country: 'UAE',
    price: '699',
    image: '/image/dubai.jpg'
  }
];

const DestinationCard = ({ city, country, price, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
    <div 
      className="h-48 bg-cover bg-center" 
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    <div className="p-4">
      <h3 className="text-xl font-semibold text-[#063970]">{city}</h3>
      <p className="text-gray-600">{country}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-[#4a90e2]">${price}</span>
        <button className="bg-[#063970] text-white px-4 py-2 rounded hover:bg-[#4a90e2] transition-colors">
          Book Now
        </button>
      </div>
    </div>
  </div>
);

const GuestDashboard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#063970] text-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-3xl font-bold">Flynix</div>
          <div className="flex items-center space-x-4">
            <span>Welcome, {username}</span>
            <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative flex-grow bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: "url('/image/download.jpg')",
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundBlend: 'overlay'
        }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded text-center text-white max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Welcome to Flynix Airlines</h1>
          <p className="mb-6 text-lg">Discover amazing flight deals and travel destinations.</p>
          <div className="max-w-md mx-auto">
            <div className="relative flex items-center">
              <div className="absolute left-4 text-gray-400">
                <MdFlightTakeoff className="text-xl" />
              </div>
              <input
                type="text"
                placeholder="Where would you like to fly?"
                className="w-full pl-12 pr-6 py-3 rounded-full border-2 border-[#4a90e2] focus:outline-none focus:border-[#063970] transition-colors text-gray-800"
              />
              <button className="absolute right-4 text-[#4a90e2]">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Flights Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#063970]">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {popularDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              {...destination}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default GuestDashboard;