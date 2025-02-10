import { ChangeEvent, useEffect, useState } from "react";
import Bill from "../types/Bill";
import { fetchBills } from "../api/billsService";
import { BillsListComponent } from "../components/Bills/BillsListComponent";
import { PaginationComponent } from "../components/PaginationComponent";

const BillsPage = () => {
  const [bills, setBills] = useState<Bill[]>([]);
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
        const result = await fetchBills(page.toString(), size.toString());
        setBills(result.data);
        setTotalPages(result.totalPages);
      } catch (err: any) {
        setError(err || "Error fetching patients");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [page, size]);

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

  return (
    <>
      <BillsListComponent bills={bills} loading={loading} error={error} />
      <PaginationComponent page={page} size={size} totalPages={totalPages} handleSize={handleSizeChange} handlePrevious={handlePrevious} handleNext={handleNext} />
    </>
  )
}

export default BillsPage