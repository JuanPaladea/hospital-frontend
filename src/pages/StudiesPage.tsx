import { useEffect, useState } from "react";
import Study from "../types/Study";
import { useNavigate } from "react-router";
import { fetchStudies } from "../api/studiesService";
import StudiesListComponent from "../components/StudiesListComponent";
import { PaginationComponent } from "../components/PaginationComponent";

const StudiesPage = () => {
  const [studies, setStudies] = useState<Study[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudies(page.toString(), size.toString())
      .then((data) => {
        setStudies(data.studies);
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
    if (page) {
      setPage(page + 1);
    }
  }

  return (
    <>
      <StudiesListComponent studies={studies} loading={loading} error={error} />
      <PaginationComponent page={page} handlePrevious={handlePrevious} handleNext={handleNext} />
    </>
  )
}

export default StudiesPage;