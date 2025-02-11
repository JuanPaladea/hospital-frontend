// src/pages/PatientsPage.tsx
import { useEffect, useState } from "react";
import Patient from "../types/Patient";
import { fetchPatients } from "../api/patientsService";
import { PaginationComponent } from "../components/PaginationComponent";
import { PatientsListComponent } from "../components/Patients/PatientsListComponent";

const PatientsPage: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const result = await fetchPatients(
          page.toString(),
          size.toString(),
          search
        );
        setPatients(result.data);
        setTotalPages(result.totalPages);
      } catch (err: any) {
        setError(err || "Error fetching patients");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, size, search]);

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(Number(e.target.value));
    setPage(1);
  };

  return (
    <>
      <PatientsListComponent
        patients={patients}
        search={search}
        onSearch={(query: string) => setSearch(query)}
        loading={loading}
        error={error}
      />
      <PaginationComponent
        page={page}
        size={size}
        totalPages={totalPages}
        handleSize={handleSizeChange}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </>
  );
};

export default PatientsPage;
