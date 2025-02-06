import Bill from "../../types/Bill";

interface BillComponentProps {
  bill: Bill | null;
  loading: boolean;
  error: string | null;
}

export const BillComponent: React.FC<BillComponentProps> = ({ bill, loading, error }) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Bill Details</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && bill && (
        <div className="bg-white p-4 rounded shadow">
          <p>
            <span className="font-bold">ID:</span> {bill.id}
          </p>
          <p>
            <span className="font-bold">Patient ID:</span> {bill.patient_id}
          </p>
          <p>
            <span className="font-bold">Amount:</span> {bill.amount}
          </p>
          <p>
            <span className="font-bold">Created At:</span>{" "}
            {new Date(bill.created_at).toLocaleString()}
          </p>
          <p>
            <span className="font-bold">Updated At:</span>{" "}
            {new Date(bill.updated_at).toLocaleString()}
          </p>
        </div>
      )}
    </>
  );
}