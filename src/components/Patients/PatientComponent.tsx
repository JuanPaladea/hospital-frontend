import Patient from "../../types/Patient";

interface PatientComponentProps {
  patient: Patient | null;
  loading: boolean;
  error: string | null;
}

export const PatientComponent: React.FC<PatientComponentProps> = ({ patient, loading, error }) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Patient Details</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && patient && (
        <div className="bg-white p-4 rounded shadow">
          <p>
            <span className="font-bold">ID:</span> {patient.id}
          </p>
          <p>
            <span className="font-bold">Name:</span> {patient.name}
          </p>
          <p>
            <span className="font-bold">Age:</span> {patient.age}
          </p>
          <p>
            <span className="font-bold">DNI:</span> {patient.dni}
          </p>
          <p>
            <span className="font-bold">Created At:</span>{" "}
            {new Date(patient.created_at).toLocaleString()}
          </p>
          <p>
            <span className="font-bold">Updated At:</span>{" "}
            {new Date(patient.updated_at).toLocaleString()}
          </p>
        </div>
      )}
    </>
  );
}
