"use client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDown, Check } from "lucide-react";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale } from "@/types/languages";
import { LANGUAGE_LABELS } from "@/constants/locales";
import { Fragment } from "react";
import { clsx } from "clsx";
const LangSwitcher = () => {
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const handleChangeLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <div  className="w-fit relative ms-auto me-2">
    <Menu as="div" className="h-16 flex justify-center items-center relative">
      {({ open }) => (
        <>
          <MenuButton className="flex items-center gap-1 rounded-3xl border px-2 py-1 bg-white text-black text-xs data-[active]:ring-2 data-[active]:ring-blue-300">
            {LANGUAGE_LABELS[currentLocale]}
            <ChevronDown
              className={clsx(
                "size-4 transition-transform duration-200",
                open && "rotate-180"
              )}
            />
          </MenuButton>

          <Transition
            as={Fragment}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <MenuItems
              className="absolute top-full end-0 rounded bg-white p-2 shadow-lg z-10 flex flex-col gap-2 text-black"
            >
              {routing.locales.map((locale) => (
                <MenuItem
                  key={locale}
                  as="div"
                  onClick={() => handleChangeLocale(locale)}
                  className="flex items-center justify-between gap-2 rounded px-2 py-1 text-sm transition-colors data-[focus]:bg-gray-100 cursor-pointer"
                >
                  {LANGUAGE_LABELS[locale]}

                  <span
                    className={clsx(
                      "transition-opacity duration-200",
                      currentLocale === locale ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <Check className="size-4 text-green-600" />
                  </span>
                </MenuItem>
              ))}
            </MenuItems>
          </Transition>
        </>
      )}
    </Menu></div>
  );
};

export default LangSwitcher;
