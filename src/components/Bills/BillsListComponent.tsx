import { Link } from "react-router";
import Bill from "../../types/Bill";
import { ChangeEvent } from "react";

interface BillsListComponentProps {
  bills: Bill[];
  size: number;
  handleSize: (e: ChangeEvent<HTMLSelectElement>) => void;
  loading: boolean;
  error: string | null;
}

export const BillsListComponent: React.FC<BillsListComponentProps> = ({
  bills,
  size,
  handleSize,
  loading,
  error,
}) => {
  return (
    <section className="bg-gray-50 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <div>
                  <select
                    value={size}
                    onChange={handleSize}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg p-2"
                  >
                    <option value={5}>5 per page</option>
                    <option value={10}>10 per page</option>
                    <option value={20}>20 per page</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0 bg-blue-500 text-white rounded hover:bg-blue-600">
              <Link
                to="/bills/add"
                className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                <svg
                  className="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add bill
              </Link>
            </div>
          </div>
          {loading && <p className="text-center py-4">Loading...</p>}
          {error && <p className="text-red-500 text-center py-4">{error}</p>}
          {!loading && !error && bills?.length > 0 && (
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
          {!loading && !error && bills?.length === 0 && (
            <p className="text-center py-4">No bills found.</p>
          )}
        </div>
      </div>
    </section>
  );
};
