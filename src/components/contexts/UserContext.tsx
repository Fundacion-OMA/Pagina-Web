import { createContext, type ReactNode } from "react";

export type User = {
  role: Roles;
  availableRoles: Roles[];
};

export enum Roles {
  ANON = "anon",
  ADMIN = "admin",
  PARTICIPANT = "participant",
  JURY = "jury",
  REGIONALADMIN = "regionaladmin",
  SCHOOLADMIN = "schooladmin",
}

export type UserContextType = {
  user: User;
  changeRole: (role: Roles) => void;
};

const AuthContext = createContext<UserContextType>({
  user: { role: Roles.ANON, availableRoles: [] },
  changeRole: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const user: User = {
    role: Roles.ANON,
    availableRoles: Object.keys(Roles) as Roles[],
  };
  const changeRole = (role: Roles) => {
    if (user.availableRoles.includes(role)) user.role = role;
    throw new Error("Role not available");
  };
  return (
    <AuthContext.Provider value={{ user, changeRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
