// src/pages/EditBillPage.tsx
import { useEffect, useState, FormEvent } from "react";
import { useNavigate, useParams } from "react-router";
import Bill from "../types/Bill";
import { EditBillComponent } from "../components/Bills/EditBillComponent";
import { fetchBillById, updateBill } from "../api/billsService";

const EditBillPage = () => {
  const { billId } = useParams<{ billId: string }>();
  const [bill, setBill] = useState<Bill | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (billId) {
      fetchBillById(billId)
        .then((data) => {
          // Assume data.data is the Bill object
          setBill(data.data);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    } else {
      setError("Bill ID is undefined");
      setLoading(false);
    }
  }, [billId]);

  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!billId || !bill) return;
    setLoading(true);
    setError("");

    try {
      await updateBill(billId, bill);
      navigate(`/bills/${billId}`);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to update bill");
    } finally {
      setLoading(false);
    }
  };

  // A generic change handler for form fields
  const handleFieldChange = (field: keyof Bill, value: any) => {
    if (bill) {
      setBill({ ...bill, [field]: value });
    }
  };

  return (
    <>
      {bill && (
        <EditBillComponent
          bill={bill}
          loading={loading}
          error={error}
          handleUpdate={handleUpdate}
          onFieldChange={handleFieldChange}
        />
      )}
    </>
  );
};

export default EditBillPage;
