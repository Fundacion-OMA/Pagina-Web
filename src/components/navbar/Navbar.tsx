import useAuth from "../hooks/useAuth";
import { Roles } from "../stores/user";
import RoleSelect from "./RoleSelect";

const Navbar = () => {
  const { user } = useAuth();
  const { role } = user;
  const isAnon = role === Roles.ANON;
  return (
    <div className="flex flex-col gap-y-2 relative">
      <RoleSelect />
      <nav className="bg-oma-lightgray box flex px-[25px] py-[20px] box-content h-[32px]">
        <img className="mr-auto" src="/icons/hamb_menu.svg" />
        <div
          className={`flex ${
            isAnon ? "gap-[20px]" : "gap-[38px]"
          } flex-row items-center`}
        >
          {!isAnon && <img src="/icons/bell.svg" />}
          <img src="/icons/faq.svg" />
          {!isAnon && <img src="/icons/user.svg" />}
          {isAnon && (
            <a className="text-black text-[25px] font-bold font-[Neue_Regrade]">
              Ingresar
            </a>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
