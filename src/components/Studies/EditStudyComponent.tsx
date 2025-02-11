import React, { ChangeEvent, FormEvent } from "react";
import Study from "../../types/Study";

interface EditStudyComponentProps {
  study: Study;
  loading: boolean;
  error: string;
  handleUpdate: (e: FormEvent<HTMLFormElement>) => void;
  onFieldChange: (field: keyof Study, value: any) => void;
}

const EditStudyComponent: React.FC<EditStudyComponentProps> = ({
  study,
  loading,
  error,
  handleUpdate,
  onFieldChange,
}) => {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    onFieldChange(id as keyof Study, value);
  };

  return (
    <section className="bg-white ">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 ">
          Edit study {study.id}
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleUpdate}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-1">
              <label
                htmlFor="type"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Type
              </label>
              <input
                type="text"
                id="type"
                value={study.type}
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
                value={study.status}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="canceled">Canceled</option>
              </select>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="patient_id"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Patient ID
              </label>
              <input
                type="number"
                id="patient_id"
                value={study.patient_id}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800 cursor-pointer"
          >
            {loading ? "Adding..." : "Edit study"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditStudyComponent;
