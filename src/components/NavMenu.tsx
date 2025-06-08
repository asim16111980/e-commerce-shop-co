import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { MenuIcon, X } from "lucide-react";
const NavMenu = () => {
  return (
    <Menu as="div" className="relative">
      <MenuButton as="button" className="">
        <MenuIcon />
      </MenuButton>
      <MenuItems>
        <X />
      </MenuItems>
    </Menu>
  );
};

export default NavMenu;
