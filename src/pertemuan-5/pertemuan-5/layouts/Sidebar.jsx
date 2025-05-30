import { RiUser5Fill } from "react-icons/ri"; 
import { MdOutlineLocalShipping } from "react-icons/md"; 
import { RxDashboard } from "react-icons/rx"; 
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate();

    const handleAddMenusClick = () => {
        navigate('/error');
    };

    return (
        <div  id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg ">
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col ">
                <span id="logo-title" className="font-poppins text-[60px] text-gray-900 text-7x1 font-extrabold">
                    Sedap <b id="logo-dot" className="text-hijau">.</b>
                </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400 px-0 py-5 ">
                    Modern Admin Dashboard
                </span>
            </div>

            {/* List Menu */}
            <div id="sidebar-menu">
                <ul id="menu-list" className="space-y-6">
                    <li>
                        <div id="menu-1"  className="font-bold text-black-400  "> <RxDashboard className="mr-4 text-x1"/> Dashboard</div>
                    </li>
                    <li>
                        <div id="menu-2" className="font-bold text-black-400 "> <MdOutlineLocalShipping className="mr-4 text-x1" /> Orders</div>
                    </li>
                    <li>
                        <div id="menu-3" className="font-bold text-black-400 "> <RiUser5Fill className="mr-4 text-x1" /> Customers</div>
                    </li>
                </ul>
            </div>

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <div id="footer-card" className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                    <div id="footer-text" className="flex-1 p-2 text-white text-sm" >
                        <span>Please organize your menus through button below!</span>
                        <div
                            id="add-menu-button"
                            className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 cursor-pointer"
                            onClick={handleAddMenusClick}
                        >
                            <span>Add Menus</span>
                        </div>
                    </div>
                    <img id="footer-avatar" src="https://avatar.iran.liara.run/public/28" className="w-20 rounded-full" />
                </div>
                <span id="footer-brand"className="font-bold text-gray-400">Flynix Admin Dashboard</span>
                <p id="footer-copyright" className="font-light text-gray-400	">&copy; 2025 All Right Reserved</p>
            </div>
        </div>
    );
}
