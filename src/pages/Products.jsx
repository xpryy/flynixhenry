import PageHeader from '../components/PageHeader';
import Table from '../components/Table';
import productsData from '../data/productsData.json';

const Products = () => {
  const columns = ['Flight ID', 'Destination', 'Seat Number', 'Price'];
  return (
    <div>
      <PageHeader title="Available Flights" />
      <Table columns={columns} data={productsData} />
    </div>
  );
};

export default Products;
