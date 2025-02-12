// src/pages/EditStudyPage.tsx
import React, { useEffect, useState, FormEvent } from "react";
import { useParams, useNavigate } from "react-router";
import Study from "../types/Study";
import EditStudyComponent from "../components/Studies/EditStudyComponent";
import { fetchStudyById, updateStudy } from "../api/studiesService";

const EditStudyPage: React.FC = () => {
  const { studyId } = useParams<{ studyId: string }>();
  const navigate = useNavigate();

  const [study, setStudy] = useState<Study | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (studyId) {
      setLoading(true);
      fetchStudyById(studyId)
        .then((response) => {
          setStudy(response.data);
        })
        .catch((err) =>
          setError(err.response?.data?.message || "Error fetching study data")
        )
        .finally(() => setLoading(false));
    } else {
      setError("Study ID is undefined");
      setLoading(false);
    }
  }, [studyId]);

  const handleFieldChange = (field: keyof Study, value: any) => {
    if (study) {
      setStudy({ ...study, [field]: value });
    }
  };

  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!studyId || !study) return;
    setLoading(true);
    setError("");
    try {
      await updateStudy(studyId, study);
      navigate(`/studies/${studyId}`);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to update study");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {study ? (
        <EditStudyComponent
          study={study}
          loading={loading}
          error={error}
          handleUpdate={handleUpdate}
          onFieldChange={handleFieldChange}
        />
      ) : (
        <p>Loading study data...</p>
      )}
    </>
  );
};

export default EditStudyPage;
