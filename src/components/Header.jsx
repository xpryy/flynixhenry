import React, { useState, useEffect } from "react";
import { FaSearch, FaPlane, FaUserAlt } from "react-icons/fa";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md"; 
import { RxDashboard } from "react-icons/rx"; 
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const username = localStorage.getItem('user') || 'Guest';

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
        setShowProfileMenu(false);
    };

    const getWelcomeMessage = () => {
        if (!username) return "Welcome Guest to Sedap.";
        if (username.toLowerCase() === 'admin') return "Welcome Administrator to Sedap.";
        return `Welcome ${username} to Sedap.`;
    };

    const toggleProfileMenu = () => {
        setShowProfileMenu(!showProfileMenu);
    };

    // Close menu when clicking outside
    const handleClickOutside = (e) => {
        if (showProfileMenu && !e.target.closest('#profile-container')) {
            setShowProfileMenu(false);
        }
    };

    // Add click event listener
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showProfileMenu]);

    const handleLogoClick = () => {
        navigate('/'); // Navigate to dashboard instead of refreshing
    };

    const isGuest = localStorage.getItem('user') === 'guest';
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    return (
        <header className="bg-white">
            {/* Top Bar */}
            <div className="bg-[#063970] text-white py-2">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <FaPlane className="text-xl" />
                        <span>{getWelcomeMessage()}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        {username ? (
                            <div 
                                id="profile-container"
                                className="relative"
                            >
                                <button 
                                    onClick={toggleProfileMenu}
                                    className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full"
                                >
                                    <FaUserAlt className="text-sm" />
                                    <span className="font-medium">
                                        {username.toLowerCase() === 'admin' ? 'Administrator' : username}
                                    </span>
                                </button>
                                {showProfileMenu && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                                        <div className="p-4 border-b border-gray-100">
                                            <p className="font-semibold text-gray-800">
                                                {username.toLowerCase() === 'admin' ? 'Administrator' : username}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {username.toLowerCase() === 'admin' ? 'Admin Access' : 'User Account'}
                                            </p>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                                        >
                                            Log Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <NavLink to="/login" className="flex items-center space-x-2">
                                <FaUserAlt />
                                <span>Login</span>
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div 
                        onClick={handleLogoClick}
                        className="text-5xl font-extrabold text-[#063970] cursor-pointer transform hover:scale-105 transition-transform duration-200"
                    >
                        Flynix<span className="text-[#4a90e2]">.</span>
                    </div>

                    {/* Flight Search */}
                    <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-8">
                        <div className="relative flex items-center">
                            <div className="absolute left-4 text-gray-400">
                                <MdFlightTakeoff className="text-xl" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search for flights..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-6 py-3 rounded-full border-2 border-[#4a90e2] focus:outline-none focus:border-[#063970] transition-colors"
                            />
                            <button 
                                type="submit"
                                className="absolute right-4 text-[#4a90e2] hover:text-[#063970] transition-colors"
                            >
                                <FaSearch className="text-xl" />
                            </button>
                        </div>
                    </form>

                    {/* Flight Status */}
                    <div className="flex items-center space-x-6">
                        <div className="relative cursor-pointer group">
                            <MdFlightLand className="text-2xl text-[#063970]" />
                            <span className="absolute -top-2 -right-2 bg-[#4a90e2] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                5
                            </span>
                            <span className="hidden group-hover:block absolute top-full right-0 bg-white p-2 rounded shadow-lg text-sm text-gray-600 whitespace-nowrap">
                                Active Flights
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="bg-[#f8fafc] border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <ul className="flex space-x-8 py-4">
                        <li>
                            <NavLink 
                                to={isGuest ? "/guest/dashboard" : "/"} 
                                className={({ isActive }) => 
                                    `font-semibold hover:text-[#4a90e2] transition flex items-center ${
                                        isActive ? "text-[#063970]" : "text-[#1c1c1c]"
                                    }`
                                }
                            >
                                <RxDashboard className="mr-2" />
                                Flight Dashboard
                            </NavLink>
                        </li>
                        {isAdmin && (
                            <li>
                                <NavLink to="/bookings" className={({ isActive }) => 
                                    "font-bold flex items-center " + (isActive ? "text-[#063970]" : "text-[#1c1c1c]")
                                }>
                                    <MdFlightTakeoff className="mr-2"/> Flight Bookings
                                </NavLink>
                            </li>
                        )}
                        <li>
                            <NavLink 
                                to={isGuest ? "/guest/products" : "/products"} 
                                className={({ isActive }) => 
                                    "font-bold flex items-center " + (isActive ? "text-[#063970]" : "text-[#1c1c1c]")
                                }
                            >
                                <FaPlane className="mr-2"/> Available Flights
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;