// src/components/Patients/PatientDetailsComponent.tsx
import React from "react";
import { PatientDetails } from "../../types/PatientDetails";
import { Link } from "react-router";

interface PatientDetailsComponentProps {
  details: PatientDetails;
  loading: boolean;
  error: string;
}

const PatientDetailsComponent: React.FC<PatientDetailsComponentProps> = ({
  details,
  loading,
  error,
}) => {
  if (loading) return <p>Loading patient details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const { patient, studies, bills } = details;

  return (
    <section className="bg-white py-8 antialiased md:py-8">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
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
        <div className="overflow-x-auto">
          <h1 className="text-2xl font-bold text-gray-900">Studies</h1>

          <table className="w-full text-sm text-left text-gray-500 my-4">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Patient ID</th>
                <th className="px-4 py-3">Created At</th>
                <th className="px-4 py-3">Updated At</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {studies.map((study) => (
                <tr key={study.id}>
                  <td className="px-4 py-3">{study.id}</td>
                  <td className="px-4 py-3">{study.type}</td>
                  <td className="px-4 py-3">{study.status}</td>
                  <td className="px-4 py-3">
                    {new Date(study.date).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    {study.patient_id}
                    <Link
                      to={`/patients/${study.patient_id}`}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      View
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    {new Date(study.created_at).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    {new Date(study.updated_at).toLocaleString()}
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <Link
                      to={`/studies/${study.id}`}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      View
                    </Link>
                    <Link
                      to={`/studies/${study.id}/edit`}
                      className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-600"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/studies/${study.id}/upload-result`}
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                    >
                      Upload Result
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h1 className="text-2xl font-bold text-gray-900">Bills</h1>
          <table className="w-full text-sm text-left text-gray-500 my-4">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Patient ID</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Study ID</th>
                <th className="px-4 py-3">Created At</th>
                <th className="px-4 py-3">Updated At</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill) => (
                <tr key={bill.id}>
                  <td className="px-4 py-3">{bill.id}</td>
                  <td className="px-4 py-3">
                    {bill.patient_id}
                    <Link
                      to={`/patients/${bill.patient_id}`}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      View
                    </Link>
                  </td>
                  <td className="px-4 py-3">${bill.amount}</td>
                  <td className="px-4 py-3">
                    {new Date(bill.date).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">{bill.status}</td>
                  <td className="px-4 py-3">
                    {bill.study_id}
                    <Link
                      to={`/studies/${bill.study_id}`}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      View
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    {new Date(bill.created_at).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    {new Date(bill.updated_at).toLocaleString()}
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <Link
                      to={`/bills/${bill.id}`}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      View
                    </Link>
                    <Link
                      to={`/bills/${bill.id}/edit`}
                      className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-600"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/bills/${bill.id}/upload-payment`}
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                    >
                      Upload Payment
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PatientDetailsComponent;
