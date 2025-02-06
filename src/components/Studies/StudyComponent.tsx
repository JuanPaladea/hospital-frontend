import { useState } from "react";
import Study from "../../types/Study";
import { useParams } from "react-router";

interface StudyComponentProps {
  study: Study | null;
  loading: boolean;
  error: string | null;
}

export const StudyComponent: React.FC<StudyComponentProps> = ({ study, loading, error }) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Study Details</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && study && (
        <div className="bg-white p-4 rounded shadow">
          <p>
            <span className="font-bold">ID:</span> {study.id}
          </p>
          <p>
            <span className="font-bold">Type:</span> {study.type}
          </p>
          <p>
            <span className="font-bold">Status:</span> {study.status}
          </p>
          <p>
            <span className="font-bold">Date:</span> {new Date(study.date).toLocaleString()}
          </p>
          <p>
            <span className="font-bold">Patient ID:</span> {study.patient_id}
          </p>
          <p>
            <span className="font-bold">Created At:</span> {new Date(study.created_at).toLocaleString()}
          </p>
          <p>
            <span className="font-bold">Updated At:</span> {new Date(study.updated_at).toLocaleString()}
          </p>
        </div>
      )}
    </>
  )
}