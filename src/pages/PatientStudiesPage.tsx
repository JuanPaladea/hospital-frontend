import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Study from "../types/Study";
import { fetchStudiesByPatientId } from "../api/studiesService";
import { PatientStudiesComponent } from "../components/Studies/PatientStudiesComponent";

const PatientStudiesPage: React.FC = () => {
  const { patientId } = useParams<{ patientId: string }>();

  const [studies, setStudies] = useState<Study[]>([]);
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
        const result = await fetchStudiesByPatientId(patientId);
        setStudies(result.data);
      } catch (err: any) {
        setError(err || "Error fetching studies");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [patientId]);

  return (
    <PatientStudiesComponent studies={studies} loading={loading} error={error} />
  );
};

export default PatientStudiesPage;