import { ChangeEvent, useEffect, useState } from "react";
import Study from "../types/Study";

import { fetchStudies } from "../api/studiesService";
import StudiesListComponent from "../components/Studies/StudiesListComponent";
import { PaginationComponent } from "../components/PaginationComponent";

const StudiesPage = () => {
  const [studies, setStudies] = useState<Study[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const result = await fetchStudies(page.toString(), size.toString());
        setStudies(result.data);
        setTotalPages(result.totalPages);
      } catch (err: any) {
        setError(err || "Error fetching patients");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, size]);

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page) {
      setPage(page + 1);
    }
  };

  const handleSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSize(Number(e.target.value));
    setPage(1);
  };

  return (
    <>
      <StudiesListComponent
        studies={studies}
        size={size}
        handleSize={handleSizeChange}
        loading={loading}
        error={error}
      />
      <PaginationComponent
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </>
  );
};

export default StudiesPage;
