import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { RegisterComponent } from "../components/Auth/RegisterComponent";

const RegisterPage = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const { register, loading } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(username, email, password, password2);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err || "Register failed");
    }
  };

  return (
    <RegisterComponent
      username={username}
      setUsername={setUsername}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      password2={password2}
      setPassword2={setPassword2}
      error={error}
      loading={loading}
      handleRegister={handleRegister}
    />
  );
};

export default RegisterPage;
