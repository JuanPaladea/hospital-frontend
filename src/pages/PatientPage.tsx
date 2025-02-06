import { useEffect, useState } from "react";
import Patient from "../types/Patient";
import { useParams } from "react-router";
import { fetchPatientById } from "../api/patientsService";
import { PatientComponent } from "../components/Patients/PatientComponent";

const PatientPage = () => {
  const {patientId} = useParams<{patientId: string}>();
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (patientId) {
      fetchPatientById(patientId)
        .then((data) => {
          setPatient(data.data);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    } else {
      setError("Patient ID is undefined");
      setLoading(false);
    }
  }, [patientId]);

  return (
    <>
      <PatientComponent patient={patient} loading={loading} error={error} />
    </>
  )
}

export default PatientPage