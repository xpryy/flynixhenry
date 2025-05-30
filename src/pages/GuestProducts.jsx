import PageHeader from '../components/PageHeader';
import productsData from '../data/productsData.json';

const GuestProducts = () => {
  return (
    <div>
      <PageHeader title="Product List - Guest View" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productsData.map((product) => (
          <div key={product.ID} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img 
              src={product.image} 
              alt={product.Makanan}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-bold text-lg mb-2">{product['Sajian Makanan']}</h3>
            <p className="text-gray-600"><strong>Makanan:</strong> {product.Makanan}</p>
            <p className="text-green-600 font-bold mt-2">${product.Price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestProducts;
