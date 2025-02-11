import Study from "../../types/Study";

interface StudyComponentProps {
  study: Study | null;
  loading: boolean;
  error: string | null;
}

export const StudyComponent: React.FC<StudyComponentProps> = ({ study, loading, error }) => {
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && study && (
        <section className="bg-white py-8 antialiased md:py-8">
          <div className="mx-auto max-w-screen-lg px-4 2xl:px-0">
            <div className="py-4 md:py-8">
              <div className="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <div>
                      <h2 className="flex items-center text-xl font-bold leading-none text-gray-900  sm:text-2xl">
                        Study {study.id}
                      </h2>
                    </div>
                  </div>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">ID</dt>
                    <dd className="text-gray-500 ">{study.id}</dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">Type</dt>
                    <dd className="text-gray-500 ">{study.type}</dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">Status</dt>
                    <dd className="text-gray-500 ">{study.status}</dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">Date</dt>
                    <dd className="text-gray-500 ">{new Date(study.date).toLocaleDateString()}</dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">Patient ID</dt>
                    <dd className="text-gray-500 ">{study.patient_id}</dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">Created At</dt>
                    <dd className="text-gray-500 ">
                      {new Date(study.created_at).toLocaleDateString()}
                    </dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">Updated At</dt>
                    <dd className="text-gray-500 ">
                      {new Date(study.updated_at).toLocaleDateString()}
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
}