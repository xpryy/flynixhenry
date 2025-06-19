import React from 'react'; // Add this import
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';
import ErrorBoundary from '../../components/ErrorBoundary';

const AdminLayout = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Verify admin authentication
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const user = localStorage.getItem('user');
    
    if (!isAdmin || !user || user !== 'admin') {
      setError('Unauthorized access');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  }, [navigate]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-700">{error}</p>
          <p className="text-gray-500 mt-2">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
