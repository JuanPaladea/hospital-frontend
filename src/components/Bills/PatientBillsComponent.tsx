import { Link } from "react-router";
import Bill from "../../types/Bill";

interface PatientBillsComponentProps {
  bills: Bill[];
  loading: boolean;
  error: string | null;
}

export const PatientBillsComponent: React.FC<PatientBillsComponentProps> = ({
  bills,
  loading,
  error,
}) => {
  return (
    <div className="mx-auto max-w-screen-xl py-3 px-4 2xl:px-0 lg:px-12">
      <h1 className="text-2xl font-bold mb-4">Patient Bills</h1>
      {loading && <p>Loading bills...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && bills.length === 0 && (
        <p>No bills found for this patient.</p>
      )}
      {!loading && !error && bills.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Patient ID</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Study ID</th>
                <th className="px-4 py-3">Created At</th>
                <th className="px-4 py-3">Updated At</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill) => (
                <tr key={bill.id}>
                  <td className="px-4 py-3">{bill.id}</td>
                  <td className="px-4 py-3">
                    {bill.patient_id}{" "}
                    <Link
                      to={`/patients/${bill.patient_id}`}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      View
                    </Link>{" "}
                  </td>
                  <td className="px-4 py-3">${bill.amount}</td>
                  <td className="px-4 py-3">
                    {new Date(bill.date).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">{bill.status}</td>
                  <td className="px-4 py-3">
                    {bill.study_id}{" "}
                    <Link
                      to={`/studies/${bill.study_id}`}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      View
                    </Link>{" "}
                  </td>
                  <td className="px-4 py-3">
                    {new Date(bill.created_at).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    {new Date(bill.updated_at).toLocaleString()}
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <Link
                      to={`/bills/${bill.id}`}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      View
                    </Link>
                    <Link
                      to={`/bills/${bill.id}/edit`}
                      className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-600"
                    >
                      Edit
                    </Link>
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
        </div>
      )}
    </div>
  );
};
