import React, { ChangeEvent, FormEvent } from "react";
import Study from "../../types/Study";

interface EditStudyComponentProps {
  study: Study;
  loading: boolean;
  error: string;
  handleUpdate: (e: FormEvent<HTMLFormElement>) => void;
  onFieldChange: (field: keyof Study, value: any) => void;
}

const EditStudyComponent: React.FC<EditStudyComponentProps> = ({ study, loading, error, handleUpdate, onFieldChange,}) => {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    onFieldChange(id as keyof Study, value);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Study</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="bg-white p-4 rounded shadow">
        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Type Field */}
          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Type *
            </label>
            <input
              id="type"
              type="text"
              placeholder="Study type"
              value={study.type}
              onChange={handleInputChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Status Field */}
          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Status *
            </label>
            <select
              id="status"
              value={study.status}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="canceled">Canceled</option>
            </select>
          </div>

          {/* Patient ID Field */}
          <div className="mb-4">
            <label
              htmlFor="patient_id"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Patient ID *
            </label>
            <input
              id="patient_id"
              type="number"
              placeholder="Patient ID"
              value={study.patient_id}
              onChange={handleInputChange}
              required
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

export default EditStudyComponent;
