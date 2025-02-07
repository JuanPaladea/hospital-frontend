// src/pages/UploadStudyPage.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useParams } from "react-router";
import UploadStudyComponent from "../components/Studies/UploadStudyComponent";
import { uploadResult } from "../api/studiesService";

const UploadStudyPage: React.FC = () => {
  const { studyId } = useParams<{ studyId: string }>();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  // Handle file input change
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  // Handle form submission to upload the file
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    setUploading(true);
    try {
      const response = await uploadResult(studyId as string, file);
      console.log(response)
      setSuccess("File uploaded successfully.");
    } catch (err: any) {
      setError(err || "File upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <UploadStudyComponent
      file={file}
      uploading={uploading}
      error={error}
      success={success}
      handleFileChange={handleFileChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default UploadStudyPage;
