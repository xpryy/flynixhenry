import { NavLink } from 'react-router-dom';
import { 
  MdDashboard, 
  MdArticle, 
  MdLocalOffer,
  MdQuestionAnswer,
  MdGroup,
  MdWork,
  MdComment,
  MdBookOnline,
  MdMessage,
  MdSupervisorAccount,
  MdBusiness,
  MdPhoto,
  MdAttachMoney,
  MdOpenInNew 
} from 'react-icons/md';

const menuItems = [
  { icon: MdDashboard, text: 'Dashboard', path: '/admin/dashboard' },
  { icon: MdLocalOffer, text: 'Produk/Layanan', path: '/admin/products' },
  { icon: MdArticle, text: 'Artikel/News', path: '/admin/articles' },
  { icon: MdQuestionAnswer, text: 'FAQ', path: '/admin/faq' },
  { icon: MdGroup, text: 'Tim/Karyawan', path: '/admin/team' },
  { icon: MdWork, text: 'Lowongan Kerja', path: '/admin/jobs' },
  { icon: MdComment, text: 'Testimoni', path: '/admin/testimonials' },
  { icon: MdBookOnline, text: 'Booking', path: '/admin/bookings' },
  { icon: MdMessage, text: 'Kontak Masuk', path: '/admin/contacts' },
  { icon: MdSupervisorAccount, text: 'User & Role', path: '/admin/users' },
  { icon: MdBusiness, text: 'Profil Perusahaan', path: '/admin/company' },
  { icon: MdPhoto, text: 'Galeri Media', path: '/admin/gallery' },
  { icon: MdAttachMoney, text: 'Pricing', path: '/admin/pricing' }
];

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-[#063970] text-white p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-plaster tracking-wide" style={{ fontFamily: 'Plaster' }}>
          Flynix's Admin
        </h1>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-lg font-semibold
              ${isActive ? 'bg-[#4a90e2] text-white' : 'text-white/80 hover:bg-[#4a90e2]/50'}`
            }
          >
            <item.icon className="text-xl" />
            <span>{item.text}</span>
          </NavLink>
        ))}
        
        {/* External Guest App Link */}
        <a
          href="https://flynix-apps-guest.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-lg font-semibold text-white/80 hover:bg-[#4a90e2]/50"
        >
          <MdOpenInNew className="text-xl" />
          <span>Guest App</span>
        </a>
      </nav>
    </div>
  );
};

export default AdminSidebar;
