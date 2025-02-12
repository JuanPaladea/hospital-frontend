import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Bill from "../types/Bill";
import { fetchBillsByPatientId } from "../api/billsService";
import { PatientBillsComponent } from "../components/Bills/PatientBillsComponent";

const PatientBillsPage: React.FC = () => {
  const { patientId } = useParams<{ patientId: string }>();

  const [bills, setBills] = useState<Bill[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      if (!patientId) {
        setError("Patient ID is missing.");
        return;
      }
      setLoading(true);
      setError("");

      try {
        const result = await fetchBillsByPatientId(patientId);
        setBills(result.data);
      } catch (err: any) {
        setError(err || "Error fetching bills");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [patientId]);

  return (
    <PatientBillsComponent bills={bills} loading={loading} error={error} />
  );
};

export default PatientBillsPage;
