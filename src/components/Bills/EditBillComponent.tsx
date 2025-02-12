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

export const EditBillComponent: React.FC<EditBillComponentProps> = ({
  bill,
  loading,
  error,
  handleUpdate,
  onFieldChange,
}) => {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    onFieldChange(id as keyof Bill, value);
  };

  return (
    <section className="bg-white ">
      <div className="py-8 px-4 2xl:px-0 mx-auto max-w-xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 ">
          Edit bill {bill.id}
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleUpdate}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-1">
              <label
                htmlFor="amount"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Amount
              </label>
              <input
                type="number"
                id="amount"
                value={bill.amount}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Status
              </label>
              <select
                id="status"
                value={bill.status}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              >
                <option value="unpaid">Unpaid</option>
                <option value="paid">Paid</option>
                <option value="canceled">Canceled</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800 cursor-pointer"
          >
            {loading ? "Adding..." : "Edit bill"}
          </button>
        </form>
      </div>
    </section>
  );
};
