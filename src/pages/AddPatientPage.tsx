import { useState } from "react";
import { useNavigate } from "react-router";
import { createPatient } from "../api/patientsService";
import { AddPatientComponent } from "../components/AddPatientComponent";

const AddPatientPage = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [dni, setDni] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!name) {
      setError("Name is required");
      setLoading(false);
      return
    }

    try {
      await createPatient({ name, age, dni });
      navigate("/patients");
    } catch (err: any) {
      setError(err || "Failed to add patient");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AddPatientComponent name={name} setName={setName} age={age} setAge={setAge} dni={dni} setDni={setDni} error={error} loading={loading} handleSubmit={handleSubmit} />
    </>
  )
}

export default AddPatientPage;