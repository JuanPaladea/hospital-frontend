import { useState } from "react";
import { useNavigate } from "react-router";
import { loginUser } from "../api/sessionService";
import LoginComponent from "../components/loginComponent.tsx";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await loginUser(email, password);
      toast.success("Login successful");
      navigate("/dashboard");
    } catch (err: any) {
      toast.error(err.message || "Login failed");
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <LoginComponent email={email} setEmail={setEmail} password={password} setPassword={setPassword} error={error} loading={loading} handleLogin={handleLogin} />  
  );
};

export default LoginPage;