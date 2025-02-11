import type { Roles } from "../stores/user";
import useAuth from "../hooks/useAuth";

const RoleSelect: React.FC = () => {
  const { user, changeRole } = useAuth();
  return (
    <form>
      <select
        value={user.role}
        onChange={(e) => {
          changeRole(e.target.value as Roles);
        }}
      >
        {user.availableRoles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </form>
  );
};

export default RoleSelect;
