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
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Patient</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="bg-white p-4 rounded shadow">
        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name *
            </label>
            <input
              id="name"
              type="text"
              value={patient.name}
              onChange={handleInputChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Age *
            </label>
            <input
              id="age"
              type="number"
              value={patient.age}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="dni"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              DNI *
            </label>
            <input
              id="dni"
              type="text"
              value={patient.dni}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPatientComponent;
