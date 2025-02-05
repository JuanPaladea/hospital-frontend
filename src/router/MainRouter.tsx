import { Route, Routes } from "react-router"
import AuthLayout from "../layouts/AuthLayout"
import MainLayout from "../layouts/MainLayout"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import DashBoardPage from "../pages/DashBoardPage"
import PatientsPage from "../pages/PatientsPage"
import AddPatientPage from "../pages/AddPatientPage"
import StudiesPage from "../pages/StudiesPage"
import AddStudyPage from "../pages/AddStudyPage"

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/patients" element={<PatientsPage />} />
        <Route path="/patients/add" element={<AddPatientPage />} />
        <Route path="/studies" element={<StudiesPage />} />
        <Route path="/studies/add" element={<AddStudyPage />} />
      </Route>
    </Routes>
  )
}

export default MainRouter