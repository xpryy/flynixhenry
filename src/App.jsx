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
  const user = localStorage.getItem('user');
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (isAdmin) {
    return children;
  }
  
  return <Navigate to="/guest/dashboard" replace />;
};

const GuestRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  const isGuest = user === 'guest';
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (isGuest) {
    return children;
  }
  
  return <Navigate to="/" replace />;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      
      {/* Admin Routes */}
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
      <Route path="/guest" element={<GuestRoute><MainLayout /></GuestRoute>}>
        <Route path="dashboard" element={<GuestDashboard />} />
        <Route path="products" element={<GuestProducts />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
