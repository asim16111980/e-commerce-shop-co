import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { X, MenuIcon } from "lucide-react";
import { navLinks } from "@/constants/navLinks";
const NavMenu = () => {
  return (
    <div className="w-fit relative">
      <Transition>
        <Menu
          as="div"
          className="h-16 flex justify-center items-center relative"
        >
          {({ open }) => (
            <>
              <MenuButton className="px-2 py-1">
                {open ? <X className="" /> : <MenuIcon />}
              </MenuButton>

              <MenuItems className="w-screen absolute top-full start-0">
                {navLinks.map((link) => (
                  <MenuItem></MenuItem>
                ))}
              </MenuItems>
            </>
          )}
        </Menu>
      </Transition>
    </div>
  );
};

export default NavMenu;
