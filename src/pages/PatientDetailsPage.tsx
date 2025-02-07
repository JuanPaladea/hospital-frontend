// src/pages/PatientDetailsPage.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PatientDetailsComponent from "../components/Patients/PatientDetailsComponent";
import { fetchPatientDetails } from "../api/patientsService";
import { PatientDetails } from "../types/PatientDetails";

const PatientDetailsPage: React.FC = () => {
  const { patientId } = useParams<{ patientId: string }>();
  const [details, setDetails] = useState<PatientDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const response = await fetchPatientDetails(patientId!);
        // Assuming response.data contains an object with patient, studies, and bills
        setDetails(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || "Error fetching patient details");
      } finally {
        setLoading(false);
      }
    };

    if (patientId) {
      fetchDetails();
    } else {
      setError("Patient ID is undefined.");
    }
  }, [patientId]);

  return (
    <div>
      {details ? (
        <PatientDetailsComponent details={details} loading={loading} error={error} />
      ) : (
        <p>{loading ? "Loading patient details..." : error}</p>
      )}
    </div>
  );
};

export default PatientDetailsPage;
