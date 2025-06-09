import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { X,MenuIcon } from "lucide-react";
// import MenuToggleIcon from "./MenuToggleIcon";
const NavMenu = () => {
  return (
    <div className="w-fit relative">
      <Menu as="div" className="h-16 flex justify-center items-center relative">
        <MenuButton  className="px-2 py-1">
          <MenuIcon  />
         {/* <MenuToggleIcon  /> */}

        </MenuButton>
        <MenuItems className="w-screen absolute top-full start-0">
          <X className="absolute top-2 end-2 shadow" />
        </MenuItems>
      </Menu>
    </div>
  );
};

export default NavMenu;
