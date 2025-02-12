import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import NavBarComponent from "../components/NavBarComponent";

const MainLayout = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;

  return (
    <>
      <NavBarComponent />
      <Outlet />
    </>
  );
};

export default MainLayout;
