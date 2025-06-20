"use client";

import { AnimatePresence } from "motion/react";
import { CircleUser, Menu, Search, ShoppingCart } from "lucide-react";
import LangSwitcher from "./LangSwitcher";
import { useTranslations } from "next-intl";
import FlyMenu from "./FlyMenu";
import { useState } from "react";
import PromoBar from "./PromoBar";
import { COMMON_LINKS } from "@/constants/navLinks";
import { Link } from "@/i18n/navigation";

const Header = () => {
  const t = useTranslations("header");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-16 flex items-center bg-white px-8 sm:px-40 py-4">
      <PromoBar />
      <nav>
        <button
          type="button"
          className="p-2 sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </button>
        <AnimatePresence>
          {isOpen && <FlyMenu onClose={() => setIsOpen(false)} />}
        </AnimatePresence>
        <h1 className="flex-1 text-2xl text-black font-bold uppercase">
          {t("title")}
        </h1>
        <ul>
          {/* {COMMON_LINKS.map((navLink) => (
            <li>
              <Link href={navLink.href}></Link>
            </li>
          ))} */}
        </ul>
        {/*<Search />
      <ShoppingCart />
      <CircleUser />*/}
        <LangSwitcher />
      </nav>
    </div>
  );
};

export default Header;
