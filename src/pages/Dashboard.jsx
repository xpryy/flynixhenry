import React from 'react';
import { FaPlane, FaUsers, FaCalendarCheck, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import { Chart, registerables } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

Chart.register(...registerables);

const Dashboard = () => {
  const stats = [
    { icon: FaPlane, title: "Total Flights", value: "486", color: "bg-[#063970]" },
    { icon: FaUsers, title: "Total Passengers", value: "15,234", color: "bg-[#4a90e2]" },
    { icon: FaCalendarCheck, title: "Bookings", value: "910", color: "bg-[#063970]" },
    { icon: FaDollarSign, title: "Revenue", value: "$842,345", color: "bg-[#4a90e2]" }
  ];

  const flightChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Flights',
        data: [82, 95, 78, 110, 98, 105],
        borderColor: '#063970',
        backgroundColor: 'rgba(74, 144, 226, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const popularRoutesData = {
    labels: ['Jakarta-Bali', 'Jakarta-Singapore', 'Jakarta-Malaysia', 'Jakarta-Tokyo'],
    datasets: [
      {
        label: 'Popular Routes',
        data: [420, 380, 350, 280],
        backgroundColor: '#4a90e2',
        borderRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Flynix Dashboard Overview" />
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`${stat.color} p-4 text-white`}>
              <stat.icon className="text-3xl" />
            </div>
            <div className="p-4">
              <h3 className="text-gray-600 text-sm">{stat.title}</h3>
              <p className="text-2xl font-bold text-[#063970]">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Flight Trends Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-[#063970]">Flight Trends</h3>
          <Line data={flightChartData} options={chartOptions} />
        </div>

        {/* Popular Routes Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-[#063970]">Popular Routes</h3>
          <Bar data={popularRoutesData} options={chartOptions} />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 mt-8 border-t border-gray-200">
        <p className="text-gray-600 text-sm">
          Flynix<span className="text-[#4a90e2]">.</span>Bookings 2025
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
