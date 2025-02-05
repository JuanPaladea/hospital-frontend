import { Link } from "react-router"
import Patient from "../types/Patient"

interface PatientListComponentProps {
  patients: Patient[];
  loading: boolean;
  error: string | null;
}

export const PatientsListComponent: React.FC<PatientListComponentProps> = ({ patients, loading, error }) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Patients</h1>
      <Link
        to="/patients/add"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Patient
      </Link>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">ID</th>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Age</th>
                <th className="py-2 px-4 border">DNI</th>
                <th className="py-2 px-4 border">Created At</th>
                <th className="py-2 px-4 border">Updated At</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="text-center">
                  <td className="py-2 px-4 border">{patient.id}</td>
                  <td className="py-2 px-4 border">{patient.name}</td>
                  <td className="py-2 px-4 border">{patient.age}</td>
                  <td className="py-2 px-4 border">{patient.dni}</td>
                  <td className="py-2 px-4 border">
                    {new Date(patient.created_at).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border">
                    {new Date(patient.updated_at).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border space-x-2">
                    {/* Access patient by ID or DNI */}
                    <Link
                      to={`/patients/${patient.id}`}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      View
                    </Link>
                    {/* Edit patient */}
                    <Link
                      to={`/patients/${patient.id}/edit`}
                      className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-600"
                    >
                      Edit
                    </Link>
                    {/* Access patient details */}
                    <Link
                      to={`/patients/${patient.id}/details`}
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                    >
                      Details
                    </Link>
                    {/* Access patient studies (by id or dni) */}
                    <Link
                      to={`/studies/patient/${patient.id}`}
                      className="bg-purple-500 text-white px-2 py-1 rounded hover:bg-purple-600"
                    >
                      Studies
                    </Link>
                    {/* Access patient billing (by id or dni) */}
                    <Link
                      to={`/billing/patient/${patient.id}`}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Billing
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  )
}