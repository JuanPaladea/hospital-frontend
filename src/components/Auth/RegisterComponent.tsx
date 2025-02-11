import { Link } from "react-router";

interface registerComponentProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  password2: string;
  setPassword2: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
  loading: boolean;
  handleRegister: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const RegisterComponent: React.FC<registerComponentProps> = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  password2,
  setPassword2,
  error,
  loading,
  handleRegister,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleRegister} className="flex flex-col">
          <input
            type="text"
            placeholder="Username"
            className="border p-2 rounded mb-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border p-2 rounded mb-3"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded mt-2 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
          <p className="mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
