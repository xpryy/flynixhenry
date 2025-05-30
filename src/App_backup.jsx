import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Products from './pages/Products';
import LoginPage from './pages/LoginPage';
import ErrorPage from './components/ErorrPage';
import MainLayout from './layouts/MainLayout';
import GuestDashboard from './pages/GuestDashboard';
import GuestProducts from './pages/GuestProducts';

const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const ProtectedGuestRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  if (isAdmin) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      
      {/* Protected Admin Routes */}
      <Route element={
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      }>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>

      {/* Protected Guest Routes */}
      <Route element={
        <ProtectedGuestRoute>
        </ProtectedGuestRoute>
      }>
        <Route path="/guest/dashboard" element={<GuestDashboard />} />
        <Route path="/guest/products" element={<GuestProducts />} />
      </Route>
=======
      {/* Protected Guest Routes */}
      <Route element={<ProtectedGuestRoute />}>
        <Route path="/guest/dashboard" element={<GuestDashboard />} />
        <Route path="/guest/products" element={<GuestProducts />} />
      </Route>
    </Routes>
  );
}

export default App;
