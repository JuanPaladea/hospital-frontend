// src/components/NavBarComponent.tsx
import React from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const NavBarComponent: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login")
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4">
      <div className="text-white font-bold text-xl">
        <Link to="/dashboard">Logo</Link>
      </div>

      <div>
        <Link
          to="/dashboard"
          className="text-white hover:text-gray-300 font-medium"
        >
          Dashboard
        </Link>
      </div>

      <div className="text-white flex items-center space-x-4">
        {user ? (
          <>
            <span>Hi, {user.username}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="text-white hover:text-gray-300">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBarComponent;
