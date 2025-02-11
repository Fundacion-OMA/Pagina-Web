import type { ReactNode } from "react";
import Navbar from "../components/navbar/Navbar.tsx";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
