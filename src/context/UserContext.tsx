import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { createContext, useEffect, useState } from "react";

interface User {
  id: number;
  username: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | null>(null);

const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = Cookies.get("token");
        if (token) {
          const decoded = jwt.decode(token) as { user: User };
          setUser(decoded.user);
        }
      } catch (error: any) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };