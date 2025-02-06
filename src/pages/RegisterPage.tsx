// import { useState } from "react";
// import { useNavigate } from "react-router";
// import toast from "react-hot-toast";

// import { RegisterComponent } from "../components/RegisterComponent";

// const RegisterPage = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [password2, setPassword2] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

  
//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
    
//     if (password !== password2) {
//       setError("Passwords do not match");
//       setLoading(false);
//       return;
//     }

//     try {
//       await registerUser(username, email, password);
//       toast.success("Login successful");
//       navigate("/dashboard");
//     } catch (err: any) {
//       toast.error(err || "Registration failed");
//       setError(err || "Registration failed");
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   return (
//     <RegisterComponent username={username} setUsername={setUsername} email={email} setEmail={setEmail} password={password} setPassword={setPassword} password2={password2} setPassword2={setPassword2} error={error} loading={loading} handleRegister={handleRegister} />
//   );
// };

// export default RegisterPage;