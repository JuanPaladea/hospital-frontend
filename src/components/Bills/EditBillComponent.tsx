import Bill from "../../types/Bill";

interface EditBillComponentProps {
  bill: Bill | null;
  loading: boolean;
  error: string | null;
  onUpdate: (id: string, bill: Bill) => void;
}

export const EditBillComponent: React.FC<EditBillComponentProps> = ({ bill, loading, error, onUpdate }) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Edit Bill</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && bill && (
        <div className="bg-white p-4 rounded shadow">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onUpdate(bill.id.toString(), bill);
            }}
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                Amount
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="amount"
                type="number"
                placeholder="Amount"
                value={bill.amount}
                onChange={(e) => {
                  const amount = e.target.value;
                  bill.amount = Number(amount);
                }}
              />
            </div>

            {/* status */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                Status
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="status"
                value={bill.status}
                onChange={(e) => {
                  const status = e.target.value;
                  bill.status = status as "paid" | "unpaid" | "canceled";
                }}
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
              >
                Update Bill
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}