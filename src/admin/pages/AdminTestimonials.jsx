import { useState } from 'react';
import { FaStar, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import reviewsData from '../../data/reviewsData.json';
import CrudModal from '../components/CrudModal';

const AdminTestimonials = () => {
  const [reviews, setReviews] = useState(reviewsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReview, setEditingReview] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    content: '',
    image: '',
    star: '5'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingReview) {
      setReviews(reviews.map(review => 
        review.id === editingReview.id ? { ...review, ...formData } : review
      ));
    } else {
      const newReview = {
        id: String(reviews.length + 1),
        ...formData,
        date: new Date().toISOString().split('T')[0],
        created_at: new Date().toISOString()
      };
      setReviews([...reviews, newReview]);
    }
    closeModal();
  };

  const handleEdit = (review) => {
    setEditingReview(review);
    setFormData({
      name: review.name,
      company: review.company,
      content: review.content,
      image: review.image,
      star: review.star
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      setReviews(reviews.filter(review => review.id !== id));
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingReview(null);
    setFormData({ name: '', company: '', content: '', image: '', star: '5' });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Testimonials Management</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <FaPlus className="mr-2" /> Add New Review
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                  onError={(e) => {
                    e.target.src = '/images/default-avatar.png';
                  }}
                />
                <div>
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-gray-600 text-sm">{review.company}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleEdit(review)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaEdit size={18} />
                </button>
                <button 
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleDelete(review.id)}
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{review.content}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < review.star ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
          </div>
        ))}
      </div>

      <CrudModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title={editingReview ? 'Edit Review' : 'Add New Review'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              className="w-full p-2 border rounded"
              rows="4"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating
            </label>
            <select
              value={formData.star}
              onChange={(e) => setFormData({...formData, star: e.target.value})}
              className="w-full p-2 border rounded"
            >
              {[1,2,3,4,5].map(num => (
                <option key={num} value={num}>{num} Stars</option>
              ))}
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
              {editingReview ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </CrudModal>
    </div>
  );
};

export default AdminTestimonials;
