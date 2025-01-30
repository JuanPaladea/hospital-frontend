import { Route, Routes } from "react-router"
import AuthLayout from "../layouts/AuthLayout"
import MainLayout from "../layouts/MainLayout"
import LoginPage from "../pages/LoginPage"

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<h1>Register</h1>} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/" element={<h1>Home</h1>} />
      </Route>
    </Routes>
  )
}

export default MainRouter