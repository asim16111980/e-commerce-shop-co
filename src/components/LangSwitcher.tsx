"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Locale } from "@/types/languages";
import { Check, ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";
import Flag from "react-world-flags";

const LangSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;
  const t = useTranslations("common");
  const [openList, setOpenList] = useState(false);
  const langsCode = { ar: "eg", en: "gb" } as const;

  const handleSwitchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setOpenList(false);
  };

  return (
    <div className="w-fit relative bg-transparent ms-auto">
      <button
        type="button"
        onClick={() => setOpenList((val) => !val)}
        className="w-full flex items-center gap-1 bg-white text-black rounded-3xl shadow-lg p-1"
      >
        <Flag code={langsCode[currentLocale]} className="size-4" />
        <ChevronDown className="size-4" />
      </button>
      <ul
        className={`min-w-full flex flex-col gap-2 p-1 rounded shadow-md absolute mt-2 bg-white text-black z-10 ${
          openList ? "block" : "hidden"
        } ${currentLocale === "ar" ? "right-0" : "left-0"}`}
      >
        {routing.locales.map((lang) => {
          return (
            <li
              key={lang}
              onClick={() => handleSwitchLocale(lang)}
              className="flex items-center gap-1"
            >
              <Flag code={langsCode[lang]} className="size-4" />
              <span className="hidden">{t(`langs.${lang}`)}</span>
              <Check
                className={`size-4 text-green-700 ${
                  currentLocale === lang ? "visible" : "invisible"
                }`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LangSwitcher;
