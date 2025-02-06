import { useNavigate } from "react-router";
import { useState } from "react";
import { createStudy } from "../api/studiesService";
import { AddStudyComponent } from "../components/Studies/AddStudyComponent";

const AddStudyPage = () => {
  const [type, setType] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [patient_id, setPatientId] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!type || !status || !patient_id) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    try {
      await createStudy({ type, status, patient_id });
      navigate("/studies");
    } catch (err: any) {
      setError(err || "Failed to add study");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AddStudyComponent
        type={type}
        setType={setType}
        status={status}
        setStatus={setStatus}
        patientId={patient_id}
        setPatientId={setPatientId}
        error={error}
        loading={loading}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default AddStudyPage;