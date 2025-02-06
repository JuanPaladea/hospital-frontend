import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

const AuthLayout = () => {
  const { user } = useAuth();

  if (user) return <Navigate to="/dashboard" replace/>;

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
