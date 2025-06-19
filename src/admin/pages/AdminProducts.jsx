import { useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaImage, FaVideo } from 'react-icons/fa';
import catalogData from '../../data/catalogData.json';
import CrudModal from '../components/CrudModal';

const AdminProducts = () => {
  const [catalog, setCatalog] = useState(catalogData);
  const [selectedType, setSelectedType] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({ link: '', tipe: 'foto' });

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setCatalog(catalog.filter(item => item.id !== id));
    }
  };

  const filteredCatalog = selectedType === 'all' 
    ? catalog 
    : catalog.filter(item => item.tipe === selectedType);

  const getMediaPreview = (item) => {
    if (item.tipe === 'foto') {
      return (
        <img 
          src={item.link} 
          alt={`Product ${item.id}`}
          className="w-full h-48 object-cover rounded-t-lg"
          onError={(e) => {
            e.target.src = '/images/placeholder.png';
          }}
        />
      );
    } else {
      return (
        <div className="relative w-full h-48 bg-gray-800 rounded-t-lg flex items-center justify-center">
          <FaVideo className="text-4xl text-white" />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 px-2 py-1 rounded text-white text-xs">
            Video
          </div>
        </div>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      setCatalog(catalog.map(item => 
        item.id === editingProduct.id ? { ...item, ...formData } : item
      ));
    } else {
      const newProduct = {
        id: String(catalog.length + 1),
        ...formData,
        created_at: new Date().toISOString()
      };
      setCatalog([...catalog, newProduct]);
    }
    closeModal();
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({ link: product.link, tipe: product.tipe });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
    setFormData({ link: '', tipe: 'foto' });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Products Management</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <FaPlus className="mr-2" /> Add New Product
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="mb-6 flex space-x-4">
        <button
          onClick={() => setSelectedType('all')}
          className={`px-4 py-2 rounded-lg ${
            selectedType === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedType('foto')}
          className={`px-4 py-2 rounded-lg flex items-center ${
            selectedType === 'foto' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          <FaImage className="mr-2" /> Photos
        </button>
        <button
          onClick={() => setSelectedType('video')}
          className={`px-4 py-2 rounded-lg flex items-center ${
            selectedType === 'video' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          <FaVideo className="mr-2" /> Videos
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCatalog.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {getMediaPreview(item)}
            <div className="p-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">ID: {item.id}</span>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleEdit(item)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button 
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Added: {new Date(item.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <CrudModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title={editingProduct ? 'Edit Product' : 'Add New Product'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Media Link
            </label>
            <input
              type="text"
              value={formData.link}
              onChange={(e) => setFormData({...formData, link: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <select
              value={formData.tipe}
              onChange={(e) => setFormData({...formData, tipe: e.target.value})}
              className="w-full p-2 border rounded"
            >
              <option value="foto">Photo</option>
              <option value="video">Video</option>
            </select>
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
              {editingProduct ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </CrudModal>
    </div>
  );
};

export default AdminProducts;
