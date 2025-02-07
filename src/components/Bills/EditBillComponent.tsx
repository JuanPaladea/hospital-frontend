// src/components/Bills/EditBillComponent.tsx
import { ChangeEvent, FormEvent } from "react";
import Bill from "../../types/Bill";

interface EditBillComponentProps {
  bill: Bill;
  loading: boolean;
  error: string;
  handleUpdate: (e: FormEvent<HTMLFormElement>) => void;
  onFieldChange: (field: keyof Bill, value: any) => void;
}

export const EditBillComponent: React.FC<EditBillComponentProps> = ({bill, loading, error, handleUpdate, onFieldChange,}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    onFieldChange(id as keyof Bill, value);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Edit Bill</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="bg-white p-4 rounded shadow">
        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="amount"
              type="number"
              step="0.01"
              placeholder="Amount"
              value={bill.amount}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="status"
              value={bill.status}
              onChange={handleInputChange}
            >
              <option value="unpaid">Unpaid</option>
              <option value="paid">Paid</option>
              <option value="canceled">Canceled</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={loading}
            >
              Update Bill
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
