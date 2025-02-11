import { useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router";
import Patient from "../../types/Patient";

interface PatientListComponentProps {
  patients: Patient[];
  search: string;
  onSearch: (query: string) => void;
  size: number;
  handleSize: (e: ChangeEvent<HTMLSelectElement>) => void;
  loading: boolean;
  error: string | null;
}

export const PatientsListComponent: React.FC<PatientListComponentProps> = ({
  patients,
  search,
  onSearch,
  size,
  handleSize,
  loading,
  error,
}) => {
  const [localSearch, setLocalSearch] = useState<string>(search);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(localSearch);
  };

  return (
    <section className="bg-gray-50 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center" onSubmit={handleSubmit}>
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    value={localSearch}
                    onChange={handleInputChange}
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2"
                    placeholder="Search"
                  />
                </div>
                <button
                  type="submit"
                  className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg px-4 py-2 mr-2"
                >
                  Search
                </button>
                <div>
                  <select value={size} onChange={handleSize} className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg p-2">
                    <option value={5}>5 per page</option>
                    <option value={10}>10 per page</option>
                    <option value={20}>20 per page</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0 bg-blue-500 text-white rounded hover:bg-blue-600">
              <Link to="/patients/add" className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2">
                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                </svg>
                Add patient
              </Link>
            </div>
          </div>
          {loading && <p className="text-center py-4">Loading...</p>}
          {error && <p className="text-red-500 text-center py-4">{error}</p>}
          {!loading && !error && patients?.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-4 py-3">ID</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Age</th>
                    <th className="px-4 py-3">DNI</th>
                    <th className="px-4 py-3">Created At</th>
                    <th className="px-4 py-3">Updated At</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr key={patient.id} className="border-b">
                      <td className="px-4 py-3">{patient.id}</td>
                      <td className="px-4 py-3">{patient.name}</td>
                      <td className="px-4 py-3">{patient.age}</td>
                      <td className="px-4 py-3">{patient.dni}</td>
                      <td className="px-4 py-3">
                        {new Date(patient.created_at).toLocaleString()}
                      </td>
                      <td className="px-4 py-3">
                        {new Date(patient.updated_at).toLocaleString()}
                      </td>
                      <td className="px-4 py-3 space-x-2">
                        <Link
                          to={`/patients/${patient.id}`}
                          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                        >
                          View
                        </Link>
                        <Link
                          to={`/patients/${patient.id}/edit`}
                          className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-600"
                        >
                          Edit
                        </Link>
                        <Link
                          to={`/patients/${patient.id}/details`}
                          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                        >
                          Details
                        </Link>
                        <Link
                          to={`/studies/patient/${patient.id}`}
                          className="bg-purple-500 text-white px-2 py-1 rounded hover:bg-purple-600"
                        >
                          Studies
                        </Link>
                        <Link
                          to={`/bills/patient/${patient.id}`}
                          className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                        >
                          Bills
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {!loading && !error && patients?.length === 0 && (
            <p className="text-center py-4">No patients found.</p>
          )}
        </div>
      </div>
    </section>
  );
};
