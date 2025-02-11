interface AddPatientComponentProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  age: string;
  setAge: React.Dispatch<React.SetStateAction<string>>;
  dni: string;
  setDni: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
  loading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AddPatientComponent: React.FC<AddPatientComponentProps> = ({
  name,
  setName,
  age,
  setAge,
  dni,
  setDni,
  error,
  loading,
  handleSubmit,
}) => {
  return (
    <section className="bg-white ">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 ">
          Add a new patient
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type name"
                required
              />
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="age"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Age
              </label>
              <input
                type="number"
                name="age"
                id="age"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Type age"
              />
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="dni"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                DNI
              </label>
              <input
                type="text"
                name="dni"
                id="dni"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                placeholder="Type DNI"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800 cursor-pointer"
          >
            {loading ? "Adding..." : "Add patient"}
          </button>
        </form>
      </div>
    </section>
  );
};
