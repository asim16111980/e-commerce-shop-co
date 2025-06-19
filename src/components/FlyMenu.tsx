"use client";

import { motion } from "motion/react";
import { ChevronDown, X } from "lucide-react";
import SearchBox from "./SearchBox";
import { useLocale, useTranslations } from "next-intl";
import { COMMON_LINKS, USER_LINKS } from "@/constants/navLinks";
import { Link } from "@/i18n/navigation";
import clsx from "clsx";
import { useState } from "react";
import HoverUnderline from "./HoverUnderline ";
import Icon from "./Icon";
import SocialIcon from "./SocialIcon";

const NavMenu = ({ onClose }: { onClose: () => void }) => {
  const t = useTranslations("header");
  const locale = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const liClass =
    "relative w-full h-10 flex items-center justify-between border-b border-b-gray-200 group cursor-pointer";
  const transitionClass = "transition duration-300 ease-in-out";
  const chevronRotation = (index: number) =>
    openIndex === index
      ? locale === "ar"
        ? "rotate-180"
        : "-rotate-180"
      : "rotate-0";

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
        initial={{ x: locale === "ar" ? "100%" : "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: locale === "ar" ? "100%" : "-100%" }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className="w-11/12 h-full bg-white p-6 flex flex-col"
      >
        <div className="flex flex-col h-full gap-4">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-base font-medium text-black uppercase">
              {t("title")}
            </h1>
            <button type="button" onClick={onClose} aria-label="Close menu">
              <X className="text-gray-500" />
            </button>
          </div>
          {/* Search box */}
          <SearchBox />
          <nav className="w-full h-full flex flex-col justify-between">
            {/* Common Links */}
            <ul className="flex flex-col gap-4">
              {COMMON_LINKS.map((navLink, index) => {
                if ("href" in navLink && navLink.href) {
                  return (
                    <li key={navLink.label} className={liClass}>
                      <HoverUnderline />
                      <Link
                        href={navLink.href}
                        onClick={onClose}
                        className={clsx(
                          "absolute inset-0 size-full flex items-center text-gray-900 text-sm font-medium group-hover:text-blue-500 group-hover:font-bold",
                          transitionClass
                        )}
                      >
                        {t(`navLabels.${navLink.label}`)}
                      </Link>
                    </li>
                  );
                } else if ("nested" in navLink && navLink.nested) {
                  return (
                    <li key={navLink.label} className={liClass}>
                      <HoverUnderline />
                      <button
                        type="button"
                        onClick={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }
                        className={clsx(
                          "absolute inset-0 size-full flex items-center justify-between text-gray-900 text-sm font-medium group-hover:text-blue-500 group-hover:font-bold",
                          transitionClass
                        )}
                      >
                        <span>{t(`navLabels.${navLink.label}`)}</span>
                        <span
                          aria-expanded={openIndex === index}
                          className="size-6 flex items-center justify-center"
                        >
                          <ChevronDown
                            className={clsx(
                              "size-6",
                              transitionClass,
                              chevronRotation(index)
                            )}
                          />
                        </span>
                      </button>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
            {/* User Links */}
            <ul className="flex flex-col gap-4">
              {USER_LINKS.map((navLink) => (
                <li key={navLink.label} className={liClass}>
                  <HoverUnderline />
                  <span className="absolute inset-0 size-full flex items-center justify-between">
                    <Link
                      href={navLink.href}
                      onClick={onClose}
                      className={clsx(
                        "size-full flex items-center text-gray-500 text-lg font-medium group-hover:text-blue-500 group-hover:font-bold",
                        transitionClass
                      )}
                    >
                      {t(`navLabels.${navLink.label}`)}
                    </Link>
                    <span className="flex items-center gap-2">
                      <Icon
                        name={navLink.icon}
                        className="size-6 text-gray-900"
                      />
                      <span className="flex items-center justify-center size-5 rounded-full bg-gray-900 text-white text-xs font-bold">
                        2
                      </span>
                    </span>
                  </span>
                </li>
              ))}
              <li className="w-full h-12">
                <Link
                  href="/sign-in"
                  className="size-full flex items-center justify-center rounded bg-gray-900 text-white text-base font-medium"
                >
                  {t("navLabels.signIn")}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="">
              <SocialIcon name="instagram" className="size-6 text-gray-900" />
            </Link>
            <Link href="">
              <SocialIcon name="facebook" className="size-6 text-gray-900" />
            </Link>
            <Link href="">
              <SocialIcon name="youtube" className="size-6 text-gray-900" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NavMenu;
