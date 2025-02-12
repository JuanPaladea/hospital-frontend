interface Bill {
  id: number;
  patient_id: number;
  amount: number;
  date: string;
  status: "paid" | "unpaid" | "canceled";
  study_id: number;
  payment_path?: string;
  created_at: string;
  updated_at: string;
}

export default Bill;
