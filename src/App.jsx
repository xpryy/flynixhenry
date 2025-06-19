import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Products from './pages/Products';
import LoginPage from './pages/LoginPage';
import ErrorPage from './components/ErorrPage';
import MainLayout from './layouts/MainLayout';
import GuestDashboard from './pages/GuestDashboard';
import GuestProducts from './pages/GuestProducts';
import AdminLayout from './admin/layouts/AdminLayout';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminTestimonials from './admin/pages/AdminTestimonials';
import AdminFAQ from './admin/pages/AdminFAQ';
import AdminProducts from './admin/pages/AdminProducts';
import AdminPricing from './admin/pages/AdminPricing';

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const location = useLocation();

  // Prevent infinite redirects by checking if we're not already on the login page
  if (!user && location.pathname !== '/login') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!isAdmin && location.pathname.startsWith('/admin')) {
    return <Navigate to="/guest/dashboard" replace />;
  }

  return children;
};

const GuestRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  const isGuest = user === 'guest';
  const location = useLocation();

  if (!user && location.pathname !== '/login') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!isGuest && location.pathname.startsWith('/guest')) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const ProtectedAdminRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const location = useLocation();

  if (!user && location.pathname !== '/login') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/guest/dashboard" replace />;
  }

  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      
      {/* Admin Routes */}
      <Route path="/admin" element={
        <ProtectedAdminRoute>
          <AdminLayout />
        </ProtectedAdminRoute>
      }>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="testimonials" element={<AdminTestimonials />} />
        <Route path="faq" element={<AdminFAQ />} />
        <Route path="pricing" element={<AdminPricing />} />
        {/* Add other admin routes here */}
      </Route>

      {/* User Routes */}
      <Route element={
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      }>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/products" element={<Products />} />
      </Route>

      {/* Guest Routes */}
      <Route path="/guest" element={
        <GuestRoute>
          <MainLayout />
        </GuestRoute>
      }>
        <Route path="dashboard" element={<GuestDashboard />} />
        <Route path="products" element={<GuestProducts />} />
      </Route>

      {/* Catch all route */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
