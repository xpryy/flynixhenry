const Table = ({ columns, data }) => (
    <table className="min-w-full table-auto border border-[#4a90e2]/20">
        <thead className="bg-[#063970] text-white">
            <tr>
                {columns.map((col, i) => (
                    <th key={i} className="p-3 text-left">{col}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((ticket, i) => (
                <tr key={i} className="hover:bg-[#4a90e2]/5 transition-colors">
                    <td className="p-3 border-t border-[#4a90e2]/20">{ticket.ID}</td>
                    <td className="p-3 border-t border-[#4a90e2]/20">{ticket.Destination}</td>
                    <td className="p-3 border-t border-[#4a90e2]/20">{ticket.SeatNumber}</td>
                    <td className="p-3 border-t border-[#4a90e2]/20">{ticket.Price}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;