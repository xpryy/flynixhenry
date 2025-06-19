import { useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaDollarSign } from 'react-icons/fa';
import pricingData from '../../data/pricingData.json';
import CrudModal from '../components/CrudModal';

const AdminPricing = () => {
  const [prices, setPrices] = useState(pricingData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPrice, setEditingPrice] = useState(null);
  const [formData, setFormData] = useState({
    type: '',
    price: '',
    services: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPrice) {
      setPrices(prices.map(price => 
        price.id === editingPrice.id ? { ...price, ...formData } : price
      ));
    } else {
      const newPrice = {
        id: String(prices.length + 1),
        ...formData,
        created_at: new Date().toISOString()
      };
      setPrices([...prices, newPrice]);
    }
    closeModal();
  };

  const handleEdit = (price) => {
    setEditingPrice(price);
    setFormData({
      type: price.type,
      price: price.price,
      services: price.services
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this pricing plan?')) {
      setPrices(prices.filter(price => price.id !== id));
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingPrice(null);
    setFormData({ type: '', price: '', services: '' });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Pricing Management</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <FaPlus className="mr-2" /> Add New Plan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prices.map((price) => (
          <div key={price.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-400">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white">{price.type}</h3>
                  <div className="mt-2 flex items-baseline">
                    <FaDollarSign className="text-white text-xl" />
                    <span className="text-4xl font-bold text-white">{price.price}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleEdit(price)}
                    className="text-white hover:text-blue-200 transition-colors"
                  >
                    <FaEdit size={20} />
                  </button>
                  <button 
                    className="text-white hover:text-red-200 transition-colors"
                    onClick={() => handleDelete(price.id)}
                  >
                    <FaTrash size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="text-gray-600 font-semibold mb-4">Services Included:</h4>
              <ul className="space-y-2">
                {price.services.split(', ').map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t text-sm text-gray-500">
                Added: {new Date(price.created_at).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>

      <CrudModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title={editingPrice ? 'Edit Price Plan' : 'Add New Price Plan'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <input
              type="text"
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Services (comma separated)
            </label>
            <textarea
              value={formData.services}
              onChange={(e) => setFormData({...formData, services: e.target.value})}
              className="w-full p-2 border rounded"
              rows="4"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {editingPrice ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </CrudModal>
    </div>
  );
};

export default AdminPricing;
