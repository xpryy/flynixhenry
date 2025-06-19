import { useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import faqData from '../../data/faqData.json';
import CrudModal from '../components/CrudModal';

const AdminFAQ = () => {
  const [faqs, setFaqs] = useState(faqData);
  const [expandedId, setExpandedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState(null);
  const [formData, setFormData] = useState({ question: '', answer: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingFaq) {
      setFaqs(faqs.map(faq => 
        faq.id === editingFaq.id ? { ...faq, ...formData } : faq
      ));
    } else {
      const newFaq = {
        id: String(faqs.length + 1),
        ...formData,
        created_at: new Date().toISOString()
      };
      setFaqs([...faqs, newFaq]);
    }
    closeModal();
  };

  const handleEdit = (faq) => {
    setEditingFaq(faq);
    setFormData({ question: faq.question, answer: faq.answer });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this FAQ?')) {
      setFaqs(faqs.filter(faq => faq.id !== id));
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingFaq(null);
    setFormData({ question: '', answer: '' });
  };

  const addNew = () => {
    setEditingFaq(null);
    setFormData({ question: '', answer: '' });
    setIsModalOpen(true);
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">FAQ Management</h1>
        <button 
          onClick={addNew}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <FaPlus className="mr-2" /> Add New FAQ
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b last:border-b-0">
            <div className="p-4 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div 
                    className="flex items-center cursor-pointer"
                    onClick={() => toggleExpand(faq.id)}
                  >
                    {expandedId === faq.id ? <FaChevronUp className="mr-2" /> : <FaChevronDown className="mr-2" />}
                    <h3 className="font-semibold text-lg text-gray-800">{faq.question}</h3>
                  </div>
                  {expandedId === faq.id && (
                    <p className="mt-2 text-gray-600 pl-6">{faq.answer}</p>
                  )}
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <button 
                    onClick={() => handleEdit(faq)}
                    className="text-blue-600 hover:text-blue-800 p-1"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button 
                    className="text-red-600 hover:text-red-800 p-1"
                    onClick={() => handleDelete(faq.id)}
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </div>
              <div className="text-sm text-gray-500 mt-2 pl-6">
                Created: {new Date(faq.created_at).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>

      <CrudModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title={editingFaq ? 'Edit FAQ' : 'Add New FAQ'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Question
            </label>
            <input
              type="text"
              value={formData.question}
              onChange={(e) => setFormData({...formData, question: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Answer
            </label>
            <textarea
              value={formData.answer}
              onChange={(e) => setFormData({...formData, answer: e.target.value})}
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
              {editingFaq ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </CrudModal>
    </div>
  );
};

export default AdminFAQ;
