import PageHeader from '../components/PageHeader';
import Table from '../components/Table';
import bookingData from '../data/bookingData.json';

const Bookings = () => {
  const columns = ['ID', 'Flight', 'Ticket', 'Price '];
  return (
    <div>
      <PageHeader title="Booking List" />
      <Table columns={columns} data={bookingData} />
    </div>
  );
};

export default Bookings;
