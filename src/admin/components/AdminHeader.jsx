import { useState } from 'react';
import { FaBell, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchError, setSearchError] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchError('');

    if (!searchTerm.trim()) {
      setSearchError('Please enter a search term');
      return;
    }

    try {
      // Add your search logic here
      navigate(`/admin/search?q=${encodeURIComponent(searchTerm.trim())}`);
    } catch (error) {
      setSearchError('Search failed. Please try again.');
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('user');
      localStorage.removeItem('isAdmin');
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="bg-[#063970] text-white px-4 py-5">
      <div className="flex justify-between items-center">
        <form onSubmit={handleSearch} className="relative w-96">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className={`w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 
              ${searchError ? 'border-red-500 focus:ring-red-200' : 'border-[#4a90e2] focus:ring-[#4a90e2]'}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchError && (
            <p className="absolute text-red-500 text-sm mt-1">{searchError}</p>
          )}
        </form>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2 hover:bg-[#4a90e2] rounded-full transition-colors">
            <FaBell className="text-2xl" />
            <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 rounded-full text-sm flex items-center justify-center font-bold">
              5
            </span>
          </button>
          <div className="flex items-center space-x-3">
            <img
              src="/avatars/admin.jpg"
              alt="Admin"
              className="h-10 w-10 rounded-full border-2 border-[#4a90e2]"
              onError={(e) => {
                e.target.src = '/avatars/default-avatar.jpg';
                e.target.onerror = null;
              }}
            />
            <span className="font-bold text-lg">Admin</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors text-base font-bold"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
