import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim() === "") {
            navigate("/error");
        } else {
            navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const username = localStorage.getItem('user');

    return (
        <div id="header-container" className="flex justify-between items-center p-4 ">
            {/* Search Bar */}
            <form id="search-bar" className="relative w-full max-w-lg" onSubmit={handleSearch}>
                <input
                    id="search-input"
                    className="border border-gray-100 p-2 pr-10 bg-white w-full max-w-lg rounded-md outline-none"
                    type="text"
                    placeholder="Search Here..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black-300">
                    <FaSearch />
                </button>
            </form>

            {/* Icon & Profile Section */}
            <div
                id="icons-container"
                className="flex items-center space-x-4 relative"
                onMouseLeave={() => setShowProfileMenu(false)}
            >
                {/* Icons */}
                <div id="notification-icon" className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer">
                    <FaBell />
                    <span id="notification-badge" className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs">50</span>
                </div>
                <div id="chart-icon" className="p-3 bg-blue-100 rounded-2xl cursor-pointer">
                    <FcAreaChart />
                </div>
                <div id="settings-icon" className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer">
                    <SlSettings />
                </div>

                {/* Profile Section */}
                <div
                    id="profile-container"
                    className="flex items-center space-x-4 border-l pl-4 border-gray-300 relative cursor-pointer"
                    onMouseEnter={() => setShowProfileMenu(true)}
                >
                    <span id="profile-text">
                        Hello, <b>{username ? username : 'Guest'}</b>
                    </span>
                    <img
                        id="profile-avatar"
                        src="https://avatar.iran.liara.run/public/28"
                        className="w-10 h-10 rounded-full"
                        alt="Profile Avatar"
                    />
                    {showProfileMenu && (
                        <div className="absolute right-0 mt-12 w-48 bg-white border border-gray-300 rounded shadow-lg z-50">
                            <div className="p-4 border-b border-gray-200">
                                <p className="font-semibold">{username}</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                            >
                                Log Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
