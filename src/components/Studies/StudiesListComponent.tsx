import { Link } from "react-router";
import Study from "../../types/Study";

interface StudiesListComponentProps {
  studies: Study[];
  loading: boolean;
  error: string | null;
}

export const StudiesListComponent: React.FC<StudiesListComponentProps> = ({ studies, loading, error }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Studies</h1>
        {/* Link to Add Study Form */}
        <Link
          to="/studies/add"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Study
        </Link>
      </div>

      {loading && <p>Loading studies...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && studies?.length > 0 && (
        <>
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">ID</th>
                <th className="py-2 px-4 border">Type</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Date</th>
                <th className="py-2 px-4 border">Patient ID</th>
                <th className="py-2 px-4 border">Created At</th>
                <th className="py-2 px-4 border">Updated At</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {studies.map((study) => (
                <tr key={study.id} className="text-center">
                  <td className="py-2 px-4 border">{study.id}</td>
                  <td className="py-2 px-4 border">{study.type}</td>
                  <td className="py-2 px-4 border">{study.status}</td>
                  <td className="py-2 px-4 border">
                    {new Date(study.date).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border">{study.patient_id}</td>
                  <td className="py-2 px-4 border">
                    {new Date(study.created_at).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border">
                    {new Date(study.updated_at).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border space-x-2">
                    {/* View study */}
                    <Link
                      to={`/studies/${study.id}`}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      View
                    </Link>
                    {/* Edit study */}
                    <Link
                      to={`/studies/${study.id}/edit`}
                      className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-600"
                    >
                      Edit
                    </Link>
                    {/* Upload result */}
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
        </>
      )}
      {!loading && !error && studies?.length === 0 && (
        <p>No studies found.</p>
      )}
    </>
  )
}

export default StudiesListComponent;