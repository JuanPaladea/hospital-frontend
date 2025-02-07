// src/components/Patients/PatientDetailsComponent.tsx
import React from "react";
import { PatientDetails } from "../../types/PatientDetails";

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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Patient Details</h1>

      {/* Patient Info */}
      <div className="bg-white shadow rounded p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Patient Information</h2>
        <p><strong>ID:</strong> {patient.id}</p>
        <p><strong>Name:</strong> {patient.name}</p>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>DNI:</strong> {patient.dni}</p>
        <p><strong>Created At:</strong> {new Date(patient.created_at).toLocaleString()}</p>
        <p><strong>Updated At:</strong> {new Date(patient.updated_at).toLocaleString()}</p>
      </div>

      {/* Studies */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Studies</h2>
        {studies.length === 0 ? (
          <p>No studies found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {studies.map((study) => (
              <div key={study.id} className="bg-white shadow rounded p-4">
                <p><strong>ID:</strong> {study.id}</p>
                <p><strong>Type:</strong> {study.type}</p>
                <p><strong>Status:</strong> {study.status}</p>
                <p><strong>Date:</strong> {new Date(study.date).toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bills */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Bills</h2>
        {bills.length === 0 ? (
          <p>No bills found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bills.map((bill) => (
              <div key={bill.id} className="bg-white shadow rounded p-4">
                <p><strong>ID:</strong> {bill.id}</p>
                <p><strong>Amount:</strong> ${bill.amount}</p>
                <p><strong>Status:</strong> {bill.status}</p>
                <p><strong>Date:</strong> {new Date(bill.date).toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDetailsComponent;
