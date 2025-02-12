interface Study {
  id: number;
  type: string;
  status: "pending" | "completed" | "canceled";
  date: string;
  patient_id: number;
  result_file_path?: string;
  created_at: string;
  updated_at: string;
}

export default Study;
