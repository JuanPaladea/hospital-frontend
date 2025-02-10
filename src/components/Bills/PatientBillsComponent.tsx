import Bill from "../../types/Bill";

interface PatientBillsComponentProps {
  bills: Bill[];
  loading: boolean;
  error: string | null;
}

export const PatientBillsComponent: React.FC<PatientBillsComponentProps> = ({ bills, loading, error }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Patient Bills</h1>
      {loading && <p>Loading bills...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && bills.length === 0 && (
        <p>No bills found for this patient.</p>
      )}
      {!loading && !error && bills.length > 0 && (
        <div className="grid grid-cols-1 gap-4">
          {bills.map((bill) => (
            <div key={bill.id} className="bg-white shadow rounded p-4">
              <p><strong>ID:</strong> {bill.id}</p>
              <p><strong>Patient ID:</strong> {bill.patient_id}</p>
              <p>
                <strong>Amount:</strong> ${bill.amount}
              </p>
              <p><strong>Status:</strong> {bill.status}</p>
              <p>
                <strong>Date:</strong> {new Date(bill.date).toLocaleString()}
              </p>
              <p><strong>Study ID:</strong> {bill.study_id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};