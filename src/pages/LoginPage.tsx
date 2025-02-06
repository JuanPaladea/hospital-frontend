import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { LoginComponent } from "../components/Auth/LoginComponent";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, loading } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err || "Login failed");
    }
  };
  
  return (
    <LoginComponent email={email} setEmail={setEmail} password={password} setPassword={setPassword} error={error} loading={loading} handleLogin={handleLogin} />  
  );
};

export default LoginPage;