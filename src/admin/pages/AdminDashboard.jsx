import { useState, useEffect } from 'react';
import { FaUsers, FaShoppingCart, FaNewspaper, FaQuestionCircle } from 'react-icons/fa';

const statsData = [
  { icon: FaUsers, label: 'Total Pengunjung', value: '1,234', color: 'bg-blue-500' },
  { icon: FaShoppingCart, label: 'Total Produk', value: '56', color: 'bg-green-500' },
  { icon: FaNewspaper, label: 'Total Artikel', value: '28', color: 'bg-purple-500' },
  { icon: FaQuestionCircle, label: 'Total Booking', value: '145', color: 'bg-yellow-500' }
];

const StatCard = ({ icon: Icon, label, value, color }) => {
  if (!Icon || !label || !value) {
    return (
      <div className="bg-red-50 rounded-lg p-6 shadow-sm">
        <p className="text-red-600">Invalid card data</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className={`inline-flex p-3 rounded-lg ${color || 'bg-gray-500'} text-white mb-4`}>
        <Icon className="text-3xl" />
      </div>
      <h3 className="text-gray-600 text-lg font-semibold">{label}</h3>
      <p className="text-3xl font-bold mt-1">{value}</p>
    </div>
  );
};

const AdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate data loading
    const loadDashboardData = async () => {
      try {
        // Simulated API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load dashboard data');
        setIsLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-lg">
        <h2 className="text-red-600 font-bold mb-2">Error</h2>
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
