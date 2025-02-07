import { ChangeEvent, useEffect, useState } from "react";
import Patient from "../types/Patient";
import { fetchPatients } from "../api/patientsService";
import { PaginationComponent } from "../components/PaginationComponent";
import { PatientsListComponent } from "../components/Patients/PatientsListComponent";
import useDebounce from "../hooks/useDebounce";

const PatientsPage = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  const [search, setSearch] = useState<string>("");

  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const searchParam = debouncedSearch.trim() === "" ? undefined : debouncedSearch;
        const result = await fetchPatients(page.toString(), size.toString(), searchParam || "");
        setPatients(result.data);
      } catch (err: any) {
        setError(err.response?.data?.message || "Error fetching patients");
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
  }

  const handleNext = () => {
    setPage(page + 1);
  }

  const handleSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSize(Number(e.target.value));
    setPage(1);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <>
      <PatientsListComponent patients={patients} search={search} handleSearch={handleSearchChange} loading={loading} error={error} />
      <PaginationComponent page={page} size={size} handleSize={handleSizeChange} handlePrevious={handlePrevious} handleNext={handleNext} />
    </>
  )
}

export default PatientsPage