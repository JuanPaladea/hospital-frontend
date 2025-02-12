interface AddBillComponentProps {
  patientId: string;
  setPatientId: React.Dispatch<React.SetStateAction<string>>;
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  studyId: string;
  setStudyId: React.Dispatch<React.SetStateAction<string>>;
  status: "paid" | "unpaid" | "canceled";
  setStatus: React.Dispatch<
    React.SetStateAction<"paid" | "unpaid" | "canceled">
  >;
  error: string | null;
  loading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AddBillComponent: React.FC<AddBillComponentProps> = ({
  patientId,
  setPatientId,
  amount,
  setAmount,
  studyId,
  setStudyId,
  status,
  setStatus,
  error,
  loading,
  handleSubmit,
}) => {
  return (
    <section className="bg-white ">
      <div className="py-8 mx-auto max-w-xl lg:py-16 px-4 2xl:px-0">
        <h2 className="mb-4 text-xl font-bold text-gray-900 ">
          Add a new bill
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-1">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Patient ID
              </label>
              <input
                type="text"
                id="patientId"
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
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
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="studyId"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Study ID
              </label>
              <input
                type="text"
                id="studyId"
                value={studyId}
                onChange={(e) => setStudyId(e.target.value)}
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
                value={status}
                onChange={(e) => setStatus(e.target.value as any)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              >
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
                <option value="canceled">Canceled</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800 cursor-pointer"
          >
            {loading ? "Adding..." : "Add bill"}
          </button>
        </form>
      </div>
    </section>
  );
};
