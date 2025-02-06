import { Navigate, Route, Routes } from "react-router"
import AuthLayout from "../layouts/AuthLayout"
import MainLayout from "../layouts/MainLayout"
import LoginPage from "../pages/LoginPage"
import DashBoardPage from "../pages/DashBoardPage"
import PatientsPage from "../pages/PatientsPage"
import AddPatientPage from "../pages/AddPatientPage"
import StudiesPage from "../pages/StudiesPage"
import AddStudyPage from "../pages/AddStudyPage"
import BillsPage from "../pages/BillsPage"
import AddBillPage from "../pages/AddBillPage"
import RegisterPage from "../pages/RegisterPage"
import PatientPage from "../pages/PatientPage"
import StudyPage from "../pages/StudyPage"
import BillPage from "../pages/BillPage"
import EditBillPage from "../pages/EditBillPage"
import { useAuth } from "../context/AuthContext"

const MainRouter = () => {
  const user = useAuth()
  return (
    <Routes>
      <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} replace/> } />
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/patients" element={<PatientsPage />} />
        <Route path="/patients/add" element={<AddPatientPage />} />
        <Route path="/patients/:patientId" element={<PatientPage />} />
        <Route path="/studies" element={<StudiesPage />} />
        <Route path="/studies/add" element={<AddStudyPage />} />
        <Route path="/studies/:studyId" element={<StudyPage />} />
        <Route path="/bills" element={<BillsPage />} />
        <Route path="/bills/add" element={<AddBillPage />} />
        <Route path="/bills/:billId" element={<BillPage />} />
        <Route path="/bills/:billId/edit" element={<EditBillPage />} />
      </Route>
    </Routes>
  )
}

export default MainRouter