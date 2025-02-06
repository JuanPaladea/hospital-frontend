import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Bill from "../types/Bill";
import { EditBillComponent } from "../components/Bills/EditBillComponent";
import { fetchBillById, updateBill } from "../api/billsService";

const EditBillPage = () => {
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
  
  const onUpdate = async (billId: string, bill: Bill) => {
    try {
      const response = await updateBill(billId, bill)
      setBill(response.data)
    } catch (error: any) {
      setError(error)
    }
  };

  return (
    <>
      <EditBillComponent
        bill={bill}
        loading={loading}
        error={error}
        onUpdate={onUpdate}
        />
    </>
  )
}

export default EditBillPage