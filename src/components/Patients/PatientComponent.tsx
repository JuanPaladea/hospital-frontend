import Patient from "../../types/Patient";

interface PatientComponentProps {
  patient: Patient | null;
  loading: boolean;
  error: string | null;
}

export const PatientComponent: React.FC<PatientComponentProps> = ({
  patient,
  loading,
  error,
}) => {
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && patient && (
        <section className="bg-white py-8 antialiased md:py-8">
          <div className="mx-auto max-w-screen-lg px-4 2xl:px-0">
            <div className="py-4 md:py-8">
              <div className="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <div>
                      <h2 className="flex items-center text-xl font-bold leading-none text-gray-900  sm:text-2xl">
                        {patient.name}
                      </h2>
                    </div>
                  </div>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">ID</dt>
                    <dd className="text-gray-500 ">{patient.id}</dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">Age</dt>
                    <dd className="text-gray-500 ">{patient.age}</dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">DNI</dt>
                    <dd className="text-gray-500 ">{patient.dni}</dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">Created At</dt>
                    <dd className="text-gray-500 ">
                      {new Date(patient.created_at).toLocaleDateString()}
                    </dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 ">Updated At</dt>
                    <dd className="text-gray-500 ">
                      {new Date(patient.updated_at).toLocaleDateString()}
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
