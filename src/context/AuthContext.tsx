// src/context/AuthContext.tsx
import React, { createContext, useEffect, useState, useContext } from "react";
import api from "../api/axiosConfig";

interface User {
  id: number;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (
    username: string,
    email: string,
    password: string,
    password2: string
  ) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const refreshUser = async () => {
    try {
      setLoading(true);
      const response = await api.get("/session/me", {
        withCredentials: true,
      });
      setUser(response.data.user);
    } catch (err: any) {
      setUser(null);
      throw err.response?.data?.message || "Error fetching user";
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      await api.post("/session/login", { email, password });
      await refreshUser();
    } catch (err: any) {
      setUser(null);
      throw err.response?.data?.message || "Login failed";
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    username: string,
    email: string,
    password: string,
    password2: string
  ) => {
    try {
      setLoading(true);
      await api.post("/session/register", { username, email, password, password2 });
      await refreshUser();
    } catch (err: any) {
      setUser(null);
      throw err.response?.data?.message || "Registration failed";
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await api.post("/session/logout");
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, register, logout, refreshUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
