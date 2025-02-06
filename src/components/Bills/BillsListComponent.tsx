import { Link } from "react-router";
import Bill from "../../types/Bill";

interface BillsListComponentProps {
  bills: Bill[];
  loading: boolean;
  error: string | null;
}

export const BillsListComponent: React.FC<BillsListComponentProps> = ({ bills, loading, error }) => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Bills</h1>
        {/* Link to Add Bill Form */}
        <Link
          to="/bills/add"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Bill
        </Link>
      </div>

      {loading && <p>Loading bills...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && bills?.length > 0 && (
        <>
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">ID</th>
                <th className="py-2 px-4 border">Patient ID</th>
                <th className="py-2 px-4 border">Amount</th>
                <th className="py-2 px-4 border">Date</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Study ID</th>
                <th className="py-2 px-4 border">Created At</th>
                <th className="py-2 px-4 border">Updated At</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill) => (
                <tr key={bill.id} className="text-center">
                  <td className="py-2 px-4 border">{bill.id}</td>
                  <td className="py-2 px-4 border">{bill.patient_id}</td>
                  <td className="py-2 px-4 border">${bill.amount}</td>
                  <td className="py-2 px-4 border">
                    {new Date(bill.date).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border">{bill.status}</td>
                  <td className="py-2 px-4 border">{bill.study_id}</td>
                  <td className="py-2 px-4 border">
                    {new Date(bill.created_at).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border">
                    {new Date(bill.updated_at).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border space-x-2">
                    {/* View Bill (using bill id) */}
                    <Link
                      to={`/bills/${bill.id}`}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      View
                    </Link>
                    {/* Edit Bill */}
                    <Link
                      to={`/bills/${bill.id}/edit`}
                      className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-600"
                    >
                      Edit
                    </Link>
                    {/* Optionally, you can add a button for uploading payment proof */}
                    <Link
                      to={`/bills/${bill.id}/upload-payment`}
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                    >
                      Upload Payment
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      {!loading && !error && bills?.length === 0 && (
        <p>No bills found.</p>
      )}
    </div>
  )
}