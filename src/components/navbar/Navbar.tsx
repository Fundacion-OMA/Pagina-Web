import RoleSelect from "./RoleSelect";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <RoleSelect />
      <nav className="bg-oma-ligthgray box flex px-[25px] py-[20px]">
        <img className="mr-auto" src="/icons/hamb_menu.svg" />
        <div className="flex gap-[38px] flex-row">
          <img src="/icons/bell.svg" />
          <img src="/icons/faq.svg" />
          <img src="/icons/user.svg" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
