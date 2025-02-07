import Patient from "./Patient";
import Study from "./Study";
import Bill from "./Bill";

export interface PatientDetails {
  patient: Patient;
  studies: Study[];
  bills: Bill[];
}