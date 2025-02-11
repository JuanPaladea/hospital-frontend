import React, { ChangeEvent, FormEvent } from "react";
import Patient from "../../types/Patient";

interface EditPatientComponentProps {
  patient: Patient;
  loading: boolean;
  error: string;
  handleUpdate: (e: FormEvent<HTMLFormElement>) => void;
  onFieldChange: (field: keyof Patient, value: any) => void;
}

const EditPatientComponent: React.FC<EditPatientComponentProps> = ({ patient, loading, error, handleUpdate, onFieldChange, }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    onFieldChange(id as keyof Patient, value);
  };
  return (
    <section className="bg-white ">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 ">
          Edit patient {patient.id}
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleUpdate}>
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
                id="name"
                value={patient.name}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
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
                id="age"
                value={patient.age}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
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
                id="dni"
                value={patient.dni}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800 cursor-pointer"
          >
            {loading ? "Adding..." : "Edit patient"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditPatientComponent;
