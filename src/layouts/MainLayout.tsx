// src/layouts/MainLayout.tsx
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

const MainLayout = () => {  
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
