import PageHeader from '../components/PageHeader';
import bookingData from '../data/bookingData.json';

const GuestBookings = () => {
  return (
    <div>
      <PageHeader title="Booking List - Guest View" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookingData.map((booking) => (
          <div key={booking.ID} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">{booking['Passenger Name']}</h3>
            <p><strong>Destination:</strong> {booking.Destination}</p>
            <p><strong>Date:</strong> {booking.Date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestBookings;
