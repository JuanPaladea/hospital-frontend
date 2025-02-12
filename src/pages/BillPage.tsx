import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Bill from "../types/Bill";
import { fetchBillById } from "../api/billsService";
import { BillComponent } from "../components/Bills/BillComponent";

const BillPage = () => {
  const { billId } = useParams<{ billId: string }>();
  const [bill, setBill] = useState<Bill | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (billId) {
      fetchBillById(billId)
        .then((data) => {
          setBill(data.data);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    } else {
      setError("Bill ID is undefined");
      setLoading(false);
    }
  }, [billId]);

  return (
    <>
      <BillComponent bill={bill} loading={loading} error={error} />
    </>
  );
};

export default BillPage;
