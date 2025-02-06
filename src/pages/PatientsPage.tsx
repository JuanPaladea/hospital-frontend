import { useEffect, useState } from "react";
import Patient from "../types/Patient";
import { fetchPatients } from "../api/patientsService";
import { PaginationComponent } from "../components/PaginationComponent";
import { PatientsListComponent } from "../components/Patients/PatientsListComponent";

const PatientsPage = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);

  useEffect(() => {
    fetchPatients(page.toString(), size.toString())
      .then((data) => {
        setPatients(data.data);
      })
      .catch((error) => setError(error))
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
      <PaginationComponent page={page} handlePrevious={handlePrevious} handleNext={handleNext} />
    </>
  )
}

export default PatientsPage