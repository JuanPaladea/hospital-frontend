import Study from "../../types/Study";

interface PatientStudiesComponentProps {
  studies: Study[];
  loading: boolean;
  error: string | null;
}

export const PatientStudiesComponent: React.FC<PatientStudiesComponentProps> = ({ studies, loading, error }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Patient Studies</h1>
      {loading && <p>Loading studies...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && studies.length === 0 && (
        <p>No studies found for this patient.</p>
      )}
      {!loading && !error && studies.length > 0 && (
        <div className="grid grid-cols-1 gap-4">
          {studies.map((study) => (
            <div key={study.id} className="bg-white shadow rounded p-4">
              <p>
                <strong>ID:</strong> {study.id}
              </p>
              <p>
                <strong>Type:</strong> {study.type}
              </p>
              <p>
                <strong>Status:</strong> {study.status}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(study.date).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};