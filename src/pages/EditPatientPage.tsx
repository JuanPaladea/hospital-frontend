// src/pages/EditPatientPage.tsx
import React, { useEffect, useState, FormEvent } from "react";
import { useParams, useNavigate } from "react-router";
import Patient from "../types/Patient";
import EditPatientComponent from "../components/Patients/EditPatientComponent";
import { fetchPatientById, updatePatient } from "../api/patientsService";

const EditPatientPage: React.FC = () => {
  const { patientId } = useParams<{ patientId: string }>();
  const navigate = useNavigate();
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (patientId) {
      setLoading(true);
      fetchPatientById(patientId)
        .then((response) => {
          setPatient(response.data);
        })
        .catch((err) =>
          setError(err.response?.data?.message || "Error fetching patient data")
        )
        .finally(() => setLoading(false));
    } else {
      setError("Patient ID is undefined");
    }
  }, [patientId]);

  const handleFieldChange = (field: keyof Patient, value: any) => {
    if (patient) {
      setPatient({ ...patient, [field]: value });
    }
  };

  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!patientId || !patient) return;
    setLoading(true);
    setError("");
    try {
      await updatePatient(patientId, patient);
      navigate(`/patients/${patientId}`);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to update patient");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {patient ? (
        <EditPatientComponent
          patient={patient}
          loading={loading}
          error={error}
          handleUpdate={handleUpdate}
          onFieldChange={handleFieldChange}
        />
      ) : (
        <p>Loading patient data...</p>
      )}
    </>
  );
};

export default EditPatientPage;
