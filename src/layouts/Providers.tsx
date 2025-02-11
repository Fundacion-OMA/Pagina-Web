import type { ReactNode } from "react";
import { AuthProvider } from "../components/contexts/UserContext";

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
