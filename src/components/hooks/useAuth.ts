import { useStore } from "@nanostores/react";
import $user, { Roles } from "../stores/user";

const useAuth = () => {
  const user = useStore($user);
  const changeRole = (role: Roles) => {
    if (!user.availableRoles.includes(role))
      throw new Error("Role not available");
    $user.set({ ...user, role });
  };
  return { user, changeRole };
};

export default useAuth;
