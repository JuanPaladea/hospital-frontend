interface AddBillComponentProps {
  // const [patientId, setPatientId] = useState<string>("");
  // const [amount, setAmount] = useState<string>("");
  // const [studyId, setStudyId] = useState<string>("");
  // const [status, setStatus] = useState<"paid" | "unpaid" | "canceled">("unpaid");
  // const [error, setError] = useState<string | null>(null);
  // const [loading, setLoading] = useState<boolean>(false);
  
  patientId: string;
  setPatientId: React.Dispatch<React.SetStateAction<string>>;
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  studyId: string;
  setStudyId: React.Dispatch<React.SetStateAction<string>>;
  status: "paid" | "unpaid" | "canceled";
  setStatus: React.Dispatch<React.SetStateAction<"paid" | "unpaid" | "canceled">>;
  error: string | null;
  loading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AddBillComponent: React.FC<AddBillComponentProps> = ({ patientId, setPatientId, amount, setAmount, studyId, setStudyId, status, setStatus, error, loading, handleSubmit }) => {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add Bill</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <div>
          <label htmlFor="amount" className="block font-semibold mb-1">
            Amount *
          </label>
          <input
            id="amount"
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="studyId" className="block font-semibold mb-1">
            Study ID *
          </label>
          <input
            id="studyId"
            type="number"
            value={studyId}
            onChange={(e) => setStudyId(e.target.value)}
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
              setStatus(e.target.value as "paid" | "unpaid" | "canceled")
            }
            className="w-full border p-2 rounded"
          >
            <option value="unpaid">Unpaid</option>
            <option value="paid">Paid</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {loading ? "Adding..." : "Add Bill"}
        </button>
      </form>
    </div>
  )
}