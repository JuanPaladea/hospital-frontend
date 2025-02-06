import { useState } from "react"
import { useNavigate } from "react-router";
import { createBill } from "../api/billsService";
import { AddBillComponent } from "../components/Bills/AddBillComponent";

const AddBillPage = () => {
  const [patientId, setPatientId] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [studyId, setStudyId] = useState<string>("");
  const [status, setStatus] = useState<"paid" | "unpaid" | "canceled">("unpaid");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!patientId || !amount || !studyId) {
      setError("Patient ID, Amount and Study ID are required");
      setLoading(false);
      return;
    }

    try {
      await createBill({ patient_id: parseInt(patientId), amount: parseFloat(amount), study_id: parseInt(studyId), status });
      navigate("/bills");
    } catch (err: any) {
      setError(err || "Failed to add bill");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AddBillComponent
      patientId={patientId}
      setPatientId={setPatientId}
      amount={amount}
      setAmount={setAmount}
      studyId={studyId}
      setStudyId={setStudyId}
      status={status}
      setStatus={setStatus}
      error={error}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  )
}

export default AddBillPage