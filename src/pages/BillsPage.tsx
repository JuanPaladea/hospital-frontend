import { useEffect, useState } from "react";
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

  useEffect(() => {
    fetchBills(page.toString(), size.toString())
      .then((data) => setBills(data.data))
      .catch((err) => setError(err))
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
      <BillsListComponent bills={bills} loading={loading} error={error} />
      <PaginationComponent page={page} handlePrevious={handlePrevious} handleNext={handleNext} />
    </>
  )
}

export default BillsPage