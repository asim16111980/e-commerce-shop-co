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
    <header className="flex flex-col">
      <PromoBar />
      <div className="w-full h-16 flex items-center justify-between xl:px-40 md:px-14 px-8 py-4">
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
        <h1 className="text-2xl text-black font-bold uppercase">
          {t("title")}
        </h1>
        <nav className="hidden sm:block">
          <ul className="flex items-center md:gap-10 gap-4">
            {COMMON_LINKS.map((navLink) => (
              <li key={navLink.label}>
                <Link
                  href={navLink.href}
                  className="text-sm font-medium text-gray-600"
                >
                  {t(`navLabels.${navLink.label}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-4">
            <li className="size-6 hidden sm:block">
              <Search className="text-gray-600" />
            </li>
            <li className="size-6 hidden sm:block">
              <ShoppingCart className="text-gray-600" />
            </li>
            <li className="size-6 hidden sm:block">
              <CircleUser className="text-gray-600" />
            </li>
          </ul>
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
