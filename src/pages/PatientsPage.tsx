import { useEffect, useState } from "react";
import Patient from "../types/Patient";
import { fetchPatients } from "../api/patientsService";
import { PatientsListComponent } from "../components/PatientsListComponent";
import { PatientsPaginationComponent } from "../components/PatientsPaginationComponent";

const PatientsPage = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);

  useEffect(() => {
    fetchPatients(page.toString(), size.toString())
      .then((data) => {
        setPatients(data.patients);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
    }, [page, size]);
  
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  const handleNext = () => {
    setPage(page + 1);
  }

  return (
    <>
      <PatientsListComponent patients={patients} loading={loading} error={error} />
      <PatientsPaginationComponent page={page} handlePrevious={handlePrevious} handleNext={handleNext} />
    </>
  )
}

export default PatientsPage