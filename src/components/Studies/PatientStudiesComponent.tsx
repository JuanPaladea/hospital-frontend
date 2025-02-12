import { Link } from "react-router";
import Study from "../../types/Study";

interface PatientStudiesComponentProps {
  studies: Study[];
  loading: boolean;
  error: string | null;
}

export const PatientStudiesComponent: React.FC<
  PatientStudiesComponentProps
> = ({ studies, loading, error }) => {
  return (
    <div className="mx-auto max-w-screen-xl py-3 px-4 2xl:px-0">
      <h1 className="text-2xl font-bold mb-4">Patient Studies</h1>
      {loading && <p>Loading studies...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && studies.length === 0 && (
        <p>No studies found for this patient.</p>
      )}
      {!loading && !error && studies.length > 0 && (
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Patient ID</th>
              <th className="px-4 py-3">Created At</th>
              <th className="px-4 py-3">Updated At</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {studies.map((study) => (
              <tr key={study.id}>
                <td className="px-4 py-3">{study.id}</td>
                <td className="px-4 py-3">{study.type}</td>
                <td className="px-4 py-3">{study.status}</td>
                <td className="px-4 py-3">
                  {new Date(study.date).toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  {study.patient_id}{" "}
                  <Link
                    to={`/patients/${study.patient_id}`}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    View
                  </Link>{" "}
                </td>
                <td className="px-4 py-3">
                  {new Date(study.created_at).toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  {new Date(study.updated_at).toLocaleString()}
                </td>
                <td className="px-4 py-3 space-x-2">
                  <Link
                    to={`/studies/${study.id}`}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    View
                  </Link>
                  <Link
                    to={`/studies/${study.id}/edit`}
                    className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-600"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/studies/${study.id}/upload-result`}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  >
                    Upload Result
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
