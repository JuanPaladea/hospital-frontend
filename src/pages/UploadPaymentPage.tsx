// src/pages/UploadPaymentPage.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useParams } from "react-router";
import UploadPaymentComponent from "../components/Bills/UploadPaymentComponent";
import { uploadPayment } from "../api/billsService";

const UploadPaymentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Local state for file, loading, error, and success messages
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  // Handler for file input changes
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  // Handler for form submission to upload the payment file
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
      const response = await uploadPayment(id as string, file);
      console.log(response)
      setSuccess("Payment file uploaded successfully.");
    } catch (err: any) {
      setError(err || "File upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <UploadPaymentComponent
      file={file}
      uploading={uploading}
      error={error}
      success={success}
      handleFileChange={handleFileChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default UploadPaymentPage;
