"use client";

import { CircleUser, Menu, Search, ShoppingCart } from "lucide-react";
import LangSwitcher from "./LangSwitcher";
import { useTranslations } from "next-intl";
import FlyMenu from "./FlyMenu";
import { useState } from "react";

const Header = () => {
  const t = useTranslations("header");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full min-h-16 flex items-center gap-1 bg-white text-black shadow-md">
      <button
        type="button"
        className="p-2 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </button>
      {isOpen && <FlyMenu onClose={() => setIsOpen(false)} />}
      {/* <h1 className="flex-1 text-2xl font-bold uppercase">{t("title")}</h1>
      <Search />
      <ShoppingCart />
      <CircleUser />
      <LangSwitcher /> */}
    </div>
  );
};

export default Header;
