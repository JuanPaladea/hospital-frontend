// src/components/Bills/UploadPaymentComponent.tsx
import React, { ChangeEvent, FormEvent } from "react";

interface UploadPaymentComponentProps {
  uploading: boolean;
  error: string;
  success: string;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const UploadPaymentComponent: React.FC<UploadPaymentComponentProps> = ({
  uploading,
  error,
  success,
  handleFileChange,
  handleSubmit,
}) => {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Upload Payment File</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*,application/pdf"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <button
          type="submit"
          disabled={uploading}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          {uploading ? "Uploading..." : "Upload Payment"}
        </button>
      </form>
    </div>
  );
};

export default UploadPaymentComponent;
