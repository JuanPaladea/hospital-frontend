import Bill from "../../types/Bill";

interface BillComponentProps {
  bill: Bill | null;
  loading: boolean;
  error: string | null;
}

export const BillComponent: React.FC<BillComponentProps> = ({
  bill,
  loading,
  error,
}) => {
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && bill && (
        <section className="bg-white py-8 antialiased md:py-8">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="py-4 md:py-8">
              <div className="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <div>
                      <h2 className="flex items-center text-xl font-bold leading-none text-gray-900  sm:text-2xl">
                        Bill {bill.id}
                      </h2>
                    </div>
                  </div>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">ID</dt>
                    <dd className="text-gray-500 ">{bill.id}</dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">Amount</dt>
                    <dd className="text-gray-500 ">{bill.amount}</dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">Status</dt>
                    <dd className="text-gray-500 ">{bill.status}</dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">Date</dt>
                    <dd className="text-gray-500 ">
                      {new Date(bill.date).toLocaleDateString()}
                    </dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">Patient ID</dt>
                    <dd className="text-gray-500 ">{bill.patient_id}</dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">Created At</dt>
                    <dd className="text-gray-500 ">
                      {new Date(bill.created_at).toLocaleDateString()}
                    </dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">Updated At</dt>
                    <dd className="text-gray-500 ">
                      {new Date(bill.updated_at).toLocaleDateString()}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
