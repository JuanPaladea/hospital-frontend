interface AddStudyComponentProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  patientId: string;
  setPatientId: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
  loading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AddStudyComponent: React.FC<AddStudyComponentProps> = ({ type, setType, status, setStatus, patientId, setPatientId, error, loading, handleSubmit }) => {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add Study</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="type" className="block font-semibold mb-1">
            Type *
          </label>
          <input
            id="type"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="status" className="block font-semibold mb-1">
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as "pending" | "completed" | "canceled")
            }
            className="w-full border p-2 rounded"
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>
        <div>
          <label htmlFor="patientId" className="block font-semibold mb-1">
            Patient ID *
          </label>
          <input
            id="patientId"
            type="number"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {loading ? "Adding..." : "Add Study"}
        </button>
      </form>
    </div>
  )
}