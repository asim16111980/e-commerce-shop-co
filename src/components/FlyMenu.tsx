"use client";

import { motion } from "motion/react";
import { X } from "lucide-react";
import SearchBox from "./SearchBox";
import { useTranslations } from "next-intl";
import { navLinks } from "@/constants/navLinks";
import { Link } from "@/i18n/navigation";

const NavMenu = ({ onClose }: { onClose: () => void }) => {
  const t = useTranslations("header");

  return (
    <motion.div
      key="flyMenu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-screen h-screen bg-black bg-opacity-35 absolute top-0 start-0 z-50"
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className="w-11/12 h-full bg-white p-6 flex flex-col"
      >
        <div className="flex flex-col items-start gap-4">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-base font-medium text-black uppercase">
              {t("title")}
            </h1>
            <button type="button" onClick={onClose} aria-label="Close menu">
              <X className="text-gray-500" />
            </button>
          </div>
          <SearchBox />
          <nav className="w-full flex flex-col justify-between">
            <ul className="flex flex-col gap-4">
              {navLinks.map((navLink) => (
                <li
                  key={navLink.link}
                  className="relative w-full h-10 border-b border-b-gray-200 group cursor-pointer"
                >
                  <span className="absolute inset-0 origin-left scale-x-0 h-full group-hover:scale-x-100 border-b shadow-sm border-b-blue-600 transition duration-300"></span>
                  <Link
                    href={navLink.href}
                    className="absolute inset-0 size-full flex items-center text-gray-900 text-sm font-medium origin-left group-hover:text-blue-600 group-hover:font-bold transition duration-300"
                  >
                    {t(`navLabels.${navLink.link}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NavMenu;
